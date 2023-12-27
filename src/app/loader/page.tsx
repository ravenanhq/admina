"use client";
import React from "react";
import { Grid } from "@mui/material";
import CircularIndeterminateElement from "../components/CircularIndeterminateElement/CircularIndeterminateElement";
import CircularColorElement from "../components/CircularColorElement/CircularColorElement";
import CircularLabelElement from "../components/CircularLabelElement/CircularLabelElement";
import CircularDeterminateElement from "../components/CircularDeterminateElement.tsx/CircularDeterminateElement";
import LinearIndeterminateElement from "../components/LinearIndeterminateElement/LinearIndeterminateElement";
import LinearColorElement from "../components/LinearColorElement/LinearColorElement";
import LinearDeterminateElement from "../components/LinearDeterminateElement/LinearDeterminateElement";
import LinearLabelElement from "../components/LinearLabelElement/LinearLabelElement";
import LinearBufferElement from "../components/LinearBufferElement/LinearBufferElement";

export default function Loaders() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>Loaders</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={6} xs={12}>
            <CircularIndeterminateElement />
          </Grid>
          <Grid item md={6} xs={12}>
            <CircularColorElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={6} xs={12}>
            <CircularLabelElement />
          </Grid>
          <Grid item md={6} xs={12}>
            <CircularDeterminateElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={6} xs={12}>
            <LinearIndeterminateElement />
          </Grid>
          <Grid item md={6} xs={12}>
            <LinearDeterminateElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={6} xs={12}>
            <LinearLabelElement />
          </Grid>
          <Grid item md={6} xs={12}>
            <LinearBufferElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={6} xs={12}>
            <LinearColorElement />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
