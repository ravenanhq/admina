import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper/modules";
import { Card, CardHeader, CardContent } from "@mui/material";

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
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Pagination"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div className="carousel" style={{ height: "100%" }}>
        <CardContent>
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
                  style={{ width: "100%", height: "300px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </div>
    </Card>
  );
};

export default PaginationCarousel;
