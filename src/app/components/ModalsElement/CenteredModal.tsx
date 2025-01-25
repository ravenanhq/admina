import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../BaseComponent/Button";
import VericalCenteredModal from "./VericalCenteredModal";

const CenteredModal = () => {
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
          title="Centered modals"
          sx={{ bgcolor: "#007BFF", color: "white" }}
          titleTypographyProps={{ fontSize: "14px" }}
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonComponent
                variant="contained"
                name="Vertically Centered"
                onClick={handleOpen}
                size="large"
                style={{
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#7a70ba",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <VericalCenteredModal
        open={open}
        handleClose={handleClose}
      ></VericalCenteredModal>
    </>
  );
};

export default CenteredModal;
