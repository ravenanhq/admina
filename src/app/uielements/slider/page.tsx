"use client";
import React from "react";
import { Grid } from "@mui/material";
import ProgressBarElement from "@/app/components/ProgressBarElement/ProgressBarElement";
import SliderElement from "@/app/components/SliderElement/SliderElement";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Slider</h4>
      <div style={{ paddingTop: 10 }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12} sm={12} xs={12}>
                <ProgressBarElement></ProgressBarElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12} sm={12} xs={12}>
                <SliderElement></SliderElement>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
