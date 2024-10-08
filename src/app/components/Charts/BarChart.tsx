import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, CardHeader } from "@mui/material";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [50, 60, 70, 80, 90, 80, 100],
        backgroundColor: "rgba(75,192,192,0.5)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
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
        title="Bar Chart"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Chart type="bar" data={data} />
      </CardContent>
    </Card>
  );
};

export default BarChart;
