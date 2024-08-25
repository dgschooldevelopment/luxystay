import addimg from "./assets/addverse.jpg";
import styles from "./LastSwiper.module.css";

import { useRef } from "react";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LastSwiper = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className={styles.lastswiper}>
      <Slider {...settings}>
        <img className={styles.imges} src={addimg} alt="" />
        <img className={styles.imges} src={addimg} alt="" />
      </Slider>
    </div>
  );
};

export default LastSwiper;
