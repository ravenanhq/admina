"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import BasicModals from "./BasicModal/BasicModal";
import SizesModals from "./SizesModals";
import CenteredModal from "./CenteredModal";
import ToggleModal from "./ToggleModal";

export default function Alerts() {
  return (
    <>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={6} sm={12}>
            <BasicModals></BasicModals>
          </Grid>
          <Grid item md={6} sm={12}>
            <SizesModals></SizesModals>
          </Grid>
          <Grid item md={6} sm={12}>
            <CenteredModal></CenteredModal>
          </Grid>
          <Grid item md={6} sm={12}>
            <ToggleModal></ToggleModal>
          </Grid>
        </Grid>
      </div>
    </>
  );
}