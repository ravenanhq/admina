"use client";
import React from "react";
import { Grid } from "@mui/material";
import List from "@/app/components/Crud/List";

const DataList = () => {
  return (
    <>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} style={{ height: "100%" }}>
            <List></List>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DataList;
