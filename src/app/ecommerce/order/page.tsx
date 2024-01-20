"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import ProductOrder from "@/app/components/Ecommerce/Order";

export default function order() {
    return (
      <>
       <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> ecommerce / Orders </Typography>
      </Breadcrumbs>
        <h2 style={{ paddingTop: 30 }}>Orders</h2>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <ProductOrder></ProductOrder>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  