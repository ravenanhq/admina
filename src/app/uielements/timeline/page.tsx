"use client";
import React from "react";
import { Grid } from "@mui/material";
import TimelineElement from "@/app/components/TimelineElement/TimelineElement";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Timeline</h4>
      <div style={{ paddingTop: 10 }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12} sm={12} xs={12}>
            <TimelineElement />
            </Grid>
        </Grid>
      </div>
    </>
  );
}
