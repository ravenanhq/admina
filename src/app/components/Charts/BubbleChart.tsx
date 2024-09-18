import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, CardHeader } from "@mui/material";

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: "Bubble Chart",
        data: [
          { x: 10, y: 20, r: 5 },
          { x: 15, y: 30, r: 8 },
          { x: 25, y: 40, r: 12 },
          { x: 30, y: 50, r: 6 },
          { x: 35, y: 60, r: 10 },
        ],
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
        title="Bubble Chart"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Chart type="bubble" data={data} />
      </CardContent>
    </Card>
  );
};

export default BubbleChart;
