import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";

const BasicButtonElement = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "10px" }}>
        Basic Buttons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <ButtonComponent
          variant="contained"
          color="primary"
          name="Primary"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="secondary"
          name="Secondary"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="success"
          name="Success"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="warning"
          name="Warning"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="info"
          name="Info"
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="primary"
          name="Disabled"
          disabled
        ></ButtonComponent>
      </Box>
    </>
  );
};

export default BasicButtonElement;
