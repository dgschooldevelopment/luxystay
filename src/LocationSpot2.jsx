import styles from "./LocationSpot2.module.css";
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

const totalDest2 = [
  {
    hotelimg: Loimg15,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg16,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg17,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg18,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg19,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg20,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg21,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg22,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg23,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg24,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg25,
    hotelname: "Udaipur",
  },
  {
    hotelimg: Loimg26,
    hotelname: "jaipur",
  },
  {
    hotelimg: Loimg27,
    hotelname: "Delhi",
  },
  {
    hotelimg: Loimg18,
    hotelname: "Udaipur",
  },
];

const LocationSpot2 = () => {
  return (
    <div className={styles.loactionMain}>
      <div className={styles.gallery}>
        {totalDest2.map((items) => (
          <div key={items.hotelname}>
            <img src={items.hotelimg} alt={items.hotelname} height={100} />
            <h4 className={styles.hotelName}>{items.hotelname}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LocationSpot2;