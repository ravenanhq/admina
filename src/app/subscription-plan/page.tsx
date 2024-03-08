"use client";
import { Grid } from "@mui/material";
import SubscriptionPlan from "../components/SubscriptionPlan/SubscriptionPlan";

export default function Login() {
  return (
     <>
      <h2 style={{ paddingTop: 30 }}>Subscription Plan</h2>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
            <SubscriptionPlan />
            </Grid>
        </Grid>
      </div>
    </>
  );
}
