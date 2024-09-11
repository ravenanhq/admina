import React, { useState } from "react";
import {
  Box,
  Alert,
  AlertTitle,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AlertWithClose = () => {
  const [openSuccess, setOpenSuccess] = useState(true);
  const [openInfo, setOpenInfo] = useState(true);
  const [openError, setOpenError] = useState(true);
  const [openWarning, setOpenWarning] = useState(true);

  const handleSuccessClose = () => {
    setOpenSuccess(false);
  };

  const handleInfoClose = () => {
    setOpenInfo(false);
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  const handleWarningClose = () => {
    setOpenWarning(false);
  };

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginTop: "15px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#565656",
        }}
      >
        Alerts with Close
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2, background: "#C0C0C0" }} />
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "18px",
        }}
      >
        {openSuccess && (
          <Alert
            severity="success"
            sx={{ flex: "1 1 200px", position: "relative", fontSize: "12px" }}
          >
            <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
              Success
            </AlertTitle>
            This is a success alert!
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleSuccessClose}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Alert>
        )}

        {openError && (
          <Alert
            severity="error"
            sx={{ flex: "1 1 200px", position: "relative", fontSize: "12px" }}
          >
            <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
              Error
            </AlertTitle>
            This is an error alert!
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleErrorClose}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Alert>
        )}

        {openInfo && (
          <Alert
            severity="info"
            sx={{ flex: "1 1 200px", position: "relative", fontSize: "12px" }}
          >
            <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
              Info
            </AlertTitle>
            This is an info alert!
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleInfoClose}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Alert>
        )}

        {openWarning && (
          <Alert
            severity="warning"
            sx={{ flex: "1 1 200px", position: "relative", fontSize: "12px" }}
          >
            <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
              Warning
            </AlertTitle>
            This is a warning alert!
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleWarningClose}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Alert>
        )}
      </Box>
    </>
  );
};

export default AlertWithClose;
