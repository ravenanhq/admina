import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

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
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="secondary"
          name="Secondary"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="success"
          name="Success"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="warning"
          name="Warning"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="info"
          name="Info"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          color="primary"
          name="Disabled"
          style={{ borderRadius: "10px" }}
          disabled
        ></ButtonComponent>
      </Box>
    </>
  );
};

export default BasicButtonElement;
