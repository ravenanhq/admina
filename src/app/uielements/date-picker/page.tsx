"use client";
import React from "react";
import { Grid } from "@mui/material";
import DatePicker from "@/app/components/DatePicker/DatePicker";
import DateAndTimePicker from "@/app/components/DatePicker/DateAndTimePicker";
import MobilDatePicker from "@/app/components/DatePicker/MobilDatePicker";

export default function DatePickerPage() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Date Picker</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10,display:"block" }}>
          <Grid item md={12} >
            <DatePicker></DatePicker></Grid>
            <Grid item md={12} >
            <DateAndTimePicker></DateAndTimePicker>
          </Grid>
          <Grid item md={12} >
            <MobilDatePicker></MobilDatePicker>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
