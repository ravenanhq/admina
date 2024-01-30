"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import ProductDetails from "@/app/components/Ecommerce/ProductDetails";
import ProductDetailTabs from "@/app/components/Ecommerce/ProductDetailTabs";
import RelatedProducts from "@/app/components/Ecommerce/RelatedProducts";

export default function ProductDetail() {
    return (
      <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> Ecommerce / Product Details</Typography>
      </Breadcrumbs>
        <h2 style={{ paddingTop: 30 }}>Product Details</h2>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <ProductDetails></ProductDetails>
              </Grid>
          </Grid>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                <ProductDetailTabs></ProductDetailTabs>
              </Grid>
          </Grid>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                <RelatedProducts></RelatedProducts>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  