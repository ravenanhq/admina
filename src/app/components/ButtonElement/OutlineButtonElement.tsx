import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";

const OutlineButtonElement = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
        Outline Buttons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <ButtonComponent
          variant="outlined"
          color="primary"
          name="Primary"
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="secondary"
          name="Secondary"
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="success"
          name="Success"
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="warning"
          name="Warning"
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="info"
          name="Info"
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="primary"
          name="Disabled"
          disabled
        ></ButtonComponent>
      </Box>
    </>
  );
};

export default OutlineButtonElement;
