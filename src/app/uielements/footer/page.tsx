"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import LightFooterElement from "../../components/Footers/LightFooterElement";
import DarkFooterElement from "../../components/Footers/DarkFooterElement";
import TransparentFooterElement from "../../components/Footers/TransparentFooterElement";
import FixedFooterElement from "../../components/Footers/FixedFooterElement";

export default function Footer() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        UI Elements / Footers
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} xs={12}>
            <LightFooterElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={12} xs={12}>
            <DarkFooterElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={12} xs={12}>
            <TransparentFooterElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item md={12} xs={12}>
            <FixedFooterElement />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
