"use client";
import React from "react";
import { Grid } from "@mui/material";
import ButtonsElements from "@/app/components/ButtonElement/ButtonElement";

export default function Button() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Buttons</h4>
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
