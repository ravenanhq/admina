"use client";
import React from "react";
import { Grid } from "@mui/material";
import BasicFileUpload from "@/app/components/FileUpload/BasicFileUpload";
import MultipleFileUpload from "@/app/components/FileUpload/MultipleFileUpload";

export default function Upload() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / File Upload</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={12} md={12}>
            <BasicFileUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <MultipleFileUpload />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
