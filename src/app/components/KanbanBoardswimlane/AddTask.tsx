import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import assigneesData from "./users.json";
import CloseIcon from "@mui/icons-material/Close";
import { generateRandomNumber } from "@/app/utils/KanbanBoardUtils";

interface TaskDetails {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  swimlane: string;
  priority: string;
  project: string;
}

interface Column {
  id: string;
  title: string;
  order: number;
}

interface ColumnTasks {
  [columnId: string]: TaskDetails[];
}

interface Swimlane {
  [swimlane: string]: ColumnTasks[];
}

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: TaskDetails) => void;
  columnId: string;
  columns: Column[];
  swimlanes: Swimlane[];
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
  swimlane: string;
}
const AddTask: React.FC<AddTaskDialogProps> = ({
  open,
  onClose,
  onSave,
  columnId,
  columns,
  swimlanes,
}) => {
  const initialTaskState: TaskDetails = {
    id: String(generateRandomNumber()),
    content: "",
    assignees: [],
    title: "",
    status: columnId,
    priority: "Low",
    swimlane: "",
    project: "",
  };

  const [task, setTask] = useState<TaskDetails>(initialTaskState);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [errors, setErrors] = useState<TaskError>({
    title: "",
    content: "",
    status: "",
    assignees: "",
    priority: "",
    swimlane: "",
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
        swimlane: "",
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
    if (!task.swimlane) validationErrors.swimlane = "Swimlane is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as TaskError);
      return;
    }

    onSave(task);
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
    <Dialog open={open} onClose={onClose}>
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
          margin="dense"
          name="title"
          label="Task Title"
          fullWidth
          value={task.title}
          onChange={handleInputChange}
          error={!!errors.title}
          placeholder="Title"
          helperText={errors.title}
        />
        <TextField
          margin="dense"
          label="Task Content"
          name="content"
          fullWidth
          value={task.content}
          onChange={handleInputChange}
          error={!!errors.title}
          placeholder="Task Content"
          helperText={errors.title}
        />
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
            {assignees.map((assignee) => (
              <MenuItem key={assignee.id} value={assignee.id}>
                {assignee.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.assignees}</FormHelperText>
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
          </Select>
          <FormHelperText>{errors.priority}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.status} margin="normal">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            label="Status"
            name="status"
            fullWidth
            value={task.status == "" ? columnId : task.status}
            onChange={handleSelectChange}
          >
            {columns.map((column) => (
              <MenuItem key={column.id} value={column.id}>
                {column.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.status}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.swimlane} margin="normal">
          <InputLabel id="demo-simple-select-label">Swimlane</InputLabel>
          <Select
            label="Swimlane"
            name="swimlane"
            fullWidth
            value={task.swimlane}
            onChange={handleSelectChange}
          >
            {swimlanes.map((swimlane, index) => {
              const swimlaneName = Object.keys(swimlane)[0];
              return (
                <MenuItem key={index} value={swimlaneName}>
                  {swimlaneName}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>{errors.swimlane}</FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
