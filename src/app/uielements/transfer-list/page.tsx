"use client";
import React from "react";
import { Grid } from "@mui/material";
import BasicTransferList from "@/app/components/TransferList/BasicTransferList";
import EnchancedTransferList from "@/app/components/TransferList/EnchancedTransferlist";
import TransferListwithIcon from "@/app/components/TransferList/TransferListwithIcon";

const TransferList = () => {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Transfer List</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item md={12} sm={12} xs={12}>
            <BasicTransferList />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <EnchancedTransferList />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TransferListwithIcon />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TransferList;
