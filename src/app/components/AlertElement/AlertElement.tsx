import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Alert,
  AlertTitle,
} from "@mui/material";

const AlertElements = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Alerts"
        sx={{ bgcolor: "#AB361D", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
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
    </CardContent>
    </Card>
  );
};

export default AlertElements;
