import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  IconButton,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { generateRandomNumber } from "@/app/utils/KanbanBoardUtils";
import assigneesData from "./users.json";
import CloseIcon from "@mui/icons-material/Close";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
}

interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

interface TaskError {
  content: string;
  assignees: string;
  title: string;
  status: string;
  priority: string;
}

interface AddTaskProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  statuses: string[];
}

const AddTask: React.FC<AddTaskProps> = ({
  open,
  onClose,
  onSubmit,
  statuses,
}) => {
  const initialTaskState: Task = {
    id: String(generateRandomNumber()),
    content: "",
    assignees: [],
    title: "",
    status: statuses[0],
    priority: "Low",
  };

  const [task, setTask] = useState<Task>(initialTaskState);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [errors, setErrors] = useState<TaskError>({
    title: "",
    content: "",
    status: "",
    assignees: "",
    priority: "",
  });

  useEffect(() => {
    setAssignees(assigneesData);
  }, []);

  useEffect(() => {
    if (!open) {
      setErrors({
        title: "",
        content: "",
        status: "",
        assignees: "",
        priority: "",
      });
    }
  }, [open]);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [name as string]: value as string }));

    setErrors((prevErrors) => ({ ...prevErrors, [name as string]: "" }));
  };

  const handleSubmit = () => {
    const validationErrors: Partial<typeof errors> = {};
    if (!task.title) validationErrors.title = "Title is required";
    if (!task.content) validationErrors.content = "Content is required";
    if (!task.status) validationErrors.status = "Status is required";
    if (!task.assignees || task.assignees.length === 0)
      validationErrors.assignees = "At least one assignee is required";
    if (!task.priority) validationErrors.priority = "Priority is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as TaskError);
      return;
    }

    onSubmit(task);
    setTask(initialTaskState);
    onClose();
  };

  const handleAssigneeChange = (event: SelectChangeEvent<string[]>) => {
    setTask((prevTask) => ({
      ...prevTask,
      assignees:
        typeof event.target.value === "string"
          ? event.target.value.split(",")
          : (event.target.value as string[]),
    }));

    setErrors((prevErrors) => ({ ...prevErrors, assignees: "" }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          fullWidth
          value={task.title}
          name="title"
          label="Title"
          error={!!errors.title}
          placeholder="Title"
          helperText={errors.title}
          onChange={handleInputChange}
        />
        <TextField
          autoFocus
          label="Content"
          name="content"
          fullWidth
          margin="normal"
          placeholder="Content"
          value={task.content}
          onChange={handleInputChange}
          error={!!errors.content}
          helperText={errors.content}
        />
        <FormControl fullWidth error={!!errors.status} margin="normal">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            label="Status"
            name="status"
            fullWidth
            value={task.status}
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.status}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.priority} margin="normal">
          <InputLabel id="Priority">Priority</InputLabel>
          <Select
            label="Priority"
            name="priority"
            fullWidth
            value={task.priority}
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
          <FormHelperText>{errors.priority}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.assignees} margin="normal">
          <InputLabel id="Assignees">Assignees</InputLabel>
          <Select
            multiple
            label="Assignees"
            name="assignees"
            value={task.assignees}
            onChange={handleAssigneeChange}
            renderValue={(selected) => (
              <div>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={
                      assignees.find((user) => user.id === value)?.name || value
                    }
                  />
                ))}
              </div>
            )}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {assignees.map((assignee) => (
              <MenuItem key={assignee.id} value={assignee.id}>
                {assignee.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.assignees}</FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
