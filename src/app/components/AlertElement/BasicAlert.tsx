import React from "react";
import { Box, Alert, AlertTitle, Divider, Typography } from "@mui/material";

const BasicAlert = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: "14px", fontWeight: "600", color: "#565656" }}
      >
        Basic Alerts
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
        <Alert severity="success" sx={{ flex: "1 1 200px", fontSize: "12px" }}>
          <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
            Success
          </AlertTitle>
          This is a success alert!
        </Alert>
        <Alert severity="error" sx={{ flex: "1 1 200px", fontSize: "12px" }}>
          <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
            Error
          </AlertTitle>
          This is an error alert!
        </Alert>
        <Alert severity="info" sx={{ flex: "1 1 200px", fontSize: "12px" }}>
          <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
            Info
          </AlertTitle>
          This is an info alert!
        </Alert>
        <Alert severity="warning" sx={{ flex: "1 1 200px", fontSize: "12px" }}>
          <AlertTitle sx={{ fontSize: "14px", fontWeight: "600", mb: 1 }}>
            Warning
          </AlertTitle>
          This is a warning alert!
        </Alert>
      </Box>
    </>
  );
};

export default BasicAlert;
