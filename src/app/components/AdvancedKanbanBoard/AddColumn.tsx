import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface NewColumnProps {
  open: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
}

const NewColumn: React.FC<NewColumnProps> = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState<{ title: string }>({ title: "" });

  const validate = () => {
    let isValid = true;
    let errors = { title: "" };

    if (!title.trim()) {
      errors.title = "Status title is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleClose = () => {
    setTitle("");
    setErrors({ title: "" });
    onClose();
  };

  const handleSave = () => {
    if (validate()) {
      onSave(title);
      setTitle("");
      setErrors({ title: "" });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Status</DialogTitle>
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
        <TextField
          autoFocus
          margin="dense"
          label="Status Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={!!errors.title}
          helperText={errors.title}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewColumn;
