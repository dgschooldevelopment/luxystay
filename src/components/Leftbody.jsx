import styles from "./Leftbody.module.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

let Leftbody = () =>{
  
return <>

<div className={styles.leftup}>
     <NavLink to="/">Home</NavLink>
      <MdKeyboardArrowRight  className={styles.icon}/>
       <p>Villas in Luxury Collection</p>
</div>

<div className={styles.leftlow}>
     <div className={styles.lowup}> 
        <h5>Display Total Price</h5>
        <p>Price Per Night With Taxes</p>
        <div className={styles.on}>
      <div className={styles.off}></div>
        </div>
         </div>

         <div className={styles.prices}>
            <h5>Price Range</h5>
            <div className={styles.slideprize}>    
            </div>
            <div className={styles.leftprize}></div>
            <div className={styles.rightprize}></div>
            <div className={styles.rate}>
                  <button>₹1000 </button>
                  <button>₹500000</button>
            </div>
            <button className={styles.btnn}>Apply</button>
         </div>

         <div className={styles.rooms}>
            <h5>Rooms</h5>
            <div className={styles.numbers}>
                  <div className={styles.left}>
                  <p>No. of Rooms</p>
                  </div>
                  <div className={styles.right}>
                  <p className={styles.bt} style={{borderRadius:'2px' , fontSize:'1vw'}}>-</p>
                  <p className={styles.bt} style={{background:'none'}}>01</p>
                  <p className={styles.bt} style={{borderRadius:'2px'}}>+</p>
                  </div>
            </div>
         </div>
         <div className={styles.filters}>
            <h5>Top Filters</h5>
            <p><input type="checkbox" name="" id="" />Mariott Bionvoy</p>
            <p><input type="checkbox" name="" id="" />Pool / jacuzzi</p>
            <p><input type="checkbox" name="" id="" />High Speed WiFi</p>
            <p><input type="checkbox" name="" id="" />Pet Friendly</p>
            <p><input type="checkbox" name="" id="" />Best Rated</p>
            <p className={styles.see}>See More</p>
         </div>

         <div className={styles.nightprice}>
            <h5>Price Per Night</h5>
            <p><input type="radio" name="" id="" />Under ₹10000</p>
            <p><input type="radio" name="" id="" /> ₹10000 - ₹20000</p>
            <p><input type="radio" name="" id="" />₹20000 - ₹35000</p>
            <p><input type="radio" name="" id="" />₹35000 - ₹50000</p>
            <p><input type="radio" name="" id="" />More Than ₹50000</p>
         </div>

         <div className={styles.rightlow}>
            <div className={styles.lowupper}>
                  <h5>Selected Filters</h5>
                  <p>Clear All</p>
            </div>
            <button className={styles.results}>All Results</button>
         </div>
</div>

</>

}

export default Leftbody;