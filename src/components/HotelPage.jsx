// import { NavLink } from "react-router-dom";
// import Luxurynav from "./Luxurynav";
// import styles from "./HotelPage.module.css";
// import ImgInsert from "./ImgInsert";
// import HotelOption from "./HotelOption";
// function HotelPage({aniket}){
//     return<>
//     <Luxurynav></Luxurynav>
//     <div className={styles.option} ><p><span><NavLink to="/" style={{color:"#3280ec",textDecoration:"none"}}>Home</NavLink > {" > "} <NavLink to="/luxary" style={{color:"#3280ec",textDecoration:"none"}}>villas in Alibaug </NavLink>{" > " }</span> Hamptons Charm Villa in Alibaug</p>
//     <button className={styles.broucher}>View Brouchers</button></div>
//     <ImgInsert aniket={aniket}/>
//     <HotelOption/>
//     </>
// }
// export default HotelPage;
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Luxurynav from "./Luxurynav";
import styles from "./HotelPage.module.css";
import ImgInsert from "./ImgInsert";
import HotelOption from "./HotelOption";
import { useParams } from 'react-router-dom';
function HotelPage() {
    const { hotelId } = useParams();
    const [hotelDetails, setHotelDetails] = useState(null);

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/fetchHotelDetails?hotelId=${hotelId}`);
                const data = await response.json();
                if (data.hotel) {
                    setHotelDetails(data.hotel);
                }
            } catch (error) {
                console.error("Error fetching hotel details:", error);
            }
        };

        fetchHotelDetails();
    }, []);

    if (!hotelDetails) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return (
        <>
            <Luxurynav />
            <div className={styles.option}>
                <p>
                    <span>
                        <NavLink to="/" style={{ color: "#3280ec", textDecoration: "none" }}>Home</NavLink> {" > "}
                        <NavLink to="/luxary" style={{ color: "#3280ec", textDecoration: "none" }}>villas in Alibaug</NavLink> {" > "}
                    </span>
                    {hotelDetails.hotelName}
                </p>
                <button className={styles.broucher}>View Brouchers</button>
            </div>
            <ImgInsert images={hotelDetails.hotelImages} />
            <HotelOption hotelDetails={hotelDetails} />
        </>
    );
}

export default HotelPage;
