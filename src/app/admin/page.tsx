import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  AccountCircle,
  ShoppingCart,
  Notifications,
  Settings,
} from "@mui/icons-material";
import SimpleBarChart from "../components/SimpleBarChart/SimpleBarChart";
import PieColor from "../components/PieColor/PieColor";

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
      <h2 style={{ paddingTop: 10 }}>Dashboard</h2>
      <div style={{ paddingTop: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundColor: "#008744",
                color: "#fff",
                width: "100%",
              }}
            >
              <CardContent>
                <AccountCircle fontSize="large" />
                <Typography variant="h3">500</Typography>
                <Typography component="div">User</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundColor: "#0057e7",
                color: "#fff",
                width: "100%",
              }}
            >
              <CardContent>
                <ShoppingCart fontSize="large" />
                <Typography variant="h3">200</Typography>
                <Typography component="div">Shopping Cart</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundColor: "#d62d20",
                color: "#fff",
                width: "100%",
              }}
            >
              <CardContent>
                <Notifications fontSize="large" />
                <Typography variant="h3">400</Typography>
                <Typography component="div">Notification</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundColor: "#ffa700",
                color: "#fff",
                width: "100%",
              }}
            >
              <CardContent>
                <Settings fontSize="large" />
                <Typography variant="h3">1000</Typography>
                <Typography component="div">Visitors</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              style={{
                backgroundColor: "aliceblue",
                color: "#fff",
                width: "100%",
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
                backgroundColor: "aliceblue",
                color: "#fff",
                width: "100%",
              }}
            >
              <CardContent>
                <PieColor></PieColor>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
