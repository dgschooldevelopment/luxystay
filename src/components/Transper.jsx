import styles from "./Transper.module.css"
import prev from "../assets/prev.svg"
import next from "../assets/next.svg"
import React,{ useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import tswip1 from "../assets/tswip1.jpg"
import tswip2 from "../assets/tswip2.jpg"
import tswip3 from "../assets/tswip3.jpg"
import tswip4 from "../assets/tswip4.jpg"
import tswip5 from "../assets/tswip5.jpg"
import tswip6 from "../assets/tswip6.jpg"

function Transper(){
    let swipepass = [
        {
            image:tswip1,
            para:"“Our experience as a host with Vista as our sole booking platform has been par excellence. They are involved at every stage of booking and ensure that each aspect is looked into with detalil, especially with feedback being taken",
            para1:"Rajesh Khanna",
            para2:"Chalet Windflower, Manali",
        },
        {
            image:tswip2,
            para:"““Extremely supportive and promoting our property well. Most importantly we are getting just the kind of guests we would like to have in our property.just the kind of guests we would like to have in our property”",
            para1:"Neerja Sawhney",
            para2:"Misty Mountains Cottage, Kasauli",
        },
        {
            image:tswip3,
            para:"“Ever since we signed the contract we haven’t regretted partnering with them. Their audit checks spur us to keep our property in great shape. Above all, they get you good returns on your property than if you had managed it alone. ",
            para1:"Joshua Chelliah",
            para2:"The Light House, Chennai",
        },
        {
            image:tswip4,
            para:"“The team at StayVista is always available to help on any issues, 24×7. Their marketing network is awesome. All in all, it’s been an awesome experience working with them.experience working with them.”",
            para1:"Viraf Sarkari",
            para2:"Wings on Water, Goa",
        },
        {
            image:tswip5,
            para:"When the Vista team came to see our property, they advised us on what needed to be done to generate more revenue. We hit the target in a year itself and went on from 4 to 8 villas in 2 years! They are transparent .",
            para1:"Nikuni Singhania",
            para2:"Shivom Villa, Lonavala",
        },
        {
            image:tswip6,
            para:"The influencer marketing approachhas showcased our property's comforts and services, resulting in a pleasant stay experience for guests. The Vista team's effective promotion has increased visibility and boosted",
            para1:"Shruti Arora",
            para2:"Ekant Villa, Punjab",
        },
      
    ]

    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      };
  
    return <>
    
    <div className={styles.transper}>
    <div className={styles.transperhead}>
    <div className={styles.transperhead1}>
        <h1>Transparency is key</h1>
        <p>No hidden costs, no unexpected surprises — our commitment to transparency truly sets us apart.</p>
    </div>
    <div className={styles.transperhead2}>
        <img src={(prev)} alt="" className={styles.prevbutton}/>
        <img src={(next)} alt="" className={styles.nextbutton}/>
    </div>

    </div>
    <div className={styles.transperswiper}>
        <>
    <Swiper   breakpoints={breakpoints}
      autoplay={true} 
      modules={[Autoplay,Pagination,Navigation]} 
      className='mySwiper'>
         {swipepass.map((item)=> (

        
    <SwiperSlide className={styles.myswipe}> 
        <div className={styles.mainswiper}>
        <div className={styles.mainswiperone} style={{backgroundImage:`url(${item.image})`}}>
     
        </div>
        <div className={styles.mainswipertwo}>
            <p>{item.para}</p>
            <h4>{item.para1}</h4>
            <h5>{item.para2}</h5>
        </div>

        </div>
    </SwiperSlide>
     ))}
        
         </Swiper>
        </>
    </div>
    
    </div>
    
    
    
    
    </>
}

export default Transper