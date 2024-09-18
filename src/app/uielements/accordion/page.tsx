"use client";
import React from "react";
import { Box, CardHeader, Grid, Typography } from "@mui/material";
import BasicAccordion from "@/app/components/Accordion/BasicAccordion";
import AccordionWithIcon from "@/app/components/Accordion/AccordionWithIcon";
import AccordionCustomIcon from "@/app/components/Accordion/AccordionCustomIcon";
import DisabledAccordion from "@/app/components/Accordion/DisabledAccordion";
import CustomExpandAccordian from "@/app/components/Accordion/CustomExpandAccordian";
import AccordionWithActions from "@/app/components/Accordion/AccordionWithActions";

export default function Accordions() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold",paddingBottom:"6px" }}
      >
        UI Elements / Accordions
      </Typography>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Basic Accordion (Always Open)"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />
          <BasicAccordion />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Accordion With Arrow"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />
          <AccordionWithIcon />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Accordion With Custom Icon"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />

          <AccordionCustomIcon />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Disabled Accordion"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />
          <DisabledAccordion />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Custom Expand Icon Accordion"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />
          <CustomExpandAccordian />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardHeader
            title="Accordion With Actions"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
          />
          <AccordionWithActions />
        </Grid>
      </Grid>
    </Box>
  );
}
