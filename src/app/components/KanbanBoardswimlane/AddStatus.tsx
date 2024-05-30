import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface NewStatusProps {
  open: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
}

const AddStatus: React.FC<NewStatusProps> = ({ open, onClose, onSave }) => {
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
          label="Status Title"
          name="status"
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

export default AddStatus;
