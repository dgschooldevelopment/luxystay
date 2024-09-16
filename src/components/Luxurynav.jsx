import styles from "./Luxurynav.module.css";
import { IoSearchCircle } from "react-icons/io5";
import img1 from "../assets/logo.png";
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";



let Luxurynav = () => {


  var Filter = [
    
  ]

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // adjust the threshold value as needed
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function open() {
    var sortButton = document.getElementById("sort");
    var Dummy = document.getElementById("dumy");
    sortButton.style.display = "block";
    Dummy.style.display="block";
  }

  function close(){
    var sortButton = document.getElementById("sort");
    var Dummy = document.getElementById("dumy");
    sortButton.style.display="none";
    Dummy.style.display="none";
  }

  function openOne() {
    var priceButton = document.getElementById("price");
    var Dummy = document.getElementById("dumy");
    priceButton.style.display = "block";
    Dummy.style.display="block";
  }

  function closeOne(){
    var priceButton = document.getElementById("price");
    var Dummy = document.getElementById("dumy");
    priceButton.style.display = "none";
    Dummy.style.display="none";
  }

  function openTwo() {
    var more = document.getElementById('more');
    var More = document.getElementById('Block');
    var Top = document.getElementById("top");
    more.style.display = "none";
    More.style.display = "Block";  
    More.style.marginTop = 0;
    Top.style.borderBottom = "none";
  }

  function closeTwo() {
    var more = document.getElementById('more');
    var More = document.getElementById('Block');
    more.style.display = "block";
    More.style.display = "none"; 
  }

  function openThree() {
    var Top = document.getElementById('TopFilters');
    Top.style.display = "block";
  }

function closeThree() {
  var Top = document.getElementById('TopFilters');
    Top.style.display = "none";
}

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.uppernav} style={{ position: "fixed" }}>
          <div className={styles.leftupper}>
            <NavLink to="/">
              {" "}
              <IoIosArrowBack className={styles.icon} />
            </NavLink>
          </div>
          <div className={styles.rightupper}>
            <div className={styles.inner}>
              <div className={styles.innerleft}>
                <h6>Luxury Collection</h6>
                <p>02 Guests</p>
              </div>
              <div className={styles.innerright}>
                <FaPen className={styles.icon1} />
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lowernav}>
          <div
            className={styles.lowup}
            style={{ display: scrolled ? "none" : "block" }}
          >
            <NavLink to="/" className={styles.back}>
              Home
            </NavLink>
            <IoIosArrowForward className={styles.arrow} />
            <p>Villas in Luxury Collection</p>
          </div>
          <div
            className={styles.lower}
            style={{ marginTop: scrolled ? 0 : "auto" }}
          >
            <div className={styles.leftlow}>
              <RiEqualizerFill className={styles.ico} onClick={openThree}/>
            </div>
            <div className={styles.rightlow} style={{ overflowX: "auto" }}>
              <button
                className={styles.buton}
                style={{ width: "10vh" }}
                onClick={open}
              >
                Sort By <IoIosArrowDown />
              </button>
              <button className={styles.buton} style={{ width: "10vh" }} onClick={openOne}>
                Price <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dummy} id="dumy">

      </div>

      <div className={styles.sort} id="sort">
        <div className={styles.uppersort}>
          <h3
            style={{ marginLeft: "1.5vh", marginTop: "1vh", fontSize: "3vh" }}
          >
            Sort By
          </h3>
          <RxCross2 style={{ marginRight: "2vh", fontSize: "3vh" }} onClick={close} />
        </div>

        <div className={styles.midsort}>
          <h4>releavance</h4>
          <p>Sort by</p>
        </div>
        <div className={styles.uppermid}>
          <div className={styles.innermid}>
            <FaRegThumbsUp className={styles.ii} />
            <h4>Popular</h4>
            <p>Most Loved</p>
          </div>

          <div className={styles.innermid}>
            <IoIosArrowRoundUp className={styles.ii} />
            <h4>Price</h4>
            <p>Low To High</p>
          </div>

          <div className={styles.innermid}>
            <IoIosArrowRoundDown className={styles.ii} />
            <h4>Price</h4>
            <p>High To Low</p>
          </div>
        </div>

        <div className={styles.lowersort}>
          <button
            style={{ background: "none", border: "none", color: "black" }}
          >
            See all Filters
          </button>
          <button>APPLY FILTER</button>
        </div>
      </div>

