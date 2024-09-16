import styles from "./Nav.module.css";
import img5 from "./assets/img11.svg";
import img6 from "./assets/logo.png";
import img7 from "./assets/bell.svg";
import img1 from "./assets/logo.png";
import { IoMdContact } from "react-icons/io";
import Footer from "./Footer";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
let Nav = () => {
  function close() {
    var closeButtton = document.getElementById("close");
    var downClass = document.getElementById("down");
    downClass.style.display = "none";
  }

  function open() {
    var openButtton = document.getElementById("open");
    var downClass = document.getElementById("down");
    downClass.style.display = "block";
  }

  return (
    <>
      <div className={styles.down} id="down">
        <div className={styles.top}>
          <IoMdClose className={styles.close} id="close" onClick={close} />
        </div>
        <div className={styles.whitedown}>
          <div className={styles.link}>
          <NavLink to="/" className={styles.links}>Home</NavLink>
            <NavLink className={styles.links}>Explore</NavLink>
            <NavLink to="/luxary" className={styles.links}>
              Luxary Villas
            </NavLink>
            <NavLink to="/listur" className={styles.links}>
              List Your Proprty
            </NavLink>
            <NavLink className={styles.links}>Why choose us</NavLink>
            <NavLink className={styles.links}>Help</NavLink>
            <NavLink className={styles.links}>About Us</NavLink>
          </div>
        </div>
      </div>

      <nav class="navbar bg-body-tertiary" className={styles.navbar}>
        <IoMdMenu className={styles.menu} id="open" onClick={open} />
        <div class="container-fluid">
          {/* <a class="navbar-brand">
            <img src={img6} alt="" className={styles.image} />
          </a> */}

          <form class="d-flex" role="search">
            <NavLink to="/" className={styles.logoimg}>
              <img src={img1} alt="" className={styles.image} />
            </NavLink>
            <div className={styles.navitems}>
              <button
                className={styles.btn}
                style={{ border: "none", fontSize: "1.3vw" }}
              >
                Explore
                <img
                  src={img5}
                  alt=""
                  style={{ marginLeft: "1vw", width: "2vh" }}
                />
              </button>
              <button
                className={styles.btn}
                style={{
                  backgroundColor: "rgb(8, 8, 8)",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(8, 8, 8, 1) 35%, rgba(102, 98, 94, 1) 49%, rgba(0, 0, 0, 1) 70%)",
                  color: "#f8d1a6",
                  fontSize: "0.9vw",
                  fontWeight: 600,
                  border: "1px solid #fdd5a9",
                }}
              >
                <NavLink className={styles.navlink} to="/luxary">
                  LUXURY GATEWAYS
                </NavLink>
              </button>

              <button className={styles.btn}  >
                {/* give .ans class to the .btn class for responsive design of
                buttons */}
                <NavLink className={styles.navlink} to="/listur" style={{color:"black"}}>
                  LIST YOUR PROPERTY
                </NavLink> 
              </button>
              <button className={styles.btn}>+91 9167928471</button>
              <img className={styles.bell} src={img7} alt="" />
              <IoMdContact className={styles.icons} />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
