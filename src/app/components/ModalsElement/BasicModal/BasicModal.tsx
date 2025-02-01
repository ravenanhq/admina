import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../BaseComponent/Button";
import ScrollModal from "./ScrollModal";
import SignUpModal from "./SignUpModal";
import SimpleModal from "./SimpleModal";
import ToolTipModal from "./ToolTipModal";

const BasicModals = () => {
  const [open, setOpen] = useState(false);
  const [scrollModalOpen, setScrollModalOpen] = useState(false);
  const [toolTipModalOpen, setToolTipModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScrollModalOpen = () => {
    setScrollModalOpen(true);
  };

  const handleScrollModalClose = () => {
    setScrollModalOpen(false);
  };

  const handleToolTipModalOpen = () => {
    setToolTipModalOpen(true);
  };

  const handleToolTipModalClose = () => {
    setToolTipModalOpen(false);
  };

  const handleSignUpModalOpen = () => {
    setSignUpModalOpen(true);
  };

  const handleSignUpModalClose = () => {
    setSignUpModalOpen(false);
  };

  return (
    <>
      <Card variant="outlined" style={{ borderRadius: "5px", border: "none" }}>
        <CardHeader
          title="Basic Modal"
          subheader="Different types of basic modals"
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
                name="simple"
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
                name="scrolling content"
                onClick={handleScrollModalOpen}
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
                name="Tooltips and Popovers"
                onClick={handleToolTipModalOpen}
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
                name="Open model For Sign-up"
                onClick={handleSignUpModalOpen}
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
      <SimpleModal open={open} handleClose={handleClose}></SimpleModal>
      <ScrollModal
        open={scrollModalOpen}
        handleClose={handleScrollModalClose}
      ></ScrollModal>
      <ToolTipModal
        open={toolTipModalOpen}
        handleClose={handleToolTipModalClose}
      ></ToolTipModal>
      <SignUpModal
        open={signUpModalOpen}
        handleClose={handleSignUpModalClose}
      ></SignUpModal>
    </>
  );
};

export default BasicModals;
