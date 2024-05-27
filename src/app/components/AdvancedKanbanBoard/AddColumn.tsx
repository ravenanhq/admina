import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

interface NewColumnProps {
  open: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
}

const NewColumn: React.FC<NewColumnProps> = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    onSave(title);
    setTitle("");
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Status</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Status Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewColumn;
