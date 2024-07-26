"use client";
import React from "react";
import { Grid } from "@mui/material";
import ImageFileUpload from "@/app/components/FileUpload/ImageFileUpload";
import PdfFileUpload from "@/app/components/FileUpload/PdfFileUpload";
import DocFileUpload from "@/app/components/FileUpload/DocFileUpload";
import CsvFileUpload from "@/app/components/FileUpload/CsvFileUplaod";
import XlxsFileUpload from "@/app/components/FileUpload/XlxsFileUpload";

export default function Upload() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / File Upload</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={12} md={12}>
            <ImageFileUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PdfFileUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <DocFileUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CsvFileUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <XlxsFileUpload />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
