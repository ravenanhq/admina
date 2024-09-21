"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Carousel from "@/app/components/Carosel/simpleCarousel";
import NavigationCarousel from "@/app/components/Carosel/NavigationCarousel";
import PaginationCarousel from "@/app/components/Carosel/PagenationCarousel";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import CustomPagination from "@/app/components/Carosel/CustomPagination";
import VerticalCarousel from "@/app/components/Carosel/Vertical";
import NestedCarousel from "@/app/components/Carosel/NestedCarousel";
import FadeEffect from "@/app/components/Carosel/FadeEffect";
import CubeEffect from "@/app/components/Carosel/CubeEffect";
import CoverflowEffect from "@/app/components/Carosel/CoverflowEffect";
import MultiSlidesCarousel from "@/app/components/Carosel/MultiSlides";
import FlipEffect from "@/app/components/Carosel/FlipEffect";
import CardsEffect from "@/app/components/Carosel/CardsEffect";
import MouseWheelCarousel from "@/app/components/Carosel/MouseWheel";
import AutoplayProgress from "@/app/components/Carosel/AutoplayProgress";
import ThumbsGallery from "@/app/components/Carosel/ThumbsGallery";

export default function Carosels() {
  return (
    <Box style={{ overflow: "hidden" }} className="carouselBox">
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        UI Elements / Carousel
      </Typography>
      <Grid
        container
        className="carouselContainer"
        spacing={3}
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Carousel />
        </Grid>
        <Grid item xs={12} sm={6} md={6} style={{ paddingRight: "5px" }}>
          <NavigationCarousel />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <PaginationCarousel />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CustomPagination />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <VerticalCarousel />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <NestedCarousel />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <FadeEffect />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CubeEffect />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <FlipEffect />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardsEffect />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <CoverflowEffect />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <MultiSlidesCarousel />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <MouseWheelCarousel />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <AutoplayProgress />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <ThumbsGallery />
        </Grid>
      </Grid>
    </Box>
  );
}
