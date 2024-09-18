"use client";
import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import SimpleBarChart from "../components/SimpleBarChart/SimpleBarChart";
import PieColor from "../components/PieColor/PieColor";
import RecentOrder from "./RecentOrder";
import NewProduct from "./NewProduct";
import RecentAcitivty from "./RecentActivity";
import Summary from "./Summary";
import DataCard from "./DataCard";

export default function Admin() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Dashboard
      </Typography>
      <div style={{ paddingTop: 20 }}>
        <DataCard />
        <Grid container spacing={2} style={{ paddingTop: 30 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              style={{
                color: "#fff",
                width: "100%",
                borderRadius: "5px",
                boxShadow: "0px 1px 2px -2px #000",
              }}
            >
              <CardContent>
                <SimpleBarChart></SimpleBarChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              style={{
                color: "#fff",
                width: "100%",
                borderRadius: "5px",
                boxShadow: "0px 1px 2px -2px #000",
                paddingBottom: "2px",
              }}
            >
              <CardContent sx={{ p: "30px" }}>
                <PieColor></PieColor>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item xs={12} sm={12} md={6}>
            <RecentAcitivty></RecentAcitivty>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Summary></Summary>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          style={{ paddingTop: 30 }}
          justifyContent=""
        >
          <Grid item xs={12} sm={12} md={6}>
            <RecentOrder></RecentOrder>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <NewProduct></NewProduct>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
