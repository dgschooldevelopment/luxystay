import React, { useState } from 'react';
import styles from "./Luxurybody.module.css";
import Rightcard from "./Rightcard";
import Righttop from "./Righttop";
import Leftbody from "./Leftbody";

const Luxurybody = () => {
    const [priceRange, setPriceRange] = useState([1000, 5000]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [roomCount, setRoomCount] = useState(1);
    const [priceFilter, setPriceFilter] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState({});

    const handlePriceRangeChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
    };

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    const handleRoomCountChange = (newRoomCount) => {
        setRoomCount(newRoomCount);
    };

    const handleApplyFilters = () => {
        // Logic to apply filters and potentially fetch new data can go here
        console.log('Applying filters:', { priceRange, sortOrder, roomCount, priceFilter, selectedAmenities });
    };

    return (
        <div className={styles.body}>
            <div className={styles.leftbody} style={{ position: "fixed", overflow: "hidden", backgroundColor: "white" }}>
                <Leftbody
                    onPriceRangeChange={handlePriceRangeChange}
                    onSortOrderChange={handleSortOrderChange}
                    onRoomCountChange={handleRoomCountChange}
                    onPriceFilterChange={setPriceFilter}
                    onAmenitiesChange={setSelectedAmenities}
                    onApplyFilters={handleApplyFilters} // Pass the apply function
                />
            </div>
            <div className={styles.rightbody}>
                <Righttop
                    onSortOrderChange={handleSortOrderChange}
                />
                <Rightcard
                    sortOrder={sortOrder}
                    priceRange={priceRange}
                    roomCount={roomCount}
                    priceFilter={priceFilter}
                    selectedAmenities={selectedAmenities}
                />
            </div>
        </div>
    );
};

export default Luxurybody;
