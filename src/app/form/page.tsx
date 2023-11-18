"use client";
import React from "react";
import { Grid } from "@mui/material";
import VerticalForm from "../components/VerticalForm/VerticalForm";
import HorizontalForm from "../components/HorizontalForm/HorizontalForm";
import GeneralElements from "../components/GeneralElements/GeneralElements";
import CustomElements from "../components/CustomElements/CustomElements";

export default function Form() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>Forms</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} sm={12}>
                <VerticalForm></VerticalForm>
            </Grid>
            <Grid item md={6} sm={12}>
                <HorizontalForm></HorizontalForm>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} sm={12}>
            <GeneralElements></GeneralElements>
            </Grid>
            <Grid item md={6} sm={12}>
                <CustomElements></CustomElements>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
