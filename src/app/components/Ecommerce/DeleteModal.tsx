import React from "react";
import { Modal, Button, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DeleteModal = ({ open, onClose, onDeleteConfirm,orderId }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal open={open} onClose={onClose}>
        <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width:isMobile ? '80%' : 'auto',
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
      <div>
        <h2>Delete Confirmation</h2>
        <p>Are you sure you want to delete this Order? <span style={{color:"#191c1a"}}>"${orderId}"</span></p>
        <Button onClick={onDeleteConfirm} variant="contained" color="primary" style={{margin:"15px 0 0 0"}}>Delete</Button>
        <Button onClick={onClose} variant="contained" color="warning" style={{margin:"15px 0 0 10px"}}>Cancel</Button>
      </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
