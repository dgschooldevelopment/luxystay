import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import LuxaxyGetways from './LuxaryGetways';
import Contact from './components/Contact';

function App() {
  return (
    <div className={styles.maindiv}>

      <Outlet />
     {/* <Contact className={styles.contact}></Contact> */}
      <Footer />

    </div>
  );
}

export default App;