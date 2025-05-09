"use client";
import React from "react";
import { Grid } from "@mui/material";
import BasicModals from "./BasicModal/BasicModal";
import SizesModals from "./SizesModals";
import CenteredModal from "./CenteredModal";
import ToggleModal from "./ToggleModal";

export default function Alerts() {
  return (
    <>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} md={6}>
            <BasicModals></BasicModals>
          </Grid>
          <Grid item xs={12} md={6}>
            <SizesModals></SizesModals>
          </Grid>
          <Grid item xs={12} md={6}>
            <CenteredModal></CenteredModal>
          </Grid>
          <Grid item xs={12} md={6}>
            <ToggleModal></ToggleModal>
          </Grid>
        </Grid>
      </div>
    </>
  );
}