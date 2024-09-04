"use client";
import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ResponsiveBarChart = () => {
  const data = {
    labels: [
      "Page A",
      "Page B",
      "Page C",
      "Page D",
      "Page E",
      "Page F",
      "Page G",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        backgroundColor: "rgb(2, 178, 175, 1)",
      },
      {
        label: "Dataset 2",
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        backgroundColor: "rgb(46, 150, 255, 1)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "287px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ResponsiveBarChart;
