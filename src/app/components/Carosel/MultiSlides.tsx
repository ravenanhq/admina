import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";

const MultiSlidesCarousel: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-11.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-9.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-6.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-4.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-5.jpg",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Multiple Slides"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div
        className="carousel multipleSlidesCarousel"
        style={{ maxWidth: "1200px" }}
      >
        <CardContent>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            loop={true}
            slidesPerView={1}
            className=""
            breakpoints={{
              520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.imgPath}
                  alt={item.label}
                  style={{
                    width: isMobile ? "100%" : "300px",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </div>
    </Card>
  );
};

export default MultiSlidesCarousel;
