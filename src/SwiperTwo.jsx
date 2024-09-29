// import React, { useRef, useState } from "react";
// import styles from "./SwiperTwo.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import LocationSpot from "./LocationSpot";
// import LocationSpot2 from "./LocationSpot2";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";

// export default function SwiperTwo() {
//   return (
//     <div className={styles.swipercontainer}>
//       <h3 className={styles.heading}>Pick a destination</h3>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           <LocationSpot></LocationSpot>
//         </SwiperSlide>
//         <SwiperSlide>
//           <LocationSpot2></LocationSpot2>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
import React from "react";
import styles from "./SwiperTwo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import LocationSpot from "./LocationSpot";
import LocationSpot2 from "./LocationSpot2";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function SwiperTwo({ onLocationSelect }) {
  return (
    <div className={styles.swipercontainer}>
      <h3 className={styles.heading}>Pick a destination</h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <LocationSpot onLocationSelect={onLocationSelect} />
        </SwiperSlide>
        <SwiperSlide>
          <LocationSpot2 onLocationSelect={onLocationSelect} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
