"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import BasicPagination from "@/app/components/Pagination/BasicPagination";
import RadiousPagination from "@/app/components/Pagination/RadiousPagination";
import PaginationSize from "@/app/components/Pagination/PaginationSize";
import SquarePagination from "@/app/components/Pagination/SquarePagination";
import TableViewPagination from "@/app/components/Pagination/TablePagination";
import CustomIcons from "@/app/components/Pagination/CustomIconPagination";

export default function Accordions() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Pagination </h4>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <BasicPagination />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <RadiousPagination />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ padding: "20px  0" }}>
        <Grid item xs={12} sm={6} md={6}>
          <PaginationSize />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SquarePagination />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <CustomIcons />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TableViewPagination />
        </Grid>
      </Grid>
    </Box>
  );
}
