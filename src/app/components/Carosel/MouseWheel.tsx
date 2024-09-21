import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Card, CardHeader, CardContent } from "@mui/material";

const MouseWheelCarousel: React.FC = () => {
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

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="MouseWheel Controller"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <div className="carousel">
        <CardContent>
          <Swiper
            modules={[Pagination, Mousewheel, Navigation]}
            direction={"vertical"}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            mousewheel={true}
            loop={true}
            className="vertical-carousel"
            style={{ height: "300px" }}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.imgPath} alt={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </div>
    </Card>
  );
};

export default MouseWheelCarousel;
