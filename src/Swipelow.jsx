import styles from "./Swipelow.module.css";
import { useSwiper } from "swiper/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgg1 from "./assets/pict2.svg";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import img1 from "../assets/pic1.jpg";
import img2 from "./assets/pic2.jpg";
import img3 from "./assets/pic3.jpg";
import img4 from "./assets/pic4.jpg";
import img5 from "./assets/pic5.jpg";
import img6 from "./assets/pic6.jpg";
import img7 from "./assets/pic7.jpg";
import img8 from "./assets/pic8.jpg";
import img9 from "./assets/pic9.jpg";
import { FaArrowRight } from "react-icons/fa6";
let Swipelow = () => {
  const sw = useSwiper();

  let Swipepass = [
    {
      hotelname: "Casa Simoes-Candolim",
      image: img2,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img2,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img3,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img4,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img5,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img6,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img7,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img8,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
    {
      hotelname: "Casa Simoes-Candolim",
      image: img9,
      location: "Goa,Goa",
      roomdesc: "Upto 7 Guests + 3 Rooms + 3 Baths",
      prize: "₹56,383",
      tax: "For Per Night + Taxes",
    },
  ];

  const breakpoints = {
   320: {
     slidesPerView: 1.5,
   },
   768: {
     slidesPerView: 2,
   },
   1024: {
     slidesPerView: 4,
   },
 };   
  return (
    <>
      <div className={styles.lowswipe}>
        <div className={styles.lowleft}>
          <button
            className={styles.btn}
            onClick={() => swiperuseSwiper.current.sw.slidePrev()}
          >
            {" "}
            {"<"}{" "}
          </button>
        </div>
        <div className={styles.lowmid}>
          <>
            <Swiper
              slidesPerView={3.5}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={breakpoints}
            >
              {Swipepass.map((item) => (
                <SwiperSlide
                  className={styles.myswipe}
                  style={{ width: "20vw" }}
                >
                  <div className={styles.maindiv}>
                    <div className={styles.cardup}>
                      {" "}
                      <img src={item.image} alt="" />
                    </div>
                    <div className={styles.cardlow}>
                      <div className={styles.lowup}>
                        <h3>{item.hotelname}</h3>
                        <p>
                          <img src={imgg1} alt="" />
                          {item.location}
                        </p>
                        <p>{item.roomdesc}</p>
                      </div>
                      <div className={styles.lowdown}>
                        <div className={styles.lowlefty}>
                          <h4>{item.prize}</h4>
                          <p>{item.tax}</p>
                        </div>
                        <div className={styles.lowrighty}>
                          <button>
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide className={styles.more}>
                <button className={styles.explore}>Explore More</button>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className={styles.lowright}>
          <button
            className={styles.btn}
            onClick={() => swiperuseRef.current.sw.slideNext()}
          >
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Swipelow;
