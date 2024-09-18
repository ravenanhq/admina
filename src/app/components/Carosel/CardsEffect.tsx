import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

const CardsEffect: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-4.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-5.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-6.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-9.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-11.jpg",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Swiper
        modules={[Pagination, EffectCards, Navigation]}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        className=""
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              maxWidth: "300px",
              width: "300px",
              height: "300px",
              background: "#f5f5f5",
            }}
          >
            <img
              src={item.imgPath}
              alt={item.label}
              style={{ width: "300px", height: "300px", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardsEffect;
