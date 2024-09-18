import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import BasicAlert from "./BasicAlert";
import AlertWithClose from "./AlertWithCloseButton";

const AlertElements = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Alerts"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <BasicAlert></BasicAlert>
        <AlertWithClose></AlertWithClose>
      </CardContent>
    </Card>
  );
};

export default AlertElements;
