// import styles from "./HotelOption.module.css";
// import hotelimg from "../assets/advert21 (2).png";
// import hotelimg1 from "../assets/hotelimg (1).jpeg";
// import hotelimg2 from "../assets/hotelimg (2).jpeg";
// import hotelimg3 from "../assets/hotelimg (3).jpeg";
// import hotelimg4 from "../assets/hotelimg (4).jpeg";
// import hotelimg5 from "../assets/hotelimg (5).jpeg";
// import hotelimg6 from "../assets/hotelimg (6).jpeg";
// function HotelOption({ hotelDetails }) {
//   let option = ["Up to 8 Guests", "1 - 4 Rooms", "4 Baths", "Meals Available"];

//   let hoImg = [
//     {
//       img: hotelimg1,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 1"
//     },
//     {
//       img: hotelimg2,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 2"
//     },
//     {
//       img: hotelimg3,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 3"
//     },
//     {
//       img: hotelimg4,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 4"
//     },
//     {
//       img: hotelimg5,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 5"
//     },
//     {
//       img: hotelimg6,
//       desc1:
//         "This is a spacious, centrally air-conditioned room on the ground floor of this property.",
//       desc2:
//         "Adorned with chic wooden decor, this room offers a king-sized bed, an extra mattress, TV, Wi-Fi, wardrobe, locker, heater, and an electric kettle.",
//       desc3:
//         " It is also equipped with an ensuite bathroom and a designated workstation.",
//         bedno:"Bedroom 6"
//     },
//   ];
//   return (
//     <>
//       <div className={styles.optionsection}>
//         <div className={styles.optionnav}>
//           <a href="#">Overview</a>
//           <a href="#">Highlights</a>
//           <a href="#">Reviews</a>
//           <a href="#">Amenities</a>
//           <a href="#">Meals</a>
//           <a href="#">Location</a>
//           <a href="#">Experiences</a>
//           <a href="#">FAQ's</a>
//         </div>
//         <div className={styles.options}>
//           <div className={styles.optionleft}>
//             <h1>
//               Villa Kinara - Reis Magos |{" "}
//               <span className={styles.span}>5 Reviews</span>
//             </h1>
//             <p>Reis Magos,Goa</p>
//             <img src={hotelimg} alt="" height={25} />
//             <div className={styles.optOption}>
//               {option.map((item) => (
//                 <div className={styles.actualop}>{item}</div>
//               ))}
//             </div>
//             <div className={styles.container}>
//               <div className={styles.heading}>
//                 <div className={styles.contact}>
//                   {/* <i className={styles.fas fa-phone-alt}></i> */}
//                   <span>Connect with Host</span>
//                 </div>
//                 <div className={styles.callback}>Request Callback</div>
//               </div>
//               <div className={styles.content}>
//                 <h1>Villa Kinara - Reis Magos - Villa in Reis Magos</h1>
//                 <p>
//                   Situated in the sleepy village of Reis Magos in Bardez, Villa
//                   Kinara promises an idyllic holiday. Aptly named, the retreat
//                   offers spectacular views of a river as chirping birds form a
//                   background score. In true-Goa style, the modern interiors of
//                   the villa are combined with a shack-like exterior, making this
//                   sanctuary ideal for guests looking to soak up some sun, go to
//                   a beach, rest on cabana chairs and unwind at their private
//                   infinity pool. Experience the quiet by the river at Villa
//                   Kinara. For a comfortable and secure stay, please take the
//                   time to read the Home Truths, House Rules and Policies
//                   thoroughly.
//                 </p>
//                 <div className={styles.buttons}>
//                   <button>Explore Your Stay</button>
//                   <button>Home Rules and Truths</button>
//                   <button>Booking & Cancellation</button>
//                   <button>FAQ's</button>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.heading}>
//               <div className={styles.indicator}></div>
//               <h1>Spaces</h1>
//             </div>
//             <div className={styles.hotel_swiper}>
//               <div className={styles.carousel}>
//                 <div className={styles.slides}>
//                   {hoImg.map((item1) => (
//                     <>
//                       <div className={styles.slide}>
//                         <img
//                           className={styles.slideimg}
//                           alt="Bedroom 1 with a king-sized bed, a lamp, and a window with curtains"
//                           height="200"
//                           src={item1.img}
//                           width="300"
//                         />
//                         <div className={styles.caption}>{item1.bedno}</div>
//                         <div className={styles.detail}>
//                           <ul>
//                             <li>{item1.desc1}</li>
//                             <li>{item1.desc2}</li>
//                             <li>{item1.desc3}</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={styles.optionright}>
//             <div className={styles.pricecard}>
//               <div className={styles.colorfuldiv}>
//                 <div className={styles.price}>
//                   ₹64,000 <span>(for 4 rooms) Per Night + Taxes</span>
//                 </div>
//                 <div className={styles.input_group}>
//                   <div>Check-in Add Date</div>
//                   <div>Check-out Add Date</div>
//                 </div>
//                 <div className={styles.input_group}>
//                   <div>Guests 2 Adults, 0 Chil...</div>
//                   <div>No. of Rooms 4 Rooms</div>
//                 </div>
//               </div>
//               <div className={styles.select_dates}>
//                 Select dates for best price
//               </div>
//               <div className={styles.check_availability}>
//                 Check Availability
//               </div>
//               <div className={styles.policy}>
//                 For Booking & Cancellation Policy details{" "}
//                 <a href="#">Click here</a>
//               </div>
//               <div className={styles.connect_host}>
//                 <div> Connect with Host</div>
//                 <div className={styles.request_callback}>Request Callback</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default HotelOption;

