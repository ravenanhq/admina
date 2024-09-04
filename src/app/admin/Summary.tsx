import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  LinearProgress,
} from "@mui/material";

import React from "react";

const Summary = () => {
  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "5",
        boxShadow: "0px 1px 2px -2px #000",
      }}
    >
      <CardHeader
        title="Summary"
        titleTypographyProps={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#007BFF",
          margin: "5px 0 0 7px",
        }}
      />
      <CardContent sx={{ display: "flex", padding: "0 16px 10px 16px", ml: 1 }}>
        <div style={{ alignItems: "center", width: "100%" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#565656", mb: 2 }}>
              Income
            </Typography>
            <Typography variant="body1">$500</Typography>
          </div>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#E8E8E8",
              "& .MuiLinearProgress-bar": {
                borderRadius: "20px",
                backgroundColor: "#007BFF",
              },
            }}
          />
        </div>
      </CardContent>
      <CardContent sx={{ display: "flex", ml: 1 }}>
        <div style={{ alignItems: "center", width: "100%" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#565656", mb: 2 }}>
              Profit
            </Typography>
            <Typography variant="body1">$800</Typography>{" "}
          </div>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#E8E8E8",
              "& .MuiLinearProgress-bar": {
                borderRadius: "20px",
                backgroundColor: "#007BFF",
              },
            }}
          />
        </div>
      </CardContent>
      <CardContent sx={{ display: "flex", pb: "30px", ml: 1, mb: 1 }}>
        <div style={{ alignItems: "center", width: "100%" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#565656", mb: 2 }}>
              Expenses
            </Typography>
            <Typography variant="body1">$700</Typography>{" "}
          </div>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#E8E8E8",
              "& .MuiLinearProgress-bar": {
                borderRadius: "20px",
                backgroundColor: "#007BFF",
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Summary;
