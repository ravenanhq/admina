"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import AlertElements from "@/app/components/AlertElement/AlertElement";

export default function Alerts() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "20px", fontWeight: "bold" }}
      >
        UI Elements / Alerts
      </Typography>
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
