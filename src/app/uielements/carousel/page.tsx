"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
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
      <h4 style={{ paddingTop: 30 }}>UI Elements / Carousel</h4>
      <Grid
        container
        className="carouselContainer"
        spacing={3}
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Simple Carousel</h4>
          <div className="carousel">
            <Carousel />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} style={{ paddingRight: "5px" }}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Navigation</h4>
          <div className="carousel">
            <NavigationCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Pagination</h4>
          <div className="carousel" style={{ height: "100%" }}>
            <PaginationCarousel />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
            Custom Pagination
          </h4>
          <div className="carousel" style={{ height: "100%" }}>
            <CustomPagination />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
            Vertical Carousel
          </h4>
          <div className="carousel">
            <VerticalCarousel />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Nested Carousel</h4>
          <div className="carousel">
            <NestedCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>3D Fade effect</h4>
          <div className="carousel">
            <FadeEffect />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>3D Cube effect</h4>
          <div className="carousel" style={{ height: "300px" }}>
            <CubeEffect />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>3D Flip Effect</h4>
          <div className="carousel">
            <FlipEffect />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>3D Cards Effect</h4>
          <div className="carousel">
            <CardsEffect />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
            3D CoverFlow Effect
          </h4>
          <div className="carousel" style={{ maxWidth: "1200px" }}>
            <CoverflowEffect />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Multiple slides</h4>
          <div
            className="carousel multipleSlidesCarousel"
            style={{ maxWidth: "1200px" }}
          >
            <MultiSlidesCarousel />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
            MouseWheel Controller
          </h4>
          <div className="carousel">
            <MouseWheelCarousel />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>
            Autoplay progress
          </h4>
          <div className="carousel">
            <AutoplayProgress />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        className="carouselContainer"
        style={{ paddingTop: 10, width: "100%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <h4 style={{ paddingTop: 10, paddingBottom: 20 }}>Thumbs Gallery</h4>
          <div className="carousel" style={{ maxWidth: "1200px" }}>
            <ThumbsGallery />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
