import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";

const StackedBarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Dataset 2",
        data: [20, 30, 10, 5, 15],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
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
        title="Stacked Bar Chart"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default StackedBarChart;
