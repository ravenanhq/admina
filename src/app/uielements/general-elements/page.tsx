"use client";
import React from "react";
import { Grid } from "@mui/material";
import GeneralElements from "@/app/components/GeneralElements/GeneralElements";
import CustomElements from "@/app/components/CustomElements/CustomElements";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / General Elements</h4>
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
