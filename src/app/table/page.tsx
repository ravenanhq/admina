"use client";
import React from "react";
import { Grid } from "@mui/material";
import DataTable from "../components/DataTable/DataTable";
import BorderedTable from "../components/BorderedTable/BorderedTable";
import TableWithHover from "../components/TableWithHover/TableWithHover";
import SimpleTable from "../components/SimpleTable/SimpleTable";
import StripedTable from "../components/StripedTable/StripedTable";
import ExpandableTable from "../components/ExpandableTable/ExpandableTable";
import TableWithSearch from "../components/TableWithSearch/TableWithSearch";

export default function Table() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>Tables</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <SimpleTable></SimpleTable>
            </Grid>
            <Grid item md={6} xs={12}>
                <BorderedTable></BorderedTable>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <StripedTable></StripedTable>
            </Grid>
            <Grid item md={6} xs={12}>
                <TableWithHover></TableWithHover>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <ExpandableTable></ExpandableTable>
            </Grid>
            <Grid item md={6} xs={12}>
                <TableWithSearch></TableWithSearch>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} xs={12}>
                <DataTable></DataTable>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
