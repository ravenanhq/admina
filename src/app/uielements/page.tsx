"use client";
import React from "react";
import { Grid } from "@mui/material";
import ButtonElements from "../components/ButtonElement/ButtonElement";
import AlertsElement from "../components/AlertElement/AlertElement";
import ProgressBarElement from "../components/ProgressBarElement/ProgressBarElement";
import TabsElement from "../components/TabsElement/TabsElement";
import SliderElement from "../components/SliderElement/SliderElement";
import ModalsElement from "../components/ModalsElement/ModalsElement";
import NavbarElement from "../components/NavbarElement/NavbarElement";
import TimelineElement from "../components/TimelineElement/TimelineElement";

export default function UIElements() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>UI Elements</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <ButtonElements></ButtonElements>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
            <Grid item md={12}>
              <AlertsElement></AlertsElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <TabsElement></TabsElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <ProgressBarElement></ProgressBarElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <SliderElement></SliderElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <ModalsElement></ModalsElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <NavbarElement></NavbarElement>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={12}>
                <TimelineElement />
            </Grid>
        </Grid>
      </div>
    </>
  );
}
