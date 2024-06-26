import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import { Box } from "@mui/material";

const NavigationCarousel: React.FC = () => {
  const carouselItems = [
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
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-11.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-9.jpg",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Swiper
        modules={[Controller, Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ maxWidth: "300px", width: "300px" }}
          >
            <div
              style={{
                position: "relative",
                textAlign: "center",
                width: "300px",
              }}
            >
              <img
                src={item.imgPath}
                alt={item.label}
                style={{ width: "100%", height: "auto" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {item.label}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default NavigationCarousel;
