import styles from "./Luxurynav.module.css"
import { IoSearchCircle } from "react-icons/io5";
import img1 from "../assets/logo.png"
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


let Luxurynav =() =>{
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50; // adjust the threshold value as needed
        setScrolled(isScrolled);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return<>

    <div className={styles.nav}>
      <div className={styles.uppernav}>
        <div className={styles.leftupper}>
       <NavLink to="/"> <IoIosArrowBack className={styles.icon} /></NavLink>

        </div>
        <div className={styles.rightupper}>
          <div className={styles.inner}>
            <div className={styles.innerleft}>
              <h6>Luxury Collection</h6>
              <p>02 Guests</p>
            </div>
            <div className={styles.innerright}>
            <FaPen  className={styles.icon1}/>
            <p>Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowernav}>
        <div className={styles.lowup} style={{ display: scrolled ? 'none' : 'block' }}>
          <a href="#">Home</a>
          <IoIosArrowForward className={styles.arrow} />
          <p>Villas in Luxury Collection</p>
        </div>
        <div className={styles.lower} style={{ marginTop: scrolled ? 0 : 'auto' }}>
          <div className={styles.leftlow}>
          <RiEqualizerFill className={styles.ico} />
          </div>
          <div className={styles.rightlow}>
            <button className={styles.buton} style={{width:'15vh'}}>Sort By <IoIosArrowDown />
            </button>
            <button className={styles.buton}>Price <IoIosArrowDown /></button>
            <button className={styles.buton}>Best RAted </button>
            <button className={styles.buton}>Luxury </button>
            <button className={styles.buton}>Pool Villas</button>
          </div>
        </div>
      </div>
    </div>
    
    
  <nav class="navbar bg-body-tertiary" className={styles.navbar}>
  <div class="container-fluid">
    <a class="navbar-brand"><img src={img1} alt="" className={styles.image} /></a>
    <form class="d-flex" role="search">
        <div className={styles.navitems}>
        <button className={styles.btn}>Luxury Co... | Select Date | 2 Guests<IoSearchCircle className={styles.icons} /></button>
   
        </div>
        <div className={styles.right}>
    <FaBell className={styles.icons} />     
        
        <MdAccountCircle className={styles.icons} />
    </div>
       
    </form>
  </div>
</nav>
    
    </>
}


export default Luxurynav;