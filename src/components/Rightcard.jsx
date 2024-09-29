import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Rightcard.module.css";
import img2 from "../assets/Location.svg"; // Location icon
import img4 from "../assets/imgg04.png"; // Room and bathroom icon
import img5 from "../assets/food.svg"; // Amenities icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Rightcard = ({ sortOrder, priceRange, roomCount, priceFilter, selectedAmenities }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const priceFilters = {
        under1000: [0, 1000],
        '1000-2000': [1000, 2000],
        '2000-3500': [2000, 3500],
        '3500-5000': [3500, 5000],
        more5000: [5000, Infinity],
    };

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('http://localhost:3001/hotellist');
                setHotels(response.data.hotels);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    const selectedPriceRange = priceFilters[priceFilter] || priceRange;

    const filteredHotels = hotels.filter(hotel => {
        const pricePerNight = Number(hotel.pricePerNight);
        const inPriceRange = pricePerNight >= selectedPriceRange[0] && pricePerNight <= selectedPriceRange[1];
        const roomCountValid = hotel.totalRooms >= roomCount;

        const hasSelectedAmenities = Object.keys(selectedAmenities).every(amenity => {
            return !selectedAmenities[amenity] || 
                   (hotel.amenities && hotel.amenities.some(hotelAmenity => hotelAmenity.name.toLowerCase() === amenity.toLowerCase()));
        });

        return inPriceRange && roomCountValid && hasSelectedAmenities;
    });

    const sortedHotels = [...filteredHotels].sort((a, b) => {
        return sortOrder === 'asc' ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight;
    });

    const formatLocation = (location) => {
        if (Array.isArray(location)) {
            return location.join(', ');
        } else if (typeof location === 'object' && location !== null) {
            return Object.values(location).filter(Boolean).join(', ');
        }
        return 'Location data unavailable';
    };

    return (
        <div className={styles.cardiv}>
            {sortedHotels.length > 0 ? (
                sortedHotels.map((hotel) => (
                    <div key={hotel.hotel_id} className={styles.card}>
                        <div className={styles.firstcard}>
                            <div className={styles.cardleft} style={{ backgroundImage: `url(${hotel.firstImage})` }}></div>
                            <div className={styles.cardmid}>
                                <div className={styles.name}>
                                    <h3 className='hotelname'>{hotel.hotelName}</h3>
                                </div>
                                <div className={styles.location}>
                                    <p><img src={img2} alt="Location icon" />{formatLocation(hotel.location)}</p>
                                </div>
                                <div className={styles.guest}>
                                    <p>{hotel.maxGuests || 0} Guests <img src={img4} alt="Rooms icon" /> {hotel.totalRooms || 0} Rooms <img src={img4} alt="Bathrooms icon" /> {hotel.totalBathrooms || 0} Baths</p>
                                </div>
                                <div className={styles.great}>
                                    <p><b>Great for :</b>
                                        <img src={img5} alt="Amenities icon" />
                                    </p>
                                </div>
                                <div className={styles.midlow}>
                                    {hotel.amenities && hotel.amenities.length > 0 ? (
                                        hotel.amenities.map((amenity, index) => (
                                            <div key={index} className={styles.lowcard}>
                                                <img src={amenity.imageUrl} alt={amenity.name} />
                                                <p>{amenity.name}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p >No amenities available</p>
                                    )}
                                </div>
                            </div>
                            <div className={styles.cardright}>
                                <h4>₹{hotel.pricePerNight}</h4>
                                <button className={styles.cardbtn}>For {roomCount} Room{roomCount > 1 ? 's' : ''}</button>
                                <p>Per Night + Taxes ({roomCount} Room{roomCount > 1 ? 's' : ''})</p>
                                <NavLink to={`/hotelpage/${hotel.hotelId}`} style={{ textDecoration: 'none' }}>
    <button className={styles.cardbtn1} style={{ backgroundColor: "black", color: "#fff", border: "none", fontSize: "1.5vw", marginBottom: "1vw",cursor:"pointer" }}>
        View <IoIosArrowRoundForward />
    </button>
</NavLink>

                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hotels available under this filter.</p>
            )}
        </div>
    );
};

export default Rightcard;
