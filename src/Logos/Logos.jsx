import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Logos.scss";

const LogoItem = ({src}) => {
  return <img src={src} className="logos-img" />;
};

export default function Logos() {
 const imagesArray = [
    "./public/imgs/client-1.png",
    "./public/imgs/client-2.png",
    "./public/imgs/client-3.png",
    "./public/imgs/client-4.png",
    "./public/imgs/client-5.png",
    "./public/imgs/client-7.png",
    "./public/imgs/client-8.png",
  ];

  return (
    <div className="logos-parent">

    <Swiper 
        modules={[Pagination, Autoplay]}
        spaceBetween={20} 
        slidesPerView={5} 
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true} 
    >
      {
      imagesArray.map(img => (

      <SwiperSlide className="logo-slide">
        <LogoItem src={img} />
      </SwiperSlide>
      ))}

    </Swiper>
    </div>
  )
}
