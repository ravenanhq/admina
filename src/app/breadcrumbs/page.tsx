"use client";
import React from "react";
import { Grid } from "@mui/material";
import BasicBreadcrumbsElement from "../components/BasicBreadcrumbsElement/BasicBreadcrumbsElement";
import LastActiveBreadcrumbsElement from "../components/LastActiveBreadcrumbsElement/LastActiveBreadcrumbsElement";
import CustomSeparatorBreadcrumbsElement from "../components/CustomSeparatorBreadcrumbsElement/CustomSeparatorBreadcrumbsElement";
import BreadcrumbsWithIconElement from "../components/BreadcrumbsWithIconElement/BreadcrumbsWithIconElement";
import CollapsedBreadcrumbsElement from "../components/CollapsedBreadcrumbsElement/CollapsedBreadcrumbsElement";

export default function Breadcrumbs() {
    return (
        <>
            <h2 style={{ paddingTop: 30 }}>Breadcrumbs</h2>
            <div style={{ paddingTop: 10 }}>
                <Grid container spacing={3} style={{ paddingTop: 10 }}>
                    <Grid item md={12} xs={12}>
                        <BasicBreadcrumbsElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <LastActiveBreadcrumbsElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <CustomSeparatorBreadcrumbsElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <BreadcrumbsWithIconElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <CollapsedBreadcrumbsElement />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
