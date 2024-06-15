"use client";
import React from "react";
import { Grid } from "@mui/material";
import VerticalForm from "../components/VerticalForm/VerticalForm";
import HorizontalForm from "../components/HorizontalForm/HorizontalForm";
import BasicWithIcon from "../components/BasicWithIcon/BasicWithIcon";
import HorizontalFormWithIcon from "../components/HorizontalFormWithIcon/HorizontalFormWithIcon";
import FormGrid from "../components/FormGrid/FormGrid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../components/BaseComponent/Button";
import ModalButtonComponent from "../components/ModalForms/ModalButtonComponent";

export default function Form() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <h2 style={{ paddingTop: 30, fontSize: "20px" }}>Vertical Layout</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={6} sm={12}>
            <VerticalForm></VerticalForm>
          </Grid>
          <Grid item md={6} sm={12}>
            <BasicWithIcon></BasicWithIcon>
          </Grid>
        </Grid>
        <h2 style={{ paddingTop: 30, fontSize: "20px" }}>Horizontal Layout</h2>
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

        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item sm={12}>
            <ModalButtonComponent />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
