"use client";
import { Grid, Typography } from "@mui/material";
import BasicSubscriptionPlan from "../components/SubscriptionPlan/BasicSubscriptionPlan";
import SubscriptionPlan from "../components/SubscriptionPlan/SubscriptionPlan";
import SubscriptionPlanCard from "../components/SubscriptionPlan/SubscriptionPlanCard";

export default function Login() {
  return (
    <>
      <h2 style={{ paddingTop: 30 }}>Subscription Plan</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Table
            </Typography>
            <SubscriptionPlan />
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Card{" "}
            </Typography>
            <SubscriptionPlanCard />
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Basic
            </Typography>
            <BasicSubscriptionPlan />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