import React, { useState, useRef, useEffect } from "react";
import styles from "./HotelOption.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBed, faBath, faUtensils, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Create a default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});

function HotelOption({ hotelDetails }) {
  const optionData = [
    { text: `Up to ${hotelDetails.maxGuests} Guests`, icon: faUsers },
    { text: `${hotelDetails.totalRooms} Rooms`, icon: faBed },
    { text: `${hotelDetails.totalBathrooms} Baths`, icon: faBath },
    { text: hotelDetails.mealsAvailable ? "Meals Available" : "Meals Not Available", icon: faUtensils }
  ];

  const spaces = hotelDetails.spaces || [];
  const meals = hotelDetails.meals || [];
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef(null);
  const defaultPosition = [15.2993, 74.1240]; 
  const [userPosition, setUserPosition] = useState(null);

  // State for Check-in and Check-out dates
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Check if latitude and longitude are available from hotelDetails
  const position = hotelDetails.latitude && hotelDetails.longitude 
      ? [hotelDetails.latitude, hotelDetails.longitude] 
      : defaultPosition;

  const isLocationAvailable = !isNaN(hotelDetails.latitude) && !isNaN(hotelDetails.longitude);

  // Get user location using browser geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      if (direction === "left" && currentSlide > 1) {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentSlide(prev => prev - 1);
      } else if (direction === "right" && currentSlide < spaces.length) {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentSlide(prev => prev + 1);
      }
    }
  };

  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  return (
    <div className={styles.optionsection}>
      <div className={styles.optionnav}>
        {["Overview", "Highlights", "Reviews", "Amenities", "Meals", "Location", "Experiences", "FAQ's"].map((item) => (
          <a href="#" key={item}>{item}</a>
        ))}
      </div>
      <div className={styles.options}>
        <div className={styles.optionleft}>
          <h1>
            {hotelDetails.hotelName} |{" "}
            <span className={styles.span}>5 Reviews</span>
          </h1>
          <p>Location: Reis Magos, Goa</p>

          <div className={styles.optOption}>
            {optionData.map((item, index) => (
              <div key={index} className={styles.actualop}>
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                {item.text}
              </div>
            ))}
          </div>

          {/* Displaying Amenities */}
          <div className={styles.amenitiesContainer}>
            {hotelDetails.amenities?.map((amenity, index) => (
              <div key={index} className={styles.amenityCard}>
                <img src={amenity.imageUrl} alt={amenity.name} className={styles.amenityImage} onError={(e) => { e.target.onerror = null; e.target.src = 'default-image-url'; }} />
                <p className={styles.amenityName}>{amenity.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.container}>
            <div className={styles.heading}>
              <div className={styles.contact}>Connect with Host</div>
              <div className={styles.callback}>Request Callback</div>
            </div>

            <div className={styles.content}>
              <h1>{hotelDetails.hotelName}</h1>
              <p>Experience luxury and comfort at {hotelDetails.hotelName}.</p>
              <div className={styles.buttons}>
                <button>Explore Your Stay</button>
                <button>Home Rules and Truths</button>
                <button>Booking & Cancellation</button>
                <button>FAQ's</button>
              </div>
            </div>
          </div>

          <div className={styles.heading}>
            <h1>Spaces</h1>
            <div className={styles.arrowControls}>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={() => scrollCarousel("left")} />
              <div className={styles.slideCounter}>
                <span>{currentSlide}</span> <span>/</span> <span>{spaces.length}</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={() => scrollCarousel("right")} />
            </div>
          </div>

          <div className={styles.hotel_swiper}>
            <div className={styles.carousel} ref={carouselRef}>
              <div className={styles.slides}>
                {spaces.map((space, index) => (
                  <div key={index} className={styles.slide}>
                    <img className={styles.slideimg} alt={space.points.join(', ')} height="200" src={space.image} width="300" />
                    <div className={styles.caption}>
                      <ul>
                        {space.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.mealsContainer}>
              <h1>Meals</h1>
              <div className={styles.mealsList}>
                {meals.map((meal, index) => (
                  <div key={index} className={styles.mealCard}>
                    <img src={meal.image} alt={meal.name} className={styles.mealImage} />
                    <h2 className={styles.mealName}>{meal.name}</h2>
                    <ul className={styles.mealDescription}>
                      {JSON.parse(meal.description).map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.mapContainer}>
              <h1>Location</h1>
              <MapContainer center={userPosition || position} zoom={13} className={styles.map}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={userPosition || position}>
                  <Popup>
                    <span>{userPosition ? "Your Location" : hotelDetails.hotelName}</span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className={styles.optionright}>
          <div className={styles.pricecard}>
            <div className={styles.colorfuldiv}>
              <div className={styles.price}>
                ₹ {hotelDetails.pricePerNight} <span>(for {hotelDetails.totalRooms} rooms) Per Night + Taxes</span>
              </div>
              <div className={styles.input_group}>
                <div>
                  <label htmlFor="check-in">Check-in:</label>
                  <input type="date" id="check-in" value={checkInDate} onChange={handleCheckInChange} />
                </div>
                <div>
                  <label htmlFor="check-out">Check-out:</label>
                  <input type="date" id="check-out" value={checkOutDate} onChange={handleCheckOutChange} />
                </div>
              </div>
              <div className={styles.input_group}>
                 <div>Guests 2 Adults, 0 Chil...</div>
                  <div>No. of Rooms 4 Rooms</div>
                </div>
             </div>
              <div className={styles.select_dates}>
              Select dates for best price
             </div>
              <div className={styles.check_availability}>
                Check Availability
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default HotelOption;
