// import styles from "./Nav.module.css";
// import img5 from "./assets/img11.svg";
// import img6 from "./assets/logo.png";
// import img7 from "./assets/bell.svg";
// import img1 from "./assets/logo.png";
// import { IoMdContact } from "react-icons/io";
// import Footer from "./Footer";
// import { Link, NavLink } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
// import { IoMdMenu } from "react-icons/io";
// let Nav = () => {
//   function close() {
//     var closeButtton = document.getElementById("close");
//     var downClass = document.getElementById("down");
//     downClass.style.display = "none";
//   }

//   function open() {
//     var openButtton = document.getElementById("open");
//     var downClass = document.getElementById("down");
//     downClass.style.display = "block";
//   }

//   return (
//     <>
//       <div className={styles.down} id="down">
//         <div className={styles.top}>
//           <IoMdClose className={styles.close} id="close" onClick={close} />
//         </div>
//         <div className={styles.whitedown}>
//           <div className={styles.link}>
//           <NavLink to="/" className={styles.links}>Home</NavLink>
//             <NavLink className={styles.links}>Explore</NavLink>
//             <NavLink to="/luxary" className={styles.links}>
//               Luxary Villas
//             </NavLink>
//             <NavLink to="/listur" className={styles.links}>
//               List Your Proprty
//             </NavLink>
//             <NavLink className={styles.links}>Why choose us</NavLink>
//             <NavLink className={styles.links}>Help</NavLink>
//             <NavLink className={styles.links}>About Us</NavLink>
//           </div>
//         </div>
//       </div>

//       <nav class="navbar bg-body-tertiary" className={styles.navbar}>
//         <IoMdMenu className={styles.menu} id="open" onClick={open} />
//         <div class="container-fluid">
//           {/* <a class="navbar-brand">
//             <img src={img6} alt="" className={styles.image} />
//           </a> */}

//           <form class="d-flex" role="search">
//             <NavLink to="/" className={styles.logoimg}>
//               <img src={img1} alt="" className={styles.image} />
//             </NavLink>
//             <div className={styles.navitems}>
//               <button
//                 className={styles.btn}
//                 style={{ border: "none", fontSize: "1.3vw" }}
//               >
//                 Explore
//                 <img
//                   src={img5}
//                   alt=""
//                   style={{ marginLeft: "1vw", width: "2vh" }}
//                 />
//               </button>
//               <button
//                 className={styles.btn}
//                 style={{
//                   backgroundColor: "rgb(8, 8, 8)",
//                   backgroundImage:
//                     "linear-gradient(90deg, rgba(8, 8, 8, 1) 35%, rgba(102, 98, 94, 1) 49%, rgba(0, 0, 0, 1) 70%)",
//                   color: "#f8d1a6",
//                   fontSize: "0.9vw",
//                   fontWeight: 600,
//                   border: "1px solid #fdd5a9",
//                 }}
//               >
//                 <NavLink className={styles.navlink} to="/luxary">
//                   LUXURY GATEWAYS
//                 </NavLink>
//               </button>

//               <button className={styles.btn}  >
//                 {/* give .ans class to the .btn class for responsive design of
//                 buttons */}
//                 <NavLink className={styles.navlink} to="/listur" style={{color:"black"}}>
//                   LIST YOUR PROPERTY
//                 </NavLink> 
//               </button>
//               <button className={styles.btn}>+91 9167928471</button>
//               <img className={styles.bell} src={img7} alt="" />
//               <IoMdContact className={styles.icons} />
//             </div>
//           </form>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;

// Nav.js

// Nav.js


/* Nav.jsx */

import React, { useState, useEffect, useRef } from "react";
import styles from "./Nav.module.css";
import img5 from "./assets/img11.svg"; // Explore Icon
import img6 from "./assets/logo.png";  // Logo Image
import img1 from "./assets/logo.png";  // Logo Image
import { IoMdContact, IoMdClose, IoMdMenu, IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for notification dropdown
  const [notifications, setNotifications] = useState([]); // Notifications data
  const bellRef = useRef(null);

  // Scroll event listener to toggle navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Debounce scroll handler for performance
    let debounceTimer = null;
    const debouncedHandleScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  // Click outside handler for notification dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Mock fetching notifications
  useEffect(() => {
    // Replace this with actual API call
    const fetchNotifications = () => {
      const mockNotifications = [
        { id: 1, message: "New property listed!" },
        { id: 2, message: "Your listing has been approved." },
        { id: 3, message: "New message from a user." },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  // Functions to open and close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Toggle notification dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`${styles.down} ${isMenuOpen ? styles.showDown : ""}`} id="down">
        <div className={styles.top}>
          <IoMdClose className={styles.close} onClick={closeMenu} />
        </div>
        <div className={styles.whitedown}>
          <div className={styles.link}>
            <NavLink to="/" className={styles.links}>Home</NavLink>
            <NavLink to="/explore" className={styles.links}>Explore</NavLink>
            <NavLink to="/luxary" className={styles.links}>Luxury Villas</NavLink>
            <NavLink to="/listur" className={styles.links}>List Your Property</NavLink>
            <NavLink to="/why-choose-us" className={styles.links}>Why Choose Us</NavLink>
            <NavLink to="/help" className={styles.links}>Help</NavLink>
            <NavLink to="/about-us" className={styles.links}>About Us</NavLink>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <IoMdMenu className={styles.menu} onClick={openMenu} />
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <NavLink to="/" className={styles.logoimg}>
              <img src={img1} alt="Logo" className={styles.image} />
            </NavLink>
          </div>
          <div className={styles.navitems}>
            <button
              className={`${styles.btn} ${isScrolled ? styles.scrolledText : ""}`}
            >
              Explore
              <img src={img5} alt="Explore Icon" className={styles.exploreIcon} />
            </button>
            <button
              className={`${styles.btn} ${styles.luxuryButton} ${isScrolled ? styles.scrolledText : ""}`}
            >
              <NavLink
                className={styles.navlink}
                to="/luxary"
              >
                LUXURY GATEWAYS
              </NavLink>
            </button>
            <button
              className={`${styles.btn} ${isScrolled ? styles.scrolledText : ""}`}
            >
              <NavLink
              to="/listur"
              className={`${styles.btn} ${isScrolled ? styles.scrolledText : ""} ${styles.navlinkButton}`}
            >
              LIST YOUR PROPERTY
            </NavLink>
            </button>
            <button
              className={`${styles.btn} ${isScrolled ? styles.scrolledText : ""}`}
            >
              +91 9167928471
            </button>
            {/* Bell Icon with Notification Dropdown */}
            <div className={styles.bellContainer} ref={bellRef} style={{ position: 'relative' }}>
              <IoMdNotifications
                className={`${styles.bellIcon} ${isScrolled ? styles.scrolledText : ""}`}
                onClick={toggleDropdown}
              />
              {notifications.length > 0 && (
                <span className={styles.badge}>{notifications.length}</span>
              )}
              {/* Notification Dropdown */}
              <div className={`${styles.notificationDropdown} ${isDropdownOpen ? styles.showDropdown : ""}`}>
                {notifications.length === 0 ? (
                  <div className={styles.notificationItem}>No new notifications.</div>
                ) : (
                  notifications.map((notification) => (
                    <div key={notification.id} className={styles.notificationItem}>
                      {notification.message}
                    </div>
                  ))
                )}
              </div>
            </div>
            <IoMdContact className={styles.icons} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
