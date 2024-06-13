"use client";
import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import SizeAvatars from "@/app/components/Avatar/SizeAvatars";
import InitialAvatars from "@/app/components/Avatar/InitialAvatar";
import GroupsAvatars from "@/app/components/Avatar/GroupsAvatars";
import "../../components/Avatar/Avatar.css";
import PullUpGroupAvatar from "@/app/components/Avatar/PullUpGroupAvatar";
import ToolTipGroupAvatar from "@/app/components/Avatar/ToolTipGroupAvatar";
import StatusIndicatorAvatars from "@/app/components/Avatar/StatusIndicatorAvatar";
import ShapesAvatars from "@/app/components/Avatar/ShapeAvatar";

export default function Avatar() {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Avatar</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={6} md={6} className="sizeAvatar">
            <SizeAvatars />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="sizeAvatar">
            <InitialAvatars />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={6} md={6}>
            <StatusIndicatorAvatars />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ShapesAvatars />
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          style={{
            marginTop: "10px",
            padding: "10px",
          }}
        >
          Group Avatar
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <GroupsAvatars />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <PullUpGroupAvatar />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ToolTipGroupAvatar />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
