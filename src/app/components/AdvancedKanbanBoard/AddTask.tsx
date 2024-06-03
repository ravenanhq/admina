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

interface Column {
  id: string;
  title: string;
  order: number;
}

interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

interface TaskError {
  content: string;
  title: string;
  status: string;
  priority: string;
}

interface AddTaskProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  statuses: Column[];
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
    status: "column1",
    priority: "Low",
  };

  const [task, setTask] = useState<Task>(initialTaskState);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [errors, setErrors] = useState<TaskError>({
    title: "",
    content: "",
    status: "",
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
    if (!task.priority) validationErrors.priority = "Priority is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as TaskError);
      return;
    }

    onSubmit(task);
    setTask(initialTaskState);
    setSelectedAssignees([]);
    onClose();
  };

  const handleAssigneeChange = (
    event: SelectChangeEvent<string | string[]>
  ) => {
    const selectedValues = event.target.value || [];
    setSelectedAssignees(
      Array.isArray(selectedValues) ? selectedValues : [selectedValues]
    );
    if (task) {
      setTask({
        ...task,
        assignees: Array.isArray(selectedValues)
          ? selectedValues
          : [selectedValues],
      });
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleChipDelete = (value: string) => {
    const updatedAssignees = selectedAssignees.filter((item) => item !== value);
    setSelectedAssignees(updatedAssignees);
    if (task) {
      setTask({ ...task, assignees: updatedAssignees });
    }
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
          multiline
          rows={6}
          maxRows={10}
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
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                {status.title}
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
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Highest">Highest</MenuItem>
          </Select>
          <FormHelperText>{errors.priority}</FormHelperText>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Assignees</InputLabel>
          <Select
            label="Assignees"
            name="assignees"
            multiple
            value={selectedAssignees || []}
            onChange={handleAssigneeChange}
            renderValue={(selected) => (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    onDelete={(event) => {
                      event.preventDefault();
                      handleChipDelete(value);
                    }}
                    label={
                      assignees.find((user) => user.id === value)?.name || value
                    }
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                  />
                ))}
              </div>
            )}
          >
            {assignees.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
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
