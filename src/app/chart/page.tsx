"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import LineChart from "../components/Charts/LineChart";
import DonutChart from "../components/Charts/DonutChart";
import AreaChart from "../components/Charts/AreaChart";
import BarChart from "../components/Charts/BarChart";
import BubbleChart from "../components/Charts/BubbleChart";
import PolarAreaChart from "../components/Charts/PolarAreaChart";
import PieChart from "../components/Charts/PieChart";
import RadarChart from "../components/Charts/RadarChart";
import ScatterCharts from "../components/Charts/ScatterChart";
import StackedBarChart from "../components/Charts/StackedBarChart";

export default function Charts() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Charts
      </Typography>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={6} md={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <BarChart />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item xs={12} sm={6} md={6}>
            <AreaChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <BubbleChart />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item xs={12} sm={6} md={6}>
            <PolarAreaChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <DonutChart />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item xs={12} sm={6} md={6}>
            <PieChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RadarChart />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item xs={12} sm={6} md={6}>
            <ScatterCharts />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <StackedBarChart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
