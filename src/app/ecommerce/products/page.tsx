"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import ProductsList from "@/app/components/Ecommerce/ProductList";


export default function Product() {
    return (
      <>
       <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> Ecommerce / Product </Typography>
      </Breadcrumbs>
        <h2 style={{ paddingTop: 30 }}>Products</h2>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <ProductsList></ProductsList>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  