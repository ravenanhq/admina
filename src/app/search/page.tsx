"use client";
import React from "react";
import { Grid } from "@mui/material";
import SearchElement from "../components/SearchElement/SearchElement";
import AdvancedSearch from "../components/AdvancedSearchElement/AdvancedSearchElement";

export default function Search() {
    return (
      <>
        <h2 style={{ paddingTop: 30 }}>Search</h2>
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
                  <AdvancedSearch></AdvancedSearch>
              </Grid>
          </Grid>
        </div>
      </>
    );
  }
  