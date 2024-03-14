import React from "react";
import { Modal, Box, IconButton, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../BaseComponent/Button";

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
          <ButtonComponent
            variant="contained"
            onClick={onDeleteConfirm}
            style={{
              margin: "15px 0 0 10px",
              textTransform: "capitalize",
              padding: "6px 20px",
              boxShadow: "none",
              background: "#1d8683",
            }}
            name="Delete"
          ></ButtonComponent>
          <ButtonComponent
            variant="contained"
            onClick={onClose}
            style={{
              margin: "15px 0 0 10px",
              textTransform: "capitalize",
              padding: "6px 20px",
              boxShadow: "none",
              background: "#58544D",
            }}
            name="Cancel"
          ></ButtonComponent>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
