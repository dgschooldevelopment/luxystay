// import { useNavigate } from "react-router-dom";
// import { useState} from "react";
// import styles from "./InputField.module.css";

// const InputField = () => {
//   const navigate = useNavigate();

//   const [searchValue, setSearchValue] = useState("");
//   const [date1, setDate1] = useState("");
//   const [date2, setDate2] = useState("");

//   const handleSearch = () => {
//     if (searchValue && date1 && date2) {
//       navigate("/luxary");
//       console.log("page is open")
//     }
//   };

  
//   return (
//     <div className={styles.inputField}>
//       <input
//         type="text"
//         placeholder="Where to?"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />
//       <input 
//         type="date" 
//         placeholder="Select Date" 
//         value={date1} 
//         onChange={(e) => setDate1(e.target.value)} 
//       />
//       <input 
//         type="date" 
//         name="" 
//         id="" 
//         placeholder="select Date" 
//         value={date2} 
//         onChange={(e) => setDate2(e.target.value)} 
//       />
//       {/* <input type="text" value={"2 Guest , 1+ Rooms"} readOnly/> */}
//       <div className={styles.searchButton}>
//         <h5 onClick={handleSearch}>Search</h5>
//       </div>
//     </div>
//   );
// };

// export default InputField;
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react"; // Added useRef
// import axios from "axios";
// import styles from "./InputField.module.css";

// const InputField = ({ selectedLocation, onLocationSelect }) => {
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState(selectedLocation || "");
//   const [suggestions, setSuggestions] = useState([]);
//   const [date1, setDate1] = useState("");
//   const [date2, setDate2] = useState("");
//   const [guestsAndRoom, setGuestsAndRoom] = useState("2 guests, 1 room"); // New state for guests and room

//   // States for guests and rooms
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [rooms, setRooms] = useState(1);
//   const [showGuestSelection, setShowGuestSelection] = useState(false);

//   // Ref for detecting clicks outside the guest selection dropdown
//   const guestDropdownRef = useRef(null);

//   // Update searchValue when selectedLocation changes
//   useEffect(() => {
//     setSearchValue(selectedLocation);
//   }, [selectedLocation]);

//   // Update guestsAndRoom string whenever guests or rooms change
//   useEffect(() => {
//     const totalGuests = adults + children + infants;
//     setGuestsAndRoom(
//       `${totalGuests} guest${totalGuests !== 1 ? "s" : ""}, ${rooms} room${rooms !== 1 ? "s" : ""}`
//     );
//   }, [adults, children, infants, rooms]);

//   // Close the guest selection dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         guestDropdownRef.current &&
//         !guestDropdownRef.current.contains(event.target)
//       ) {
//         setShowGuestSelection(false);
//       }
//     };

//     if (showGuestSelection) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showGuestSelection]);

