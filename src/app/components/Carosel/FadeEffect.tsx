import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Controller } from "swiper/modules";

const FadeEffect: React.FC = () => {
  const carouselItems = [
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
    <Swiper
      modules={[Controller, Autoplay, Pagination, EffectFade]}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 3000 }}
      loop={true}
      effect={"fade"}
      className="vertical-carousel"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index} style={{ maxWidth: "300px", width: "300px" }}>
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
  );
};

export default FadeEffect;
