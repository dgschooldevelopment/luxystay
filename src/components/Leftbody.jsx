

// import React, { useState } from 'react';
// import { Slider } from '@mui/material'; // Import MUI Slider
// import styles from "./Leftbody.module.css";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { NavLink } from "react-router-dom";

// const Leftbody = ({ 
//     onPriceRangeChange, 
//     onSortOrderChange, 
//     onRoomCountChange,
//     onPriceFilterChange, 
//     onAmenitiesChange  
// }) => {
//     // Define the minimum and maximum price limits
//     const minPrice = 1000;
//     const maxPrice = 7000; // Adjusted to match your initial range

//     // State Hooks
//     const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [priceFilter, setPriceFilter] = useState(''); 
//     const [roomCount, setRoomCount] = useState(1); 
//     const [amenities, setAmenities] = useState({
//         marriott: false,
//         pool: false,
//         wifi: false,
//         petFriendly: false,
//         bestRated: false,
//     });

//     // Handler for price range change using MUI Slider
//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     // Handler for sort order change
//     const handleSortChange = (order) => {
//         setSortOrder(order);
//         onSortOrderChange(order);
//     };

//     // Handler for price filter change (radio buttons)
//     const handlePriceFilterChange = (filter) => {
//         setPriceFilter(filter);
//         onPriceFilterChange(filter);
//     };

//     // Handler to apply all filters
//     const handleApplyFilters = () => {
//         onPriceRangeChange(priceRange);
//         onSortOrderChange(sortOrder);
//         onRoomCountChange(roomCount);
//         onPriceFilterChange(priceFilter);
//         onAmenitiesChange(amenities);
//     };

//     // Handlers to increment and decrement room count
//     const handleRoomIncrement = () => {
//         const newCount = roomCount + 1;
//         setRoomCount(newCount);
//         onRoomCountChange(newCount);
//     };

//     const handleRoomDecrement = () => {
//         const newCount = Math.max(1, roomCount - 1);
//         setRoomCount(newCount);
//         onRoomCountChange(newCount);
//     };

//     // Handler for amenity checkbox changes
//     const handleAmenityChange = (amenity) => {
//         setAmenities(prev => {
//             const newAmenities = { ...prev, [amenity]: !prev[amenity] };
//             onAmenitiesChange(newAmenities);
//             return newAmenities;
//         });
//     };

//     // Handler to clear all filters
//     const clearFilters = () => {
//         setPriceRange([minPrice, maxPrice]);
//         setSortOrder('asc');
//         setRoomCount(1);
//         setAmenities({
//             marriott: false,
//             pool: false,
//             wifi: false,
//             petFriendly: false,
//             bestRated: false,
//         });
//         setPriceFilter('');

//         // Notify parent components to reset filters
//         onPriceRangeChange([minPrice, maxPrice]);
//         onSortOrderChange('asc');
//         onRoomCountChange(1);
//         onPriceFilterChange('');
//         onAmenitiesChange({
//             marriott: false,
//             pool: false,
//             wifi: false,
//             petFriendly: false,
//             bestRated: false,
//         });
//     };

//     return (
//         <>
//             {/* Breadcrumb Navigation */}
//             <div className={styles.leftup}>
//                 <NavLink to="/">Home</NavLink>
//                 <MdKeyboardArrowRight className={styles.icon} />
//                 <p>Villas in Luxury Collection</p>
//             </div>

