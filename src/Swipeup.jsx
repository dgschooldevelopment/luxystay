// import React, { useState } from 'react';
// import styles from './Swipeup.module.css';
// import Swipelow from './Swipelow'; // Import Swipelow component

// const Swipeup = () => {
//   const [selectedLocation, setSelectedLocation] = useState('All'); // State for selected location

//   const handleLocationClick = (location) => {
//     setSelectedLocation(location); // Update location when a button is clicked
//   };

//   return (
//     <>
//       <div className={styles.up}>
//         <h3 className={styles.header}>Trending This Season</h3>
//         <div className={styles.low}>
//           <button className={styles.btn} onClick={() => handleLocationClick('All')}>All</button>
//           <button className={styles.btn} onClick={() => handleLocationClick('Lonavala')}>Lonavala</button>
//           <button className={styles.btn} onClick={() => handleLocationClick('Alibaug')}>Alibaug</button>
//           <button className={styles.btn} onClick={() => handleLocationClick('City of New York')}>City of New York</button>
//           <button className={styles.btn} onClick={() => handleLocationClick('Shimla')}>Shimla</button>
//           <button className={styles.btn} onClick={() => handleLocationClick('Manali')}>Manali</button>
//           <button className={styles.btn}>Explore More</button>
//         </div>
//       </div>
//       {/* Pass selected location to Swipelow component */}
//       <Swipelow selectedLocation={selectedLocation} />
//     </>
//   );
// };

// export default Swipeup;
import React, { useState } from 'react';
import styles from './Swipeup.module.css';
import Swipelow from './Swipelow'; // Import Swipelow component

const Swipeup = () => {
  const [selectedLocation, setSelectedLocation] = useState('All'); // State for selected location

  const handleLocationClick = (location) => {
    setSelectedLocation(location); // Update location when a button is clicked
  };

  return (
    <>
      <div className={styles.up}>
        <h3 className={styles.header}>Trending This Season</h3>
        <div className={styles.low}>
          <button 
            className={`${styles.btn} ${selectedLocation === 'All' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('All')}
          >
            All
          </button>
          <button 
            className={`${styles.btn} ${selectedLocation === 'Lonavala' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('Lonavala')}
          >
            Lonavala
          </button>
          <button 
            className={`${styles.btn} ${selectedLocation === 'Alibaug' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('Alibaug')}
          >
            Alibaug
          </button>
          <button 
            className={`${styles.btn} ${selectedLocation === 'City of New York' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('City of New York')}
          >
            City of New York
          </button>
          <button 
            className={`${styles.btn} ${selectedLocation === 'Shimla' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('Shimla')}
          >
            Shimla
          </button>
          <button 
            className={`${styles.btn} ${selectedLocation === 'Manali' ? styles.selected : ''}`} 
            onClick={() => handleLocationClick('Manali')}
          >
            Manali
          </button>
          <button className={styles.btn}>Explore More</button>
        </div>
      </div>
      {/* Pass selected location to Swipelow component */}
      <Swipelow selectedLocation={selectedLocation} />
    </>
  );
};

export default Swipeup;
