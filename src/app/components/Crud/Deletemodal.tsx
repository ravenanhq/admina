import React from "react";
import { Modal, Button, Box, IconButton, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

const DeleteModal = ({ open, onClose, onDeleteConfirm }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose} style={{ borderRadius: "20px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          width: isMobile ? "70%" : "40%",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <div style={{ textAlign: "right", padding: "10px" }}>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={onClose}
            sx={{ padding: isMobile ? "0 8px 8px 8px" : "8px" }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Divider sx={{ margin: "0 17px 0 0", width: "100%" }} />
        <p style={{ padding: "20px" }}>
          Are you sure you want to delete this record?
        </p>
        <Divider sx={{ margin: "0 17px 0 0", width: "100%" }} />
        <div style={{ textAlign: "right", padding: "0 16px 16px" }}>
          <Button
            onClick={onDeleteConfirm}
            variant="contained"
            style={{
              margin: "15px 0 0 0",
              textTransform: "capitalize",
              borderRadius: "15px",
              padding: "6px 20px",
              boxShadow: "none",
              background: "#1d8683",
            }}
          >
            Delete
          </Button>
          <Button
            onClick={onClose}
            variant="contained"
            style={{
              margin: "15px 0 0 10px",
              textTransform: "capitalize",
              borderRadius: "15px",
              padding: "6px 20px",
              boxShadow: "none",
              background: "#58544D",
            }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
