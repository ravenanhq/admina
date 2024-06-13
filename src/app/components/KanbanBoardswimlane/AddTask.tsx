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
  title: string;
  status: string;
  priority: string;
  swimlane: string;
}
const AddTask: React.FC<AddTaskDialogProps> = ({
  open,
  onClose,
  onSave,
  columns,
  swimlanes,
}) => {
  const initialTaskState: TaskDetails = {
    id: String(generateRandomNumber()),
    content: "",
    assignees: [],
    title: "",
    status: "column1",
    priority: "Low",
    swimlane: "",
    project: "",
  };

  const [task, setTask] = useState<TaskDetails>(initialTaskState);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [errors, setErrors] = useState<TaskError>({
    title: "",
    content: "",
    status: "",
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
    if (!task.priority) validationErrors.priority = "Priority is required";
    if (!task.swimlane) validationErrors.swimlane = "Swimlane is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as TaskError);
      return;
    }

    onSave(task);
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
          label="Title"
          fullWidth
          value={task.title}
          onChange={handleInputChange}
          error={!!errors.title}
          placeholder="Title"
          helperText={errors.title}
        />
        <TextField
          margin="dense"
          label="Content"
          name="content"
          fullWidth
          value={task.content}
          onChange={handleInputChange}
          error={!!errors.content}
          placeholder="Content"
          helperText={errors.content}
          multiline
          rows={6}
          maxRows={10}
        />
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
        <FormControl fullWidth error={!!errors.status} margin="normal">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            label="Status"
            name="status"
            fullWidth
            value={task.status}
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
          <InputLabel id="Swimlane-select-label">Swimlane</InputLabel>
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
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
