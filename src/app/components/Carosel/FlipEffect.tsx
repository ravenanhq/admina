import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation, Pagination } from "swiper/modules";
import { Card, CardHeader, CardContent } from "@mui/material";

const FlipEffect: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-5.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-6.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-14.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-15.jpg",
    },
  ];

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="3D Flip Effect"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div className="carousel">
        <CardContent>
          <Swiper
            modules={[Pagination, EffectFlip, Navigation]}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            slidesPerView={"auto"}
            effect={"flip"}
            grabCursor={true}
            navigation={true}
            loop={true}
            className=""
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ maxWidth: "300px", width: "300px" }}
              >
                <img
                  src={item.imgPath}
                  alt={item.label}
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </div>
    </Card>
  );
};

export default FlipEffect;
