import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import LuxaxyGetways from './LuxaryGetways';

function App() {
  return (
    <div className={styles.maindiv}>

      <Outlet />
      <Footer />

    </div>
  );
}

export default App;