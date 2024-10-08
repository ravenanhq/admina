import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";

const ThumbsGallery: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-1.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-2.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-3.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-7.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-8.jpg",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Thumbs Gallery"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div className="carousel" style={{ maxWidth: "1200px" }}>
        <CardContent>
          <Swiper
            modules={[Pagination, Thumbs, Navigation]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            slidesPerView={"auto"}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop={true}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.imgPath}
                  alt={item.label}
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Box sx={{ mt: 4, background: "transparent" }}>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {carouselItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.imgPath}
                    alt={item.label}
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </CardContent>
      </div>
    </Card>
  );
};

export default ThumbsGallery;
