"use client";
import React from "react";
import { Grid } from "@mui/material";
import DataTable from "../components/ImportExportElement/DataTable";

const ImportExportTable = () => {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>Import/Export</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} style={{ height: "100%" }}>
            <DataTable></DataTable>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ImportExportTable;
