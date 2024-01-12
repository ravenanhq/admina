"use client";
import React from "react";
import { Grid } from "@mui/material";
import OutlinedSigningForm from "../components/Signin/OutlinedSigningForm/OutlinedSigningForm";
import GeneralSigninForm from "../components/Signin/GeneralSiginForm/GeneralSigninForm";
import SigninFormWithSocialButton from "../components/Signin/SigninFormWithSocialButton/SigninFormWithSocialButton";
import StandardSigninForm from "../components/Signin/StandardSigninForm/StandardSigninForm";

export default function Signin() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>SignIn</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} sm={12}>
                <OutlinedSigningForm></OutlinedSigningForm>
            </Grid>
            <Grid item md={6} sm={12}>
            <SigninFormWithSocialButton></SigninFormWithSocialButton>
            </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item md={6} sm={12}>
            <GeneralSigninForm></GeneralSigninForm>
            </Grid>
            <Grid item md={6} sm={12}>
                <StandardSigninForm></StandardSigninForm>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