//             {/* Filter Section */}
//             <div className={styles.leftlow}>
//                 {/* Price Range Slider */}
//                 <div className={styles.prices}>
//                     <h5>Price Range</h5>
//                     <div className={styles.slideprize}>
//                         <Slider
//                             value={priceRange}
//                             onChange={handlePriceChange}
//                             valueLabelDisplay="auto" // Show labels
//                             min={minPrice}
//                             max={maxPrice}
//                             step={100} // Adjust step as needed
//                             disableSwap
//                             sx={{
//                                 color: 'black',
//                                 height: 4,
//                                 '& .MuiSlider-thumb': {
//                                     width: 16,
//                                     height: 16,
//                                     backgroundColor: '#fff',
//                                     border: '2px solid currentColor',
//                                     '&:hover': {
//                                         boxShadow: '0 0 0 8px rgba(0,0,0,0.16)',
//                                     },
//                                 },
//                                 '& .MuiSlider-rail': {
//                                     color: '#5a50508f',
//                                 },
//                                 '& .MuiSlider-track': {
//                                     color: 'black',
//                                 },
//                             }}
//                         />
//                     </div>
//                     <div className={styles.leftprize}>
//                         <p>₹{priceRange[0]}</p>
//                     </div>
//                     <div className={styles.rightprize}>
//                         <p>₹{priceRange[1]}</p>
//                     </div>
//                     <div className={styles.leftprize}></div>
//            <div className={styles.rightprize}></div>
//             <div className={styles.rate}>
          
//                         <button onClick={() => handlePriceChange([priceRange[0], priceRange[1]])}>
//                             {`₹${priceRange[0]}`}
//                         </button>
//                         <button onClick={() => handlePriceChange([priceRange[1]])}>
//                             {`₹${priceRange[1]}`}
//                         </button>
                 
//            </div>
//                     <button className={styles.btnn} onClick={handleApplyFilters}>
//                         Apply
//                     </button>
//                 </div>

//                 {/* Rooms Selection */}
//                 <div className={styles.rooms}>
//                     <h5>Rooms</h5>
//                     <div className={styles.numbers}>
//                         <div className={styles.left}>
//                             <p>No. of Rooms</p>
//                         </div>
//                         <div className={styles.right}>
//                             <p className={styles.bt} onClick={handleRoomDecrement}>-</p>
//                             <p className={styles.bt}>{roomCount}</p>
//                             <p className={styles.bt} onClick={handleRoomIncrement}>+</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={styles.filters}>
//                     <h5>Top Filters</h5>
//                     <p>
//                         <input type="checkbox" checked={amenities.marriott} onChange={() => handleAmenityChange('marriott')} />
//                         Marriott Bonvoy
//                     </p>
//                     <p>
//                         <input type="checkbox" checked={amenities.pool} onChange={() => handleAmenityChange('pool')} />
//                         Pool / Jacuzzi
//                     </p>
//                     <p>
//                         <input type="checkbox" checked={amenities.wifi} onChange={() => handleAmenityChange('wifi')} />
//                         High Speed WiFi
//                     </p>
//                     <p>
//                         <input type="checkbox" checked={amenities.petFriendly} onChange={() => handleAmenityChange('petFriendly')} />
//                         Pet Friendly
//                     </p>
//                     <p>
//                         <input type="checkbox" checked={amenities.bestRated} onChange={() => handleAmenityChange('bestRated')} />
//                         Best Rated
//                     </p>
//                     <p className={styles.see}>See More</p>
//                 </div>

//                 <div className={styles.nightprice}>
//                     <h5>Price Per Night</h5>
//                     <p>
//                         <input 
//                             type="radio" 
//                             name="price" 
//                             checked={priceFilter === 'under1000'}
//                             onChange={() => handlePriceFilterChange('under1000')} 
//                         />
//                         Under ₹1000
//                     </p>
//                     <p>
//                         <input 
//                             type="radio" 
//                             name="price" 
//                             checked={priceFilter === '1000-2000'}
//                             onChange={() => handlePriceFilterChange('1000-2000')} 
//                         />
//                         ₹1000 - ₹2000
//                     </p>
//                     <p>
//                         <input 
//                             type="radio" 
//                             name="price" 
//                             checked={priceFilter === '2000-3500'}
//                             onChange={() => handlePriceFilterChange('2000-3500')} 
//                         />
//                         ₹2000 - ₹3500
//                     </p>
//                     <p>
//                         <input 
//                             type="radio" 
//                             name="price" 
//                             checked={priceFilter === '3500-5000'}
//                             onChange={() => handlePriceFilterChange('3500-5000')} 
//                         />
//                         ₹3500 - ₹5000
//                     </p>
//                     <p>
//                         <input 
//                             type="radio" 
//                             name="price" 
//                             checked={priceFilter === 'more5000'}
//                             onChange={() => handlePriceFilterChange('more5000')} 
//                         />
//                         More Than ₹5000
//                     </p>
//                 </div>