<div className={styles.price} id="price">
  <div className={styles.upperprice}>
  <h3
            style={{ marginLeft: "1.5vh", marginTop: "1vh", fontSize: "3vh" }}
          >
           Price
          </h3>
          <RxCross2 style={{ marginRight: "2vh", fontSize: "3vh" }} onClick={closeOne}  />
        </div>

      <div className={styles.midprice}>
        <h4>Price Range</h4>
        <div className={styles.slide}>
          <div className={styles.innerslide}></div>
          <div className={styles.slide1}></div>
          <div className={styles.slide2}></div>
        </div>

      <div className={styles.pricemain}>
        <button>₹10000</button>
        <button>₹50000</button>
      </div>

      <div className={styles.lowmid}>
        <div className={styles.lowupmid}>
          <h3>Total</h3>
          <p>Display Price</p>
        </div>
        <div className={styles.lowermid}>
          <div className={styles.radio}>
            <input type="radio" /> <p>Including Taxes</p>
          </div>

          <div className={styles.radio}>
            <input type="radio" /> <p>Exclusive of Tax</p>
          </div>
        </div>
      </div>

      </div>

      <div className={styles.lowersort} style={{marginTop:'2vh'}}>
          <button
            style={{ background: "none", border: "none", color: "black" }}
          >
            See all Filters
          </button>
          <button>APPLY FILTER</button>
        </div>

  </div>


<div className={styles.filters} id="TopFilters">

  <div className={styles.upfilters}>
  <IoIosArrowBack  className={styles.ii} style={{marginTop:'.5vh' }} onClick={closeThree}/>
    <h4>Filters</h4>
    <h4 style={{marginLeft:'20vh',textDecoration:'underline'}}>Clear</h4>
  </div>

<div className={styles.upone}>
  <h3>Selected Filters</h3>
  <button>All Results</button>
</div>

<div className={styles.uptwo}>
  <h4>Releavance</h4>
  <p>Sort by</p>
  <div className={styles.twoin}>
  <div className={styles.innermid}>
            <FaRegThumbsUp className={styles.ii} />
            <h4>Popular</h4>
            <p>Most Loved</p>
          </div>

          <div className={styles.innermid}>
            <IoIosArrowRoundUp className={styles.ii} />
            <h4>Price</h4>
            <p>Low To High</p>
          </div>

          <div className={styles.innermid}>
            <IoIosArrowRoundDown className={styles.ii} />
            <h4>Price</h4>
            <p>High To Low</p>
          </div>
  </div>

  <div className={styles.filterinner}>
  <div className={styles.lowmid}>
        <div className={styles.lowupmid}>
          <h3>Total</h3>
          <p>Display Price</p>
        </div>
        <div className={styles.lowermid}>
          <div className={styles.radio}>
            <input type="radio" /> <p>Including Taxes</p>
          </div>

          <div className={styles.radio}>
            <input type="radio" /> <p>Exclusive of Tax</p>
          </div>
        </div>
      </div>

<div className={styles.midprice}>
<h4 style={{marginTop:'3vh'}}>Price Range</h4>
        <div className={styles.slide}>
          <div className={styles.innerslide}></div>
          <div className={styles.slide1}></div>
          <div className={styles.slide2}></div>
        </div>

      <div className={styles.pricemain}>
        <button>₹10000</button>
        <button>₹50000</button>
      </div>
</div>

<div className={styles.rooms}>
    <h3>Rooms</h3>
    <div className={styles.innerRoom}>
      <div className={styles.leftRoom} >
        <h6>No. of Rooms</h6>

      </div>
      <div className={styles.leftRoom}>
        <div className={styles.btnn} style={{backgroundColor:'#bababa'}}>-</div>
        <div className={styles.btnn}>1</div>
        <div className={styles.btnn} style={{backgroundColor:'#bababa'}}>+</div>
      </div>
    </div>
</div>

<div className={styles.topFilters} id="top">
  <h4>Top Filters</h4>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Marriott Bonvoy</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Pool/Jacuzzi</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>High Speed WiFi</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Pet Friendly</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Best Rated</p>
  </div>

<h3 id="more" onClick={openTwo}>See More</h3>

</div>

<div className={styles.more} id="Block">
<div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Great Food</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Economy Escape</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Veg Only</p>
  </div>

<h3 onClick={closeTwo}>See Less</h3>

</div>

<div className={styles.topFilters} id="price" style={{ height:'50vh'}}>
  <h4>Price Per Night</h4>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>Under ₹10000</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>₹10000 - ₹20000</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>₹10000 - ₹35000</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>₹35000 - ₹50000</p>
  </div>
  <div className={styles.fill}>
    <input type="radio" name="" id="" /> <p>More Than ₹50000</p>
  </div>

</div>

<div className={styles.lowersort} style={{marginTop:'4vh' , position:'fixed' , top:'86vh', backgroundColor:'white', left:'0' , height:'10vh'}} >
          <button
            style={{ background: "none", border: "none", color: "black" }}
          >
            See all Filters
          </button>
          <button>APPLY FILTER</button>
        </div>



  </div>
</div>
</div>

      <nav class="navbar bg-body-tertiary" className={styles.navbar}>
        <div class="container-fluid" className={styles.fluid}>
          <a class="navbar-brand">
            <NavLink to="/">
              <img src={img1} alt="" className={styles.image} />
            </NavLink>
          </a>
          <form class="d-flex" role="search">
            <div className={styles.navitems}>
              <button className={styles.btn}>
                Luxury Co... | Select Date | 2 Guests
                <IoSearchCircle className={styles.icons} />
              </button>
            </div>
            <div className={styles.right}>
              <FaBell className={styles.icons} />

              <MdAccountCircle className={styles.icons} />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Luxurynav;
