import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import OutlineButtonElement from "./OutlineButtonElement";
import BasicButtonElement from "./BasicButtonElement";
import TextButton from "./TextButton";
import GroupButton from "./GroupButton";
import ElevatedButton from "./ElevatedButton";

const ButtonsElements = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Buttons"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <BasicButtonElement></BasicButtonElement>
        <OutlineButtonElement></OutlineButtonElement>
        <TextButton></TextButton>
        <ElevatedButton></ElevatedButton>
        <GroupButton></GroupButton>
      </CardContent>
    </Card>
  );
};

export default ButtonsElements;
