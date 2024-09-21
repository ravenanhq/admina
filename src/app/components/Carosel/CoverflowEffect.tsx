import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Card, CardHeader, CardContent } from "@mui/material";

const CoverflowEffect: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-11.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-12.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-14.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-15.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
  ];

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="3D CoverFlow Effect"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div className="carousel" style={{ maxWidth: "1200px" }}>
        <CardContent>
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            effect={"coverflow"}
            className="coverflow-carousel"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.imgPath}
                  alt={item.label}
                  style={{
                    width: "300px",
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

export default CoverflowEffect;
