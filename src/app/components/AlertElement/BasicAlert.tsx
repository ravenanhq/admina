import React from "react";
import { Box, Alert, AlertTitle, Divider, Typography } from "@mui/material";

const BasicAlert = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "10px" }}>
        Basic Alerts
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "18px",
        }}
      >
        <Alert severity="success" sx={{ flex: "1 1 200px" }}>
          <AlertTitle>Success</AlertTitle>
          This is a success alert!
        </Alert>
        <Alert severity="error" sx={{ flex: "1 1 200px" }}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert!
        </Alert>
        <Alert severity="info" sx={{ flex: "1 1 200px" }}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert!
        </Alert>
        <Alert severity="warning" sx={{ flex: "1 1 200px" }}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert!
        </Alert>
      </Box>
    </>
  );
};

export default BasicAlert;
