import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperThree.module.css";
import aboutimg1 from "./assets/aboutimg01.jpeg";
import aboutimg2 from "./assets/aboutimg02.jpeg";
import aboutimg3 from "./assets/aboutimg03.jpeg";
import aboutimg4 from "./assets/aboutimg04.png";
import aboutimg5 from "./assets/aboutimg05.jpg";
import aboutimg6 from "./assets/aboutimg06.jpeg";
import aboutimg7 from "./assets/aboutimg07.jpeg";
import aboutimg8 from "./assets/aboutimg08.jpeg";
import aboutimg9 from "./assets/aboutimg09.png";
import aboutimg10 from "./assets/aboutimg10.png";
import aboutimg11 from "./assets/aboutimg11.jpeg";
import aboutimg12 from "./assets/aboutimg12.jpg";
import aboutimg13 from "./assets/aboutimg13.jpg";
import aboutimg14 from "./assets/aboutimg14.jpg";
import aboutimg15 from "./assets/aboutimg15.jpg";
import aboutimg16 from "./assets/aboutimg16.jpg";
import aboutimg17 from "./assets/aboutimg17.jpg";
import aboutimg18 from "./assets/aboutimg18.jpeg";
import aboutimg19 from "./assets/aboutimg19.jpg";
import aboutimg20 from "./assets/aboutimg20.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

export default function SwiperThree() {
  const about = [
    {
      aboutImages: aboutimg1,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg2,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg3,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg4,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg5,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg6,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg7,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg8,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg9,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg10,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg11,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg12,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg13,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg14,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg15,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg16,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg17,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg18,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg19,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consec? Cu odio quos adipisci.,",
    },
    {
      aboutImages: aboutimg20,
      aboutName: "Aniket",
      desc: "Lorem, ipsum dolor sit amet consectet? Cu odio quos adipisci.,",
    },
  ];

  const breakpoints = {
    320: {
      slidesPerView: 2.4,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <div className={styles.Swthree}>
      <h3 className={styles.heading2}>CHOOSE A COLLECTION</h3>

      <Swiper
        slidesPerView={4.5}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {about.map((items) => (
          <SwiperSlide>
            <div className={styles.aboutdiv}>
              <img src={items.aboutImages} alt="" />
              <div className={styles.overlay}>
                <h1 className={styles.aboutHotelName}>{items.aboutName}</h1>
                <p className={styles.description}>{items.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