//                 <div className={styles.rightlow}>
//                     <div className={styles.lowupper}>
//                         <h5>Selected Filters</h5>
//                         <p onClick={clearFilters}>Clear All</p>
//                     </div>
//                     <button className={styles.results}>All Results</button>
//                 </div>
//             </div>
//         </>
//     );
// };


// export default Leftbody;
// Leftbody.js

import React, { useState } from 'react';
import { Slider } from '@mui/material'; // Import MUI Slider
import styles from "./Leftbody.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Leftbody = ({ 
    onPriceRangeChange, 
    onSortOrderChange, 
    onRoomCountChange,
    onPriceFilterChange, 
    onAmenitiesChange  
}) => {
    // Define the minimum and maximum price limits
    const minPrice = 1000;
    const maxPrice = 7000; // Adjusted to match your initial range

    // State Hooks
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [priceFilter, setPriceFilter] = useState(''); 
    const [roomCount, setRoomCount] = useState(1); 
    const [amenities, setAmenities] = useState({
        marriott: false,
        pool: false,
        wifi: false,
        petFriendly: false,
        bestRated: false,
    });

    // Handler for price range change using MUI Slider
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    // Handler for sort order change
    const handleSortChange = (order) => {
        setSortOrder(order);
        onSortOrderChange(order);
    };

    // Handler for price filter change (radio buttons)
    const handlePriceFilterChange = (filter) => {
        setPriceFilter(filter);
        onPriceFilterChange(filter);
    };

    // Handler to apply all filters
    const handleApplyFilters = () => {
        onPriceRangeChange(priceRange);
        onSortOrderChange(sortOrder);
        onRoomCountChange(roomCount);
        onPriceFilterChange(priceFilter);
        onAmenitiesChange(amenities);
    };

    // Handlers to increment and decrement room count
    const handleRoomIncrement = () => {
        const newCount = roomCount + 1;
        setRoomCount(newCount);
        onRoomCountChange(newCount);
    };

    const handleRoomDecrement = () => {
        const newCount = Math.max(1, roomCount - 1);
        setRoomCount(newCount);
        onRoomCountChange(newCount);
    };

    // Handler for amenity checkbox changes
    const handleAmenityChange = (amenity) => {
        setAmenities(prev => {
            const newAmenities = { ...prev, [amenity]: !prev[amenity] };
            onAmenitiesChange(newAmenities);
            return newAmenities;
        });
    };

    // Handler to clear all filters
    const clearFilters = () => {
        setPriceRange([minPrice, maxPrice]);
        setSortOrder('asc');
        setRoomCount(1);
        setAmenities({
            marriott: false,
            pool: false,
            wifi: false,
            petFriendly: false,
            bestRated: false,
        });
        setPriceFilter('');

        // Notify parent components to reset filters
        onPriceRangeChange([minPrice, maxPrice]);
        onSortOrderChange('asc');
        onRoomCountChange(1);
        onPriceFilterChange('');
        onAmenitiesChange({
            marriott: false,
            pool: false,
            wifi: false,
            petFriendly: false,
            bestRated: false,
        });
    };

    return (
        <>
            {/* Breadcrumb Navigation */}
            <div className={styles.leftup}>
                <NavLink to="/">Home</NavLink>
                <MdKeyboardArrowRight className={styles.icon} />
                <p>Villas in Luxury Collection</p>
            </div>

            {/* Filter Section */}
            <div className={styles.leftlow}>
                {/* Price Range Slider */}
                <div className={styles.prices}>
                    <h5>Price Range</h5>
                    <div className={styles.slideprize}>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto" // Show labels
                            min={minPrice}
                            max={maxPrice}
                            step={100} // Adjust step as needed
                            disableSwap
                            sx={{
                                color: 'black',
                                height: 4,
                                '& .MuiSlider-thumb': {
                                    width: 16,
                                    height: 16,
                                    backgroundColor: '#fff',
                                    border: '2px solid currentColor',
                                    '&:hover': {
                                        boxShadow: '0 0 0 8px rgba(0,0,0,0.16)',
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    color: '#5a50508f',
                                },
                                '& .MuiSlider-track': {
                                    color: 'black',
                                },
                            }}
                        />
                    </div>
                    <div className={styles.leftprize}>
                        <p>₹{priceRange[0]}</p>
                    </div>
                    <div className={styles.rightprize}>
                        <p>₹{priceRange[1]}</p>
                    </div>
                    <div className={styles.rate}>
                        <button onClick={() => handlePriceChange(null, [priceRange[0], priceRange[1]])}>
                            {`₹${priceRange[0]}`}
                        </button>
                        <button onClick={() => handlePriceChange(null, [priceRange[1], priceRange[1]])}>
                            {`₹${priceRange[1]}`}
                        </button>
                    </div>
                    <button className={styles.btnn} onClick={handleApplyFilters}>
                        Apply
                    </button>
                </div>

                {/* Rooms Selection */}
                <div className={styles.rooms}>
                    <h5>Rooms</h5>
                    <div className={styles.numbers}>
                        <div className={styles.left}>
                            <p>No. of Rooms</p>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.bt} onClick={handleRoomDecrement}>-</p>
                            <p className={styles.bt}>{roomCount}</p>
                            <p className={styles.bt} onClick={handleRoomIncrement}>+</p>
                        </div>
                    </div>
                </div>

                {/* Top Filters */}
                <div className={styles.filters}>
                    <h5>Top Filters</h5>
                    <p>
                        <input 
                            type="checkbox" 
                            checked={amenities.marriott} 
                            onChange={() => handleAmenityChange('marriott')} 
                        />
                        Marriott Bonvoy
                    </p>
                    <p>
                        <input 
                            type="checkbox" 
                            checked={amenities.pool} 
                            onChange={() => handleAmenityChange('pool')} 
                        />
                        Pool / Jacuzzi
                    </p>
                    <p>
                        <input 
                            type="checkbox" 
                            checked={amenities.wifi} 
                            onChange={() => handleAmenityChange('wifi')} 
                        />
                        High Speed WiFi
                    </p>
                    <p>
                        <input 
                            type="checkbox" 
                            checked={amenities.petFriendly} 
                            onChange={() => handleAmenityChange('petFriendly')} 
                        />
                        Pet Friendly
                    </p>
                    <p>
                        <input 
                            type="checkbox" 
                            checked={amenities.bestRated} 
                            onChange={() => handleAmenityChange('bestRated')} 
                        />
                        Best Rated
                    </p>
                    <p className={styles.see}>See More</p>
                </div>

                {/* Price Per Night */}
                <div className={styles.nightprice}>
                    <h5>Price Per Night</h5>
                    <p>
                        <input 
                            type="radio" 
                            name="price" 
                            checked={priceFilter === 'under1000'}
                            onChange={() => handlePriceFilterChange('under1000')} 
                        />
                        Under ₹1000
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            name="price" 
                            checked={priceFilter === '1000-2000'}
                            onChange={() => handlePriceFilterChange('1000-2000')} 
                        />
                        ₹1000 - ₹2000
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            name="price" 
                            checked={priceFilter === '2000-3500'}
                            onChange={() => handlePriceFilterChange('2000-3500')} 
                        />
                        ₹2000 - ₹3500
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            name="price" 
                            checked={priceFilter === '3500-5000'}
                            onChange={() => handlePriceFilterChange('3500-5000')} 
                        />
                        ₹3500 - ₹5000
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            name="price" 
                            checked={priceFilter === 'more5000'}
                            onChange={() => handlePriceFilterChange('more5000')} 
                        />
                        More Than ₹5000
                    </p>
                </div>

                {/* Selected Filters */}
                <div className={styles.rightlow}>
                    <div className={styles.lowupper}>
                        <h5>Selected Filters</h5>
                        <p onClick={clearFilters}>Clear All</p>
                    </div>
                    <button className={styles.results}>All Results</button>
                </div>
            </div>
        </>
   ) };


export default Leftbody;
