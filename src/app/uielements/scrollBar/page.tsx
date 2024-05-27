"use client";
import { Grid } from "@mui/material";
import VerticalScrollBar from "../../components/ScrollBar/VerticalScrollbar";
import "../../components/ScrollBar/ScrollBar.css";
import HorizontalScrollBar from "@/app/components/ScrollBar/HorizondalScrollbar";
import VerticalAndHorizondalScrollbar from "@/app/components/ScrollBar/VerticalAndHorizondalScrollbar";

const scrollBar = () => {
  return (
    <>
      <h4 style={{ paddingTop: 30 }}>UI Elements / Navbar</h4>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12}>
            <VerticalScrollBar></VerticalScrollBar>
          </Grid>
          <Grid item xs={12}>
            <HorizontalScrollBar></HorizontalScrollBar>
          </Grid>
          <Grid item xs={12}>
            <VerticalAndHorizondalScrollbar></VerticalAndHorizondalScrollbar>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default scrollBar;
