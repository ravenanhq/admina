import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper/modules";
import { Box } from "@mui/material";

const PaginationCarousel: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-15.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-16.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-14.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-9.jpg",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ maxWidth: "300px", width: "300px" }}
          >
            <img
              src={item.imgPath}
              alt={item.label}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PaginationCarousel;
