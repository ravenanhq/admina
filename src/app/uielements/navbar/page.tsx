"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import NavbarElement from "@/app/components/NavbarElement/NavbarElement";

export default function Navbar() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        UI Elements / Navbar
      </Typography>
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
