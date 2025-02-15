import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../BaseComponent/Button";
import ToggleModalScreen from "./ToggleModalScreen";

const ToggleModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card variant="outlined" style={{ borderRadius: "5px", border: "none" }}>
        <CardHeader
          title="Toggle between Modal"
          sx={{ bgcolor: "#007BFF", color: "white" }}
          titleTypographyProps={{ fontSize: "14px" }}
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Open Toggle Modal"
                onClick={handleOpen}
                size="large"
                style={{
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#007bff",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <ToggleModalScreen
        open={open}
        handleClose={handleClose}
      ></ToggleModalScreen>
    </>
  );
};

export default ToggleModal;
