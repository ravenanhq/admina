import React from "react";
import { Modal, Box, CardActions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const DeleteModal = ({ open, onClose, onDeleteConfirm, orderId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "80%" : "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div>
          <h2>Delete Confirmation</h2>
          <p>
            Are you sure you want to delete this item?{" "}
            <span style={{ color: "#191c1a" }}>"{orderId}"</span>
          </p>
          <CardActions sx={{ justifyContent: "right" }}>
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={onDeleteConfirm}
              style={{
                backgroundColor: "#1976d2",
                margin: "15px 0 0 0",
                padding: "7px 15px",
              }}
              name="Delete"
            ></ButtonComponent>
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={onClose}
              style={{
                backgroundColor: "#ed6c02",
                margin: "15px 0 0 10px",
                padding: "7px 15px",
              }}
              name="Cancel"
            ></ButtonComponent>
          </CardActions>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