//   // Function to fetch location suggestions from Nominatim
//   const fetchSuggestions = async (input) => {
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`
//       );
//       const results = response.data.map((place) => place.display_name);
//       setSuggestions(results);
//     } catch (error) {
//       console.error("Error fetching location suggestions:", error);
//     }
//   };

//   const handleSearch = () => {
//     if (searchValue && date1 && date2 && guestsAndRoom) {
//       navigate("/luxary");
//       console.log("Navigating to /luxary");
//       // Optionally, you can pass state or query parameters
//       // navigate("/luxary", { state: { searchValue, date1, date2, guestsAndRoom } });
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchValue(value);
//     if (value.length > 2) {
//       fetchSuggestions(value); // Fetch suggestions when input has 3 or more characters
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchValue(suggestion);
//     onLocationSelect(suggestion); // Call the passed function to update the location in HomePage
//     setSuggestions([]); // Clear suggestions after selection
//   };

//   // Helper functions to increment and decrement counts
//   const increment = (setter, value) => {
//     setter(value + 1);
//   };

//   const decrement = (setter, value, min = 0) => {
//     if (value > min) {
//       setter(value - 1);
//     }
//   };

//   return (
//     <div className={styles.inputField}>
//       {/* Location Input */}
//       <div className={styles.fieldContainer}>
//         <label className={styles.label}>Where to?</label>
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={searchValue}
//           onChange={handleInputChange}
//         />
//         {suggestions.length > 0 && (
//           <ul className={styles.suggestions}>
//             {suggestions.map((suggestion, index) => (
//               <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Check-in Date */}
//       <div className={styles.fieldContainer}>
//         <label className={styles.label}>Check-in</label>
//         <input
//           type="date"
//           value={date1}
//           placeholder="Select a date"
//           onChange={(e) => setDate1(e.target.value)}
//         />
//       </div>

//       {/* Check-out Date */}
//       <div className={styles.fieldContainer}>
//         <label className={styles.label}>Check-out</label>
//         <input
//           type="date"
//           value={date2}
//           onChange={(e) => setDate2(e.target.value)}
//         />
//       </div>

//       {/* Guests and Rooms Selection */}
//       <div className={styles.fieldContainer} ref={guestDropdownRef}>
//         <label htmlFor="guests" className={styles.label}>Guests & Rooms</label>
//         <input
//           id="guests"
//           type="text"
//           placeholder="Select guests and rooms"
//           value={guestsAndRoom}
//           readOnly
//           onClick={() => setShowGuestSelection(!showGuestSelection)}
//         />

//         {showGuestSelection && (
//           <div className={styles.guestRoomDropdown}>
//             <div className={styles.row}>
//               {/* Adults */}
//               <div className={styles.counterContainer}>
//                 <label>Adults</label>
//                 <div className={styles.counter}>
//                   <button
//                     className={styles.decrementButton}
//                     onClick={() => decrement(setAdults, adults, 1)}
//                     disabled={adults <= 1}
//                   >
//                     -
//                   </button>
//                   <span className={styles.count}>{adults}</span>
//                   <button
//                     className={styles.incrementButton}
//                     onClick={() => increment(setAdults, adults)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Children */}
//               <div className={styles.counterContainer}>
//                 <label>Children</label>
//                 <div className={styles.counter}>
//                   <button
//                     className={styles.decrementButton}
//                     onClick={() => decrement(setChildren, children)}
//                     disabled={children <= 0}
//                   >
//                     –
//                   </button>
//                   <span className={styles.count}>{children}</span>
//                   <button
//                     className={styles.incrementButton}
//                     onClick={() => increment(setChildren, children)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Infants */}
//               <div className={styles.counterContainer}>
//                 <label>Infants</label>
//                 <div className={styles.counter}>
//                   <button
//                     className={styles.decrementButton}
//                     onClick={() => decrement(setInfants, infants)}
//                     disabled={infants <= 0}
//                   >
//                     –
//                   </button>
//                   <span className={styles.count}>{infants}</span>
//                   <button
//                     className={styles.incrementButton}
//                     onClick={() => increment(setInfants, infants)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Rooms */}
//               <div className={styles.counterContainer}>
//                 <label>Rooms</label>
//                 <div className={styles.counter}>
//                   <button
//                     className={styles.decrementButton}
//                     onClick={() => decrement(setRooms, rooms, 1)}
//                     disabled={rooms <= 1}
//                   >
//                     -
//                   </button>
//                   <span className={styles.count}>{rooms}</span>
//                   <button
//                     className={styles.incrementButton}
//                     onClick={() => increment(setRooms, rooms)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Search Button */}
//       <div className={styles.searchButton}>
//         <button onClick={handleSearch}>SEARCH</button>
//       </div>
//     </div>
//   );
// };

// export default InputField;
// src/components/InputField.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Added useRef
import axios from "axios";
import styles from "./InputField.module.css";
import PropTypes from 'prop-types'; // Optional: for prop type checking

const InputField = ({ selectedLocation, onLocationSelect, className }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(selectedLocation || "");
  const [suggestions, setSuggestions] = useState([]);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [guestsAndRoom, setGuestsAndRoom] = useState("2 guests, 1 room");

  // States for guests and rooms
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestSelection, setShowGuestSelection] = useState(false);

  // Ref for detecting clicks outside the guest selection dropdown
  const guestDropdownRef = useRef(null);

  // Update searchValue when selectedLocation changes
  useEffect(() => {
    setSearchValue(selectedLocation);
  }, [selectedLocation]);

  // Update guestsAndRoom string whenever guests or rooms change
  useEffect(() => {
    const totalGuests = adults + children + infants;
    setGuestsAndRoom(
      `${totalGuests} guest${totalGuests !== 1 ? "s" : ""}, ${rooms} room${rooms !== 1 ? "s" : ""}`
    );
  }, [adults, children, infants, rooms]);

  // Close the guest selection dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target)
      ) {
        setShowGuestSelection(false);
      }
    };

    if (showGuestSelection) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestSelection]);

  // Function to fetch location suggestions from Nominatim
  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`
      );
      const results = response.data.map((place) => place.display_name);
      setSuggestions(results);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleSearch = () => {
    if (searchValue && date1 && date2 && guestsAndRoom) {
      navigate("/luxary");
      console.log("Navigating to /luxary");
      // Optionally, pass state or query parameters
      // navigate("/luxary", { state: { searchValue, date1, date2, guestsAndRoom } });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 2) {
      fetchSuggestions(value); // Fetch suggestions when input has 3 or more characters
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    onLocationSelect(suggestion); // Call the passed function to update the location in HomePage
    setSuggestions([]); // Clear suggestions after selection
  };

  // Helper functions to increment and decrement counts
  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value, min = 0) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  return (
    <div className={`${styles.inputField} ${className || ''}`}>
      {/* Location Input */}
      <div className={styles.fieldContainer}>
        <label className={styles.label}>Where to?</label>
        <input
          type="text"
          placeholder="Enter location"
          value={searchValue}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Check-in Date */}
      <div className={styles.fieldContainer}>
        <label className={styles.label}>Check-in</label>
        <input
          type="date"
          value={date1}
          placeholder="Select a date"
          onChange={(e) => setDate1(e.target.value)}
        />
      </div>

      {/* Check-out Date */}
      <div className={styles.fieldContainer}>
        <label className={styles.label}>Check-out</label>
        <input
          type="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>

      {/* Guests and Rooms Selection */}
      <div className={styles.fieldContainer} ref={guestDropdownRef}>
        <label htmlFor="guests" className={styles.label}>Guests & Rooms</label>
        <input
          id="guests"
          type="text"
          placeholder="Select guests and rooms"
          value={guestsAndRoom}
          readOnly
          onClick={() => setShowGuestSelection(!showGuestSelection)}
        />

        {showGuestSelection && (
          <div className={styles.guestRoomDropdown}>
            <div className={styles.row}>
              {/* Adults */}
              <div className={styles.counterContainer}>
                <label>Adults</label>
                <div className={styles.counter}>
                  <button
                    className={styles.decrementButton}
                    onClick={() => decrement(setAdults, adults, 1)}
                    disabled={adults <= 1}
                  >
                    -
                  </button>
                  <span className={styles.count}>{adults}</span>
                  <button
                    className={styles.incrementButton}
                    onClick={() => increment(setAdults, adults)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className={styles.counterContainer}>
                <label>Children</label>
                <div className={styles.counter}>
                  <button
                    className={styles.decrementButton}
                    onClick={() => decrement(setChildren, children)}
                    disabled={children <= 0}
                  >
                    –
                  </button>
                  <span className={styles.count}>{children}</span>
                  <button
                    className={styles.incrementButton}
                    onClick={() => increment(setChildren, children)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className={styles.counterContainer}>
                <label>Infants</label>
                <div className={styles.counter}>
                  <button
                    className={styles.decrementButton}
                    onClick={() => decrement(setInfants, infants)}
                    disabled={infants <= 0}
                  >
                    –
                  </button>
                  <span className={styles.count}>{infants}</span>
                  <button
                    className={styles.incrementButton}
                    onClick={() => increment(setInfants, infants)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Rooms */}
              <div className={styles.counterContainer}>
                <label>Rooms</label>
                <div className={styles.counter}>
                  <button
                    className={styles.decrementButton}
                    onClick={() => decrement(setRooms, rooms, 1)}
                    disabled={rooms <= 1}
                  >
                    -
                  </button>
                  <span className={styles.count}>{rooms}</span>
                  <button
                    className={styles.incrementButton}
                    onClick={() => increment(setRooms, rooms)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className={styles.searchButton}>
        <button onClick={handleSearch}>SEARCH</button>
      </div>
    </div>
  );
};

// Optional: Define PropTypes for better type checking
InputField.propTypes = {
  selectedLocation: PropTypes.string,
  onLocationSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default InputField;
