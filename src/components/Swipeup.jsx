import styles from './Swipeup.module.css'

let Swipeup = () => {

 return <>
  <div className={styles.up}>
    <h3 className={styles.header}>Trending This Season</h3>
    <div className={styles.low}>

    <button className={styles.btn}>All</button>
    <button className={styles.btn}>Lonavala</button>
    <button className={styles.btn}>Alibaug</button>
    <button className={styles.btn}>Goa</button>
    <button className={styles.btn}>Shimla</button>
    <button className={styles.btn}>Manali</button>
    <button className={styles.btn}>Explore More</button>
    </div>
  </div>
 </>


}

export default Swipeup;