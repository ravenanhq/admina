"use client";
import React from "react";
import { Grid } from "@mui/material";
import AlertElements from "@/app/components/AlertElement/AlertElement";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Alerts</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
             <AlertElements></AlertElements>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
