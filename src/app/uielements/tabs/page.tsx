"use client";
import React from "react";
import { Grid } from "@mui/material";
import TabsElement from "@/app/components/TabsElement/TabsElement";

export default function Button() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Tabs</h4>
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
