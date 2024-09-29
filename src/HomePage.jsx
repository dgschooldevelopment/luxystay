// import SwiperOne from "./SwiperOne";
// import InputField from "./InputField";
// import SwiperTwo from "./SwiperTwo";
// import Addverse from "./Addverse";
// import SwiperThree from "./SwiperThree";
// import Swipe from "./Swipe";
// import LastSwiper from "./LastSwiper";
// import styles from "./App.module.css";
// import Nav from "./Nav";

// export default function HomePage() {
//   return (
//     <>
//       <Nav />
//       <SwiperOne></SwiperOne>
//       <InputField></InputField>

//       <SwiperTwo></SwiperTwo>
//       <Addverse></Addverse>
//       <Swipe></Swipe>

//       <SwiperThree></SwiperThree>
//       <Swipe></Swipe>
//       <LastSwiper></LastSwiper>
//     </>
//   );
// }
import { useState } from "react";
import SwiperOne from "./SwiperOne";
import InputField from "./InputField";
import SwiperTwo from "./SwiperTwo";
import Addverse from "./Addverse";
import SwiperThree from "./SwiperThree";
import Swipe from "./Swipe";
import LastSwiper from "./LastSwiper";
import styles from "./App.module.css";
import Nav from "./Nav";

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <Nav />
      <SwiperOne />
      <InputField selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect} />
      <SwiperTwo selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect} />
      <Addverse />
      <Swipe />
      <SwiperThree />
      <Swipe />
      <LastSwiper />
    </>
  );
}
