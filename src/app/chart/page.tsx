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
					<Grid item xs={12} sm={6} md={6}>
						<LineChart />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<BarChart />
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 20 }}>
					<Grid item xs={12} sm={6} md={6}>
						<AreaChart />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<BubbleChart />
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 20 }}>
					<Grid item xs={12} sm={6} md={6}>
						<PolarAreaChart />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<DonutChart />
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 20 }}>
					<Grid item xs={12} sm={6} md={6}>
						<PieChart />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<RadarChart />
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ paddingTop: 20 }}>
					<Grid item xs={12} sm={6} md={6}>
						<ScatterCharts />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<StackedBarChart />
					</Grid>
				</Grid>
			</div>
		</>
	);
}
