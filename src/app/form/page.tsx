"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import VerticalForm from "../components/VerticalForm/VerticalForm";
import HorizontalForm from "../components/HorizontalForm/HorizontalForm";
import BasicWithIcon from "../components/BasicWithIcon/BasicWithIcon";
import HorizontalFormWithIcon from "../components/HorizontalFormWithIcon/HorizontalFormWithIcon";
import FormGrid from "../components/FormGrid/FormGrid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Form() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Forms
      </Typography>
      <Typography
        variant="h2"
        sx={{
          pt: 2,
          fontSize: "14px",
          fontWeight: "600",
          color: "#747477",
          letterSpacing: "0.9px",
        }}
      >
        Vertical Layout
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={6} sm={12}>
            <VerticalForm></VerticalForm>
          </Grid>
          <Grid item md={6} sm={12}>
            <BasicWithIcon></BasicWithIcon>
          </Grid>
        </Grid>
        <Typography
          variant="h2"
          sx={{
            pt: 2,
            fontSize: "14px",
            fontWeight: "600",
            color: "#747477",
            letterSpacing: "0.9px",
          }}
        >
          Horizontal Layout
        </Typography>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={6} sm={12} sx={{ width: isMobile ? "100%" : "" }}>
            <HorizontalForm></HorizontalForm>
          </Grid>
          <Grid item md={6} sm={12} sx={{ width: isMobile ? "100%" : "" }}>
            <HorizontalFormWithIcon></HorizontalFormWithIcon>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item>
            <FormGrid></FormGrid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
