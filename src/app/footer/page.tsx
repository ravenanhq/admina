"use client";
import React from "react";
import { Grid } from "@mui/material";
import LightFooterElement from "../components/LightFooterElement/LightFooterElement";
import DarkFooterElement from "../components/DarkFooterElement/DarkFooterElement";
import TransparentFooterElement from "../components/TransparentFooterElement/TransparentFooterElement";
import FixedFooterElement from "../components/FixedFooterElement/FixedFooterElement";

export default function Footer() {
    return (
        <>
            <h2 style={{ paddingTop: 30 }}>Footers</h2>
            <div style={{ paddingTop: 10 }}>
                <Grid container spacing={3} style={{ paddingTop: 10 }}>
                    <Grid item md={12} xs={12}>
                        <LightFooterElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <DarkFooterElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <TransparentFooterElement />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: 30 }}>
                    <Grid item md={12} xs={12}>
                        <FixedFooterElement />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
