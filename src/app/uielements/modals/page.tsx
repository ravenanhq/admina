"use client";
import React from "react";
import { Grid } from "@mui/material";
import ModalsElement from "@/app/components/ModalsElement/ModalsElement";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Modals</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
            <ModalsElement></ModalsElement>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
