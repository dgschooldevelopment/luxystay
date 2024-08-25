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
  return (
    <>
      <Nav />
      <SwiperOne></SwiperOne>
      <InputField></InputField>

      <SwiperTwo></SwiperTwo>
      <Addverse></Addverse>
      <Swipe></Swipe>

      <SwiperThree></SwiperThree>
      <Swipe></Swipe>
      <LastSwiper></LastSwiper>
    </>
  );
}
