import styles from "./Swipelow.module.css";
import { useSwiper } from "swiper/react";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import imgg1 from "./assets/pict2.svg"; // Location icon
import { FaArrowRight } from "react-icons/fa6";

const Swipelow = ({ selectedLocation }) => {
  const [hotels, setHotels] = useState([]); // State to store fetched hotels
  const swiperRef = useRef(null);

  // Fetch hotel data from API
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3001/hotellist");
        const data = await response.json();
        let filteredHotels = data.hotels;

        if (selectedLocation !== "All") {
          filteredHotels = data.hotels.filter((hotel) => {
            return hotel.location.city === selectedLocation; // Filter hotels by selected location
          });
        }

        setHotels(filteredHotels); // Store the filtered hotel data
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotels();
  }, [selectedLocation]); // Add selectedLocation as a dependency

  const breakpoints = {
    320: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  };

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <>
      <div className={styles.lowswipe}>
        <div className={styles.lowleft}>
          <button className={styles.btn} onClick={handlePrev}>
            {"<"}
          </button>
        </div>
        <div className={styles.lowmid}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Initialize swiper instance
            slidesPerView={3.5}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={breakpoints}
          >
            {hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <SwiperSlide key={index} className={styles.myswipe}>
                  <div className={styles.maindiv}>
                    <div className={styles.cardup}>
                      <img
                        src={hotel.firstImage} // Use placeholder if no image
                        alt={hotel.hotelName}
                      />
                    </div>
                    <div className={styles.cardlow}>
                      <div className={styles.lowup}>
                        <h3 className={styles.hotelname}>{hotel.hotelName}</h3>
                        <p className={styles.hotelCity}>
                          <img src={imgg1} alt="" />
                          {hotel.location.city || "Unknown Location"}
                        </p>
                        <p className={styles.hotelInfo}>
                          {`Upto ${hotel.maxGuests} Guests + ${hotel.totalRooms} Rooms + ${hotel.totalBathrooms} Baths`}
                        </p>
                      </div>
                      <div className={styles.lowdown}>
                        <div className={styles.lowlefty}>
                          <h4>{hotel.pricePerNight ? `₹${hotel.pricePerNight}` : "Price N/A"}</h4>
                          <p>For Per Night + Taxes</p>
                        </div>
                        <div className={styles.lowrighty}>
                          <button className={styles.arrow} style={{ color: "black" }}>
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide className={styles.myswipe}>
                <div>No hotels available</div>
              </SwiperSlide>
            )}
            <SwiperSlide className={styles.more}>
            <button 
  style={{
    height: '3vw',
    marginLeft: '1.5vw',
    backgroundColor: "#f5f5f5",// No need for !important in inline styles
    color: 'black',
    marginTop: '1vw',
    outline: 'none',
    width: '70%',
    borderRadius: "5px", // Optional, if you want to set the width
  }}
>
  Explore More
</button>


            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.lowright}>
          <button className={styles.btn} onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Swipelow;
