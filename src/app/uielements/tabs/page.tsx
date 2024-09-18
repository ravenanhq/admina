"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import TabsElement from "@/app/components/TabsElement/TabsElement";

export default function Button() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        UI Elements / Tabs
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12}>
            <TabsElement></TabsElement>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
