"use client";
import React from "react";
import { Grid } from "@mui/material";
import CreateNewData from "@/app/components/Crud/CreateData";

const Add = () => {
  return (
    <>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} style={{ height: "100%" }}>
            <CreateNewData></CreateNewData>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Add;
