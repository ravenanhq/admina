"use client";
import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import WishlistItem from "@/app/components/Ecommerce/WishlistItem";

export default function Wishlist() {
    return (
      <>
       <Breadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary"> Ecommerce / Wishlist </Typography>
      </Breadcrumbs>
        <h2 style={{ paddingTop: 30 }}>WishList</h2>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <WishlistItem ></WishlistItem>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  