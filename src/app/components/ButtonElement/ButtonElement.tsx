import React from "react";
import { Box, Grid } from "@mui/material";
import PrimaryButtonElement from "./PrimaryButtonElement";
import HoverButtonElement from "./HoverButtonElement";
import GroupButton from "./GroupButton";
import ElevatedButton from "./ElevatedButton";
import SecondaryButtonElement from "./SecondaryButtonElement";
import OutlineButtonElement from "./OutlineButtonElement";
import RoundedButtonElement from "./RoundedButtonElement";
import SizeButtonElement from "./SizeButtonElement";
import OutlineRoundedButtonElement from "./OutlineRoundedButtonElement";
import DisabledButtonElement from "./DisabledButtonElement";

const ButtonsElements = () => {
  return (
    <Box style={{ overflow: "hidden" }}>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <PrimaryButtonElement />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SecondaryButtonElement />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <OutlineButtonElement />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <RoundedButtonElement />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <SizeButtonElement />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <OutlineRoundedButtonElement />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <ElevatedButton />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <DisabledButtonElement />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ paddingTop: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <HoverButtonElement />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <GroupButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonsElements;
