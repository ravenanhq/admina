"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import {
  AccountCircle,
  ShoppingCart,
  Notifications,
  Settings,
} from "@mui/icons-material";
import SimpleBarChart from "../components/SimpleBarChart/SimpleBarChart";
import PieColor from "../components/PieColor/PieColor";
import RecentOrder from "./RecentOrder";
import NewProduct from "./NewProduct";
import RecentAcitivty from "./RecentActivity";
import Summary from "./Summary";

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
                backgroundImage: "linear-gradient(to right, #008744, #92F195)",
                color: "#fff",
                width: "100%",
                paddingBottom: "10px",
                borderRadius: "0",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", marginTop: "8px" }}>
                  <AccountCircle fontSize="large" />
                </div>
                <div>
                  <Typography variant="h4">500</Typography>
                  <Typography component="div">User</Typography>
                </div>
              </CardContent>
              <Divider sx={{ margin: "0 20px 10px 20px", padding: "0 10px" }} />
              <Typography
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "0 20px",
                }}
              >
                Lorem Ipsum is simply dummy texLorem Ipsum is simply dummy text
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #F9588C, #F17CA2)",
                color: "#fff",
                width: "100%",
                paddingBottom: "10px",
                borderRadius: "0",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", marginTop: "8px" }}>
                  <ShoppingCart fontSize="large" />
                </div>
                <div>
                  <Typography variant="h4">200</Typography>
                  <Typography component="div">Shopping Cart</Typography>
                </div>
              </CardContent>
              <Divider sx={{ margin: "0 20px 10px 20px", padding: "0 10px" }} />
              <Typography
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "0 20px",
                }}
              >
                Lorem Ipsum is simply dummy texLorem Ipsum is simply dummy text
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundImage: "linear-gradient(to bottom, #fbb80e,#f96924)",
                color: "#fff",
                width: "100%",
                paddingBottom: "10px",
                borderRadius: "0",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", marginTop: "8px" }}>
                  <Notifications fontSize="large" />
                </div>
                <div>
                  <Typography variant="h4">400</Typography>
                  <Typography component="div">Notification</Typography>
                </div>
              </CardContent>
              <Divider sx={{ margin: "0 20px 10px 20px", padding: "0 10px" }} />
              <Typography
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "0 20px",
                }}
              >
                Lorem Ipsum is simply dummy texLorem Ipsum is simply dummy text
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card
              style={{
                backgroundImage: "linear-gradient(to bottom,#4fcbf6,#5833f1)",
                color: "#fff",
                width: "100%",
                paddingBottom: "10px",
                borderRadius: "0",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", marginTop: "8px" }}>
                  <Settings fontSize="large" />
                </div>
                <div>
                  <Typography variant="h4">1000</Typography>
                  <Typography component="div">Visitors</Typography>
                </div>
              </CardContent>
              <Divider sx={{ margin: "0 20px 10px 20px", padding: "0 10px" }} />
              <Typography
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "0 20px",
                }}
              >
                Lorem Ipsum is simply dummy texLorem Ipsum is simply dummy text
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              style={{
                color: "#fff",
                width: "100%",
                borderRadius: "10px",
                borderBottom: "3px solid #33bebe",
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
                borderRadius: "10px",
                borderBottom: "3px solid #33bebe",
              }}>
              <CardContent>
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

        <Grid container spacing={3} style={{ paddingTop: 30 }}>
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
