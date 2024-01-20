import React, { useState, useEffect } from "react";
import { Modal, Button, TextField, Box } from "@mui/material";

interface RowData {
  order?: string;
  companyName?: string;
  status?: string;
  total?: string;
  date?: string;
}

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  rowData: RowData | null;
  onEdit: (editedData: RowData) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  rowData,
  onEdit,
}) => {
  const [editedData, setEditedData] = useState<RowData>({});
  const [successMessageOpen,setSuccessMessageOpen] = useState(false);

  useEffect(() => {
    setEditedData(rowData || {});
  }, [rowData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    onEdit(editedData);
    setSuccessMessageOpen(true);
  };
 
  
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          label="Order"
          name="Order"
          value={editedData.order || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company Name"
          name="companyName"
          value={editedData.companyName || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          name="status"
          value={editedData.status || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total"
          name="total"
          value={editedData.total || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          value={editedData.date || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save Changes
        </Button>
        <Button onClick={onClose} variant="contained" color="warning" style={{marginLeft:"10px"}}>Cancel</Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
