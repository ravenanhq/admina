import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

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
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="secondary"
          name="Secondary"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="success"
          name="Success"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="warning"
          name="Warning"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="info"
          name="Info"
          style={{ borderRadius: "10px" }}
        ></ButtonComponent>
        <ButtonComponent
          variant="outlined"
          color="primary"
          name="Disabled"
          style={{ borderRadius: "10px" }}
          disabled
        ></ButtonComponent>
      </Box>
    </>
  );
};

export default OutlineButtonElement;
