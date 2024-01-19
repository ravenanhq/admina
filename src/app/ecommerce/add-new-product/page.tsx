"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import AddNewProduct from "@/app/components/Ecommerce/AddNewProduct";

export default function ProductDetail() {
    return (
      <>
       <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> ecommerce / Add New Product</Typography>
      </Breadcrumbs>
        <h2 style={{ paddingTop: 30 }}>Add New Product</h2>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <AddNewProduct ></AddNewProduct>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  