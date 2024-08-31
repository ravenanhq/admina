"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import BasicAccordion from "@/app/components/Accordion/BasicAccordion";
import AccordionWithIcon from "@/app/components/Accordion/AccordionWithIcon";
import AccordionCustomIcon from "@/app/components/Accordion/AccordionCustomIcon";
import DisabledAccordion from "@/app/components/Accordion/DisabledAccordion";
import CustomExpandAccordian from "@/app/components/Accordion/CustomExpandAccordian";
import AccordionWithActions from "@/app/components/Accordion/AccordionWithActions";

export default function Accordions() {
  return (
    <Box style={{overflow: 'hidden'}}>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Accordions</h4>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
              Basic Accordion (Always Open)
            </h4>
              <BasicAccordion />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Accordion With Arrow</h4>
              <AccordionWithIcon />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Accordion With Custom Icon</h4>
              <AccordionCustomIcon />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
              Disabled Accordion
            </h4>
              <DisabledAccordion />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
              Custom Expand Icon Accordion
            </h4>
              <CustomExpandAccordian />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
              Accordion With Actions
            </h4>
              <AccordionWithActions />
          </Grid>
        </Grid>
        
        
    </Box>
  );
}