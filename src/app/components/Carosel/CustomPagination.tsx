import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper/modules";
import { Box } from "@mui/material";

const CustomPagination: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-6.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-16.jpg",
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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        pagination={pagination}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="custom-pagination"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ maxWidth: "300px", width: "300px" }}
          >
            <img
              src={item.imgPath}
              alt={item.label}
              style={{ width: "300px", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomPagination;
