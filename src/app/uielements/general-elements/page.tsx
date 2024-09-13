"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import GeneralElements from "@/app/components/GeneralElements/GeneralElements";
import CustomElements from "@/app/components/CustomElements/CustomElements";

export default function Alerts() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        UI Elements / General Elements</Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
            <GeneralElements></GeneralElements>
            </Grid>
            <Grid item md={12}>
            <CustomElements></CustomElements>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
