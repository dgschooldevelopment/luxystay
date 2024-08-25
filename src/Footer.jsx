import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const spot = [
    "Lonavala",
    "Goa",
    "Alibaug",
    "Karjat",
    "Igatpuri",
    "Mahabaleshwar",
    "Mumbai",
    "Kasauli",
    "Mussoorie",
    "Ooty",
  ];

  const TopCollection = [
    "Luxury Villas",
    "Trending This Season",
    "Festive Favourites Villas",
    "Heated-Pool Collection",
    "Pet-Friendly Villas",
    "Impeccable View Villas",
    "Corporate Offiste Villas",
    "Kid-Friendly Villas",
    "Getaway Collections",
    "Handpicked Villas",
  ];

  const about = [
    "Our Story",
    "Partner With Us",
    "Offers",
    "Corporate Offsites",
    "Events & Experiences",
    "FAQs",
    "Gift Card",
    "Blog",
    "Careers",
    "Covid Policy",
  ];

  const support = ["Contact Us", "Cancellation & Refund Policy"];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colmd3}>
            <h3>Top Locations</h3>
            <ul>
              {spot.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
            <a href="#" className={styles.more}>
              + 5 more
            </a>
          </div>
          <div className={styles.colmd3}>
            <h3>Top Collections</h3>
            <ul>
              {TopCollection.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
            <a href="#" className={styles.more}>
              + 3 more
            </a>
          </div>
          <div className={styles.colmd3}>
            <h3>About</h3>

            <ul>
              {about.map((m) => (
                <li>{m}</li>
              ))}
            </ul>
            <a href="#" className={styles.more}>
              + 2 more
            </a>
          </div>
          <div className={styles.colmd3}>
            <h3>Support</h3>
            <ul>
                {support.map((su)=>(
                    <li className={styles.anii}>{su}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.hided}>
        {spot.map((s) => (
                <p>{s}</p>
              ))}
        </div>
        <div className={styles.hided2}>
        {TopCollection.map((t) => (
                <p>{t}</p>
              ))}

        </div>
        <div className={styles.hided3}>
        {about.map((m) => (
                <p>{m}</p>
              ))}
        </div>
        <div className={styles.hided4}>
        {support.map((su)=>(
                    <p>{su}</p>
                ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
