import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import ButtonComponent from "../../BaseComponent/Button";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const ShoppingImage = "/assets/images/online-shopping 1.png";

const SimpleModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Card
          variant="outlined"
          style={{ borderRadius: "5px", border: "none" }}
        >
          <CardHeader
            title="Simple Modal"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
            action={
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="subtitle2" sx={{ pt: 2, color: "#747474" }}>
              This is the Simple Modal.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Image
                src={ShoppingImage}
                alt="customer support"
                width="125"
                height="125"
              />
              <Typography
                variant="subtitle2"
                sx={{
                  pt: 2,
                  color: "#747474",
                  fontsize: "12px",
                  textAlign: "left",
                }}
              >
                Our difficulty in finding regular clothes that was of great
                quality, comfortable, and didn't impact the environment given
                way to Creatures of Habit.
              </Typography>
              <ButtonComponent
                variant="contained"
                name="Close"
                onClick={handleClose}
                size="large"
                style={{
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#007bff",
                  marginTop: "10px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default SimpleModal;
