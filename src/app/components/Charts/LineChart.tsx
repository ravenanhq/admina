import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, CardHeader } from "@mui/material";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#4caf50",
        tension: 0.3,
      },
      {
        label: "Expenses",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "#ff9800",
        tension: 0.3,
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
        title="Line Chart"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Chart type="line" data={data} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
