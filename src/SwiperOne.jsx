import img1 from "./assets/ram.jpg";
import img2 from "./assets/SlideImages1.jpeg";
import img3 from "./assets/SlideImages2.jpeg";
import img4 from "./assets/SlideImages3.jpeg";
import Cardone from "./CardOne";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

export default function SwiperOne() {
  return (
    <>
      <Swiper
        autoplay={true}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Cardone
            head={"Ready To Welcome You..!!"}
            news={"Newest Escape"}
            bgimg={img2}
          ></Cardone>
        </SwiperSlide>
        <SwiperSlide>
          <Cardone
            head={"Introducing Vieda By Stayvista..!"}
            news={"Finest Villas Gateways"}
            bgimg={img3}
          ></Cardone>
        </SwiperSlide>
        <SwiperSlide>
          <Cardone
            head={"Featured On Marriot"}
            news={"View Collection  "}
            bgimg={img4}
          ></Cardone>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
