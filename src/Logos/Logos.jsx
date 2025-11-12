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
    "/kasuka/imgs/client-1.png",
    "/kasuka/imgs/client-2.png",
    "/kasuka/imgs/client-3.png",
    "/kasuka/imgs/client-4.png",
    "/kasuka/imgs/client-5.png",
    "/kasuka/imgs/client-7.png",
    "/kasuka/imgs/client-8.png",
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
