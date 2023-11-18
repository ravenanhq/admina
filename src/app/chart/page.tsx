"use client";
import React from "react";
import { Grid } from "@mui/material";
import LineChart from "../components/LineChart/LineChart";
import DonutChart from "../components/DonutChart/DonutChart";
import AreaChart from "../components/AreaChart/AreaChart";
import BarChart from "../components/BarChart/BarChart";
import BubbleChart from "../components/BubbleChart/BubbleChart";
import PolarAreaChart from "../components/PolarAreaChart/PolarAreaChart";
import PieChart from "../components/PieChart/PieChart";
import RadarChart from "../components/RadarChart/RadarChart";
import ScatterCharts from "../components/ScatterChart/ScatterChart";
import StackedBarChart from "../components/StackedBarChart/StackedBarChart";

export default function Charts() {
	return (
		<>
			<h2 style={{ paddingTop: 30 }}>Charts</h2>
			<div style={{ paddingTop: 10 }}>
				<Grid container spacing={3} style={{ paddingTop: 10 }}>
					<Grid item md={6}>
						<LineChart></LineChart>
					</Grid>
					<Grid item md={6}>
						<BarChart></BarChart>
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 20 }}>
					<Grid item md={6}>
						<AreaChart></AreaChart>
					</Grid>
					<Grid item md={6}>
						<BubbleChart></BubbleChart>
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 10 }}>
					<Grid item md={6}>
						<PolarAreaChart></PolarAreaChart>
					</Grid>
					<Grid item md={6}>
						<DonutChart></DonutChart>
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 10 }}>
					<Grid item md={6}>
						<PieChart></PieChart>
					</Grid>
					<Grid item md={6}>
						<RadarChart></RadarChart>
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 10 }}>
					<Grid item md={6}>
						<ScatterCharts></ScatterCharts>
					</Grid>
					<Grid item md={6}>
						<StackedBarChart></StackedBarChart>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
