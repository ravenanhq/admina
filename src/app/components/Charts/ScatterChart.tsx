import React from "react";
import { Scatter } from "react-chartjs-2";
import { Card, CardContent, CardHeader } from "@mui/material";

const ScatterChart = () => {
  const data = {
    datasets: [
      {
        label: "Scatter Chart",
        data: [
          { x: 10, y: 20 },
          { x: 25, y: 30 },
          { x: 40, y: 10 },
          { x: 55, y: 40 },
          { x: 70, y: 30 },
        ],
        backgroundColor: "rgba(255, 87, 51, 0.9)",
      },
    ],
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "5px",
        border: "none",
        boxShadow: "0px 1px 2px -2px #000",
      }}
    >
      <CardHeader
        title="Scatter Chart"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Scatter data={data} />
      </CardContent>
    </Card>
  );
};

export default ScatterChart;
