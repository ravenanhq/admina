import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../BaseComponent/Button";
import ExtraLargeModal from "./ExtraLargeModal";
import FullScreenModal from "./FullScreenModal";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";

const SizesModals = () => {
  const [open, setOpen] = useState(false);
  const [extraLargeOpen, setExtraLargeOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExtraLargeOpen = () => {
    setExtraLargeOpen(true);
  };

  const handleExtraLargeClose = () => {
    setExtraLargeOpen(false);
  };

  const handleLargeOpen = () => {
    setLargeOpen(true);
  };

  const handleLargeClose = () => {
    setLargeOpen(false);
  };

  const handleSmallOpen = () => {
    setSmallOpen(true);
  };

  const handleSmallClose = () => {
    setSmallOpen(false);
  };

  return (
    <>
      <Card variant="outlined" style={{ borderRadius: "5px", border: "none" }}>
        <CardHeader
          title="Sizes Modal"
          subheader="Modals have four optional sizes"
          sx={{ bgcolor: "#007BFF", color: "white" }}
          titleTypographyProps={{ fontSize: "14px" }}
          subheaderTypographyProps={{
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Full screen modal"
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
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Extra Large Modal"
                onClick={handleExtraLargeOpen}
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
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Large Modal"
                onClick={handleLargeOpen}
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
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Small Modal"
                onClick={handleSmallOpen}
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
      <FullScreenModal open={open} handleClose={handleClose}></FullScreenModal>
      <ExtraLargeModal
        open={extraLargeOpen}
        handleClose={handleExtraLargeClose}
      ></ExtraLargeModal>
      <LargeModal open={largeOpen} handleClose={handleLargeClose}></LargeModal>
      <SmallModal open={smallOpen} handleClose={handleSmallClose}></SmallModal>
    </>
  );
};

export default SizesModals;
