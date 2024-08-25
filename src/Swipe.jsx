import styles from "./Swipe.module.css";
import Swipeup from "./Swipeup";
import Swipelow from "./Swipelow";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Swipe() {
  return (
    <>
      <div className={styles.swipediv}>
        <Swipeup></Swipeup>
        <Swipelow></Swipelow>
      </div>
    </>
  );
}

export default Swipe;
