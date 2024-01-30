"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import ProductData from "@/app/components/Ecommerce/ProductData";

export default function PoductList() {

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> Ecommerce / Product List </Typography>
      </Breadcrumbs>
      <Grid container justifyContent="space-between">
        <Grid item >
          <Typography variant="h5" style={{ paddingTop: 30 }}>
            Product List
          </Typography>
        </Grid>
       
      </Grid>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12}>
            <ProductData ></ProductData>
          </Grid>
        </Grid>
      </div>
    
    </>
  );
}
