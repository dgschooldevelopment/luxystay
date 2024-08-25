import styles from "./CardOne.module.css";
import { useSwiper } from "swiper/react";

var CardOne = ({head,news,bgimg}) => {
    const sw = useSwiper();
  return (
    <>
    
    <div className={styles.CardOneMain}>
      <div style={{ backgroundImage: `url(${bgimg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
        className={styles.cardcontent}>

        <h1 className={styles.heading}>{head}</h1>
        <div className={styles.button}>
          <h5>{news}</h5>
        </div>
        <button className={styles.nextslide} onClick={()=> sw.slidePrev()}>{'<'}</button>
        <button className={styles.prevslide} onClick={()=> sw.slideNext()}>{'>'}</button>
      </div>
     
    </div>
    </>
  );
};
export default CardOne;
