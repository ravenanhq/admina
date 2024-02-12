import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import OutlineButtonElement from "./OutlineButtonElement";
import BasicButtonElement from "./BasicButtonElement";
import ButtonWithIcon from "./ButtonWithIcon";
import GroupButton from "./GroupButton";

const ButtonsElements = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Buttons"
        sx={{ bgcolor: "#008744", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <BasicButtonElement></BasicButtonElement>
        <OutlineButtonElement></OutlineButtonElement>
        <ButtonWithIcon></ButtonWithIcon>
        <GroupButton></GroupButton>
      </CardContent>
    </Card>
  );
};

export default ButtonsElements;
