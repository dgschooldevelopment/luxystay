// // src/components/Luxurynav.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { IoSearchCircle } from "react-icons/io5";
// import { FaBell } from "react-icons/fa";
// import { MdAccountCircle } from "react-icons/md";
// import img1 from "../assets/logo.png";
// import InputField from "../InputField";
// import styles from "./Luxurynav.module.css";

// const Luxurynav = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [showInputField, setShowInputField] = useState(false);
//   const inputFieldRef = useRef(null);

//   // Handle navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50; // Adjust threshold as needed
//       setScrolled(isScrolled);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Toggle InputField visibility when button is clicked
//   const handleButtonClick = () => {
//     setShowInputField(true);
//   };

//   // Detect clicks outside the InputField to hide it
//   const handleClickOutside = (event) => {
//     if (
//       inputFieldRef.current &&
//       !inputFieldRef.current.contains(event.target)
//     ) {
//       setShowInputField(false);
//     }
//   };

//   // Add or remove event listener based on InputField visibility
//   useEffect(() => {
//     if (showInputField) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     // Cleanup on unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showInputField]);

//   return (
//     <>
//       <nav className={`navbar bg-body-tertiary ${styles.navbar}`}>
//         <div className={`container-fluid ${styles.fluid}`}>
//           <NavLink to="/" className="navbar-brand">
//             <img src={img1} alt="Logo" className={styles.image} />
//           </NavLink>
//           <form className="d-flex" role="search">
//             <div className={styles.navitems}>
//               {/* Render the button only when InputField is not shown */}
//               {!showInputField && (
//                 <button
//                   className={styles.btn}
//                   onClick={handleButtonClick}
//                   type="button" // Prevent form submission
//                 >
//                   Luxury Co... | Select Date | 2 Guests
//                   <IoSearchCircle className={styles.icons} />
//                 </button>
//               )}
//             </div>
//             <div className={styles.right}>
//               <FaBell className={styles.icons} />
//               <MdAccountCircle className={styles.icons} />
//             </div>
//           </form>
//         </div>
//       </nav>

//       {/* Conditionally render InputField */}
//       {showInputField && (
//         <div className={styles.inputFieldContainer} ref={inputFieldRef}>
//           <InputField className={styles.luxuryInputField} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Luxurynav;
// src/components/Luxurynav.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import img1 from "../assets/logo.png";
import InputField from "../InputField";
import styles from "./Luxurynav.module.css";

const Luxurynav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const inputFieldRef = useRef(null);
  const nodeRef = useRef(null); // For CSSTransition

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust threshold as needed
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle InputField visibility when button is clicked
  const handleButtonClick = () => {
    setShowInputField((prev) => !prev);
  };

  // Detect clicks outside the InputField to hide it
  const handleClickOutside = (event) => {
    if (
      inputFieldRef.current &&
      !inputFieldRef.current.contains(event.target)
    ) {
      setShowInputField(false);
    }
  };

  // Add or remove event listener based on InputField visibility
  useEffect(() => {
    if (showInputField) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInputField]);

  return (
    <>
      <nav className={`navbar bg-body-tertiary ${styles.navbar}`}>
        <div className={`container-fluid ${styles.fluid}`}>
          <NavLink to="/" className="navbar-brand">
            <img src={img1} alt="Logo" className={styles.image} />
          </NavLink>
          <form className="d-flex" role="search">
            <div className={styles.navitems}>
              {/* Button with CSSTransition */}
              <CSSTransition
                in={!showInputField}
                timeout={300}
                classNames={{
                  enter: styles.btnEnter,
                  enterActive: styles.btnEnterActive,
                  exit: styles.btnExit,
                  exitActive: styles.btnExitActive,
                }}
                unmountOnExit
              >
                <button
                  className={styles.btn}
                  onClick={handleButtonClick}
                  type="button" // Prevent form submission
                >
                  Luxury Co... | Select Date | 2 Guests
                  <IoSearchCircle className={styles.icons} />
                </button>
              </CSSTransition>
            </div>
            <div className={styles.right}>
              <FaBell className={styles.icons} />
              <MdAccountCircle className={styles.icons} />
            </div>
          </form>
        </div>
      </nav>

      {/* InputField with CSSTransition */}
      <CSSTransition
        in={showInputField}
        timeout={300}
        classNames={{
          enter: styles.inputEnter,
          enterActive: styles.inputEnterActive,
          exit: styles.inputExit,
          exitActive: styles.inputExitActive,
        }}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className={styles.inputFieldContainer} ref={(el) => { inputFieldRef.current = el; nodeRef.current = el; }}>
          <InputField className={styles.luxuryInputField} />
        </div>
      </CSSTransition>
    </>
  );
};

export default Luxurynav;
