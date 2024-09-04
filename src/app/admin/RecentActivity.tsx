import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@mui/material";

const RecentAcitivty = () => {
  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "5px",
        boxShadow: "0px 1px 2px -2px #000",
      }}
    >
      <CardHeader
        title="Recent Activity"
        titleTypographyProps={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#007BFF",
          margin: "5px 0 0 7px",
        }}
      />
      <CardContent sx={{ display: "flex", padding: "0 16px 10px 16px", ml: 1 }}>
        <div>
          <Typography variant="subtitle2" sx={{ color: "#565656", mb: "5px" }}>
            Renewed Account with BB_10MBPS_2m Plan
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#565656" }}>
            28-12-2024 2.03pm
          </Typography>
        </div>
      </CardContent>
      <CardContent sx={{ display: "flex", padding: "12px 16px", ml: 1 }}>
        <div>
          <Typography variant="subtitle2" sx={{ color: "#565656", mb: "5px" }}>
            Closed Issue #1234 Plan
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#565656" }}>
            28-12-2024 2.03pm
          </Typography>
        </div>
      </CardContent>
      <CardContent sx={{ display: "flex", padding: "12px 16px", ml: 1 }}>
        <div>
          <Typography variant="subtitle2" sx={{ color: "#565656", mb: "5px" }}>
            Opened Issue #1234 Plan
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#565656" }}>
            28-12-2024 2.03pm
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAcitivty;
