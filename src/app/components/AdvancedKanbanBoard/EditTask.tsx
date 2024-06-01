import React, { useEffect, useState } from "react";
import {
  Drawer,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import users from "./users.json";
import { Task } from "@mui/icons-material";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
}

interface Status {
  id: string;
  title: string;
}

interface EditTaskProps {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => void;
  statuses: Status[];
}

const EditTask: React.FC<EditTaskProps> = ({
  open,
  task,
  onClose,
  onSave,
  onChange,
  statuses,
}) => {
  const [localTask, setLocalTask] = useState<Task | null>(task);
  const [errors, setErrors] = useState({
    title: "",
    content: "",
    status: "",
    priority: "",
    assignees: "",
  });

  useEffect(() => {
    setLocalTask(task);
  }, [task]);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => {
    const { name, value } = event.target;
    if (localTask) {
      setLocalTask({ ...localTask, [name!]: value as string });
      onChange(event);
    }
  };

  const handleAssigneeChange = (event: SelectChangeEvent<string[]>) => {
    if (localTask) {
      setLocalTask({ ...localTask, assignees: event.target.value as string[] });
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    if (localTask && name) {
      setLocalTask({ ...localTask, [name]: value });
    }
  };

  const validateFields = () => {
    const newErrors = {
      title: localTask?.title ? "" : "Title is required",
      content: localTask?.content ? "" : "Content is required",
      status: localTask?.status ? "" : "Status is required",
      priority: localTask?.priority ? "" : "Priority is required",
      assignees: localTask?.assignees.length
        ? ""
        : "At least one assignee is required",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSave = () => {
    if (localTask && validateFields()) {
      onSave(localTask);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>
        <h2>Edit Task</h2>
        {localTask && (
          <>
            <TextField
              label="Title"
              name="title"
              value={localTask.title}
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              error={!!errors.title}
              helperText={errors.title}
            />
            <TextField
              label="Content"
              name="content"
              value={localTask.content}
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              error={!!errors.content}
              helperText={errors.content}
            />
            <FormControl fullWidth margin="normal" error={!!errors.status}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={localTask.status}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {statuses.map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.status}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.priority}>
              <InputLabel id="Priority">Priority</InputLabel>
              <Select
                label="Priority"
                name="priority"
                fullWidth
                value={localTask.priority}
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
            <FormControl fullWidth margin="normal" error={!!errors.assignees}>
              <InputLabel>Assignees</InputLabel>
              <Select
                label="Assignees"
                name="assignees"
                multiple
                value={localTask.assignees || []}
                onChange={handleAssigneeChange}
                renderValue={(selected) => (
                  <div>
                    {(selected as string[]).map((value) => (
                      <Chip
                        key={value}
                        label={
                          users.find((user) => user.id === value)?.name || value
                        }
                      />
                    ))}
                  </div>
                )}
              >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.assignees}</FormHelperText>
            </FormControl>
            <Button
              onClick={onClose}
              style={{ marginTop: 20, marginRight: 10 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ marginTop: 20 }}
            >
              Save
            </Button>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default EditTask;
