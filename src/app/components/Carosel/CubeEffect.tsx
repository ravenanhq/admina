import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, Pagination, Controller } from "swiper/modules";

const CubeEffect: React.FC = () => {
  const carouselItems = [
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-14.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-12.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-11.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-16.jpg",
    },
    {
      label: "lorem ipsum",
      imgPath: "/assets/images/carousel-img-13.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Controller, Autoplay, Pagination, EffectCube]}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{ delay: 3000 }}
      loop={true}
      effect={"cube"}
      className="cube-carousel"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index} style={{ maxWidth: "300px", width: "300px" }}>
          <img
            src={item.imgPath}
            alt={item.label}
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#fff",
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CubeEffect;
