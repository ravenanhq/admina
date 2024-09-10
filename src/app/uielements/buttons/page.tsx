"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import ButtonsElements from "@/app/components/ButtonElement/ButtonElement";

export default function Button() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "20px", fontWeight: "bold" }}
      >
        UI Elements / Buttons
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12}>
            <ButtonsElements></ButtonsElements>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
