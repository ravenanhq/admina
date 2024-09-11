"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchElement from "@/app/components/Search/SearchElement";
import EnhancedSearch from "@/app/components/Search/AdvancedSearchElement";

export default function Search() {
    return (
      <>
         <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "20px", fontWeight: "bold" }}
      >
        UI Elements /Search</Typography>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                  <SearchElement></SearchElement>
              </Grid>
          </Grid>
        </div>
        <div style={{ paddingTop: 10 }}>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
              <Grid item xs={12}>
                 <EnhancedSearch />
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  