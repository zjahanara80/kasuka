import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ImageCreator } from "../shared/SharedComponents";
import "swiper/css/pagination";
import "swiper/css";
import "./Roles.scss";

const RoleSlide = (props) => {
  console.log(props);
  const { img, role, text, name } = props;

  return (
    <div className="roles-box">
      <ImageCreator className="roles-box__img" src={img} />
      <span className="roles-box__name">{name}</span>
      <span className="roles-box__role">{role}</span>
      <p className="roles-box__text">{text}</p>
    </div>
  );
};

export default function Roles() {
  const rolesInfos = [
    {
      name: "مت براندوز",
      role: "کارآفرین",
      img: "/kasuka/imgs/testimonials-1.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
    },
    {
      name: "جان لارسون",
      role: "پایه گذار",
      img: "/kasuka/imgs/testimonials-2.jpg",
      text: "    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
    },
    {
      name: "ساول گارن",
      role: "فریلنسر",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
      img: "/kasuka/imgs/testimonials-3.jpg",
    },
    {
      name: "ینا کالریس",
      role: "طراح",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
      img: "/kasuka/imgs/testimonials-4.jpg",
    },
    {
      name: "مت براندوم",
      role: "صاحب فروشگاه",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
      img: "/kasuka/imgs/testimonials-5.jpg",
    },
  ];

  return (
    <section className="roles">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {rolesInfos.map((detail, index) => (
          <SwiperSlide className="logos-box__slide">
            <RoleSlide {...detail} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
