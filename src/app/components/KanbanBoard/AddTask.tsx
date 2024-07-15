import React, { useState } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

const AddTask = ({
  open,
  onCancel,
  onConfirm,
  statusOptions,
  assigneeOption,
  priorityOption,
}) => {
  const [formData, setFormData] = useState({
    task: "",
    status: "",
    assignee: "",
    priority: "",
  });

  const [errors, setErrors] = useState({
    task: "",
    status: "",
    assignee: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleConfirmClick = () => {
    if (validateForm()) {
      onConfirm(
        formData.task,
        formData.status,
        formData.assignee,
        formData.priority
      );
      setFormData({ task: "", status: "", assignee: "", priority: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.task.trim() === "") {
      newErrors.task = "Task is required";
      isValid = false;
    } else {
      newErrors.task = "";
    }

    if (formData.status.trim() === "") {
      newErrors.status = "Status is required";
      isValid = false;
    } else {
      newErrors.status = "";
    }

    if (formData.assignee.trim() === "") {
      newErrors.assignee = "Assignee is required";
      isValid = false;
    } else {
      newErrors.assignee = "";
    }

    if (formData.priority.trim() === "") {
      newErrors.priority = "Priority is required";
      isValid = false;
    } else {
      newErrors.priority = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleClose = () => {
    setFormData({ task: "", status: "", assignee: "", priority: "" });
    setErrors({
      task: "",
      status: "",
      assignee: "",
      priority: "",
    });
    onCancel();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Item</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
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
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <label htmlFor="status" style={{ marginBottom: "10px" }}>
            Title
          </label>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={formData.task}
            name="task"
            error={!!errors.task}
            placeholder="Title"
            helperText={errors.task}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          fullWidth
          error={!!errors.status}
          style={{ marginBottom: "10px" }}
        >
          <label htmlFor="statu" style={{ marginBottom: "10px" }}>
            Status
          </label>
          <Select
            value={formData.status}
            name="status"
            error={!!errors.status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Status</em>
            </MenuItem>
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
          {errors.status && (
            <span
              style={{ color: "#d32f2f", fontSize: "12px", margin: "4px 13px" }}
            >
              {errors.status}
            </span>
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={!!errors.priority}
          style={{ marginBottom: "10px" }}
        >
          <label htmlFor="priority" style={{ marginBottom: "10px" }}>
            Priority
          </label>
          <Select
            value={formData.priority}
            name="priority"
            error={!!errors.priority}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Priority</em>
            </MenuItem>
            {priorityOption.map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </Select>
          {errors.priority && (
            <span
              style={{ color: "#d32f2f", fontSize: "12px", margin: "4px 13px" }}
            >
              {errors.priority}
            </span>
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={!!errors.assignee}
          style={{ marginBottom: "10px" }}
        >
          <label htmlFor="assignee" style={{ marginBottom: "10px" }}>
            Assigned
          </label>
          <Select
            value={formData.assignee}
            name="assignee"
            error={!!errors.assignee}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Assignee</em>
            </MenuItem>
            {assigneeOption.map((assignee) => (
              <MenuItem key={assignee} value={assignee}>
                {assignee}
              </MenuItem>
            ))}
          </Select>
          {errors.assignee && (
            <span
              style={{ color: "#d32f2f", fontSize: "12px", margin: "4px 13px" }}
            >
              {errors.assignee}
            </span>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions style={{ paddingBottom: "15px" }}>
        <ButtonComponent
          variant="contained"
          type="button"
          onClick={handleConfirmClick}
          style={{
            background: "#1976d2",
            padding: "5px 15px",
            borderRadius: "4px",
            color: "#fff",
          }}
          name="submit"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          type="button"
          onClick={handleClose}
          style={{
            background: "#eaeaea",
            padding: "5px 15px",
            color: "#555",
            borderRadius: "4px",
          }}
          name="cancel"
        ></ButtonComponent>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
