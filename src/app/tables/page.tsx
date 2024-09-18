"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import DataTable from "../components/Tables/DataTable";
import TableWithHover from "../components/Tables/TableWithHover";
import StripedTable from "../components/Tables/StripedTable";
import ExpandableTable from "../components/Tables/ExpandableTable";
import TableWithSearch from "../components/Tables/TableWithSearch";
import HeaderTable2 from "../components/Tables/HeaderTable2";
import HeaderTable1 from "../components/Tables/HeaderTable1";
import SimpleTable from "../components/Tables/SimpleTable";

export default function Table() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Tables
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12} xs={12}>
                <HeaderTable1></HeaderTable1>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>    
            <Grid item md={12} xs={12}>
               <HeaderTable2></HeaderTable2>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <SimpleTable></SimpleTable>
            </Grid>
            <Grid item md={6} xs={12}>
                <TableWithHover></TableWithHover>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <StripedTable></StripedTable>
            </Grid>
            <Grid item md={6} xs={12}>
                <ExpandableTable></ExpandableTable>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <TableWithSearch></TableWithSearch>
            </Grid>
            <Grid item md={6} xs={12}>
                <DataTable></DataTable>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
