"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import BasicBreadcrumbsElement from "../../components/Breadcrumbs/BasicBreadcrumbsElement";
import LastActiveBreadcrumbsElement from "../../components/Breadcrumbs/LastActiveBreadcrumbsElement";
import CustomSeparatorBreadcrumbsElement from "../../components/Breadcrumbs/CustomSeparatorBreadcrumbsElement";
import BreadcrumbsWithIconElement from "../../components/Breadcrumbs/BreadcrumbsWithIconElement";
import CollapsedBreadcrumbsElement from "../../components/Breadcrumbs/CollapsedBreadcrumbsElement";

export default function Breadcrumbs() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "20px", fontWeight: "bold" }}
      >
        UI Elements / Breadcrumbs
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} xs={12}>
            <BasicBreadcrumbsElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} xs={12}>
            <LastActiveBreadcrumbsElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} xs={12}>
            <CustomSeparatorBreadcrumbsElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop:10 }}>
          <Grid item md={12} xs={12}>
            <BreadcrumbsWithIconElement />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} xs={12}>
            <CollapsedBreadcrumbsElement />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
