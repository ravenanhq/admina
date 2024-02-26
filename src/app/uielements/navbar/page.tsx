"use client";
import React from "react";
import { Grid } from "@mui/material";
import NavbarElement from "@/app/components/NavbarElement/NavbarElement";

export default function Alerts() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Navbar</h4>
      <div style={{ paddingTop: 10 }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12} sm={12} xs={12}>
            <NavbarElement></NavbarElement>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
