import styles from "./Location.module.css";
import Loimg1 from "./assets/locationImg01.svg";
import Loimg2 from "./assets/locationImg02.svg";
import Loimg3 from "./assets/locationImg03.svg";
import Loimg4 from "./assets/locationImg04.svg";
import Loimg5 from "./assets/locationImg05.svg";
import Loimg6 from "./assets/locationImg06.svg";
import Loimg7 from "./assets/locationImg07.svg";
import Loimg8 from "./assets/locationImg08.svg";
import Loimg9 from "./assets/locationImg09.svg";
import Loimg10 from "./assets/locationImg10.svg";
import Loimg11 from "./assets/locationImg11.svg";
import Loimg12 from "./assets/locationImg12.svg";
import Loimg13 from "./assets/locationImg13.svg";
import Loimg14 from "./assets/locationImg14.svg";
import Loimg15 from "./assets/locationImg15.svg";
import Loimg16 from "./assets/locationImg16.png";
import Loimg17 from "./assets/locationImg17.svg";
import Loimg18 from "./assets/locationImg18.svg";
import Loimg19 from "./assets/locationImg19.svg";
import Loimg20 from "./assets/locationImg20.svg";
import Loimg21 from "./assets/locationImg21.svg";
import Loimg22 from "./assets/locationImg22.svg";
import Loimg23 from "./assets/locationImg23.svg";
import Loimg24 from "./assets/locationImg24.svg";
import Loimg25 from "./assets/locationImg25.svg";
import Loimg26 from "./assets/locationImg26.svg";
import Loimg27 from "./assets/locationImg27.svg";

const totalDest = [
  {
    hotelimg: Loimg1,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg2,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg3,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg4,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg5,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg6,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg7,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg8,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg9,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg10,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg11,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg12,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg13,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg14,
    hotelname: "Udaipur",
  },
  0
];

const   LocationSpot = () => {
  return (
    <div className={styles.loactionMain}>
      <div className={styles.gallery}>
        {totalDest.map((items) => (
          <div key={items.hotelname}>
            <img src={items.hotelimg} alt={items.hotelname} height={100} />
            <h4 className={styles.hotelName}>{items.hotelname}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LocationSpot;