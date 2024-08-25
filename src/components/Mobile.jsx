import styles from "./Mobile.module.css"
import appstore from "../assets/appstore.svg"
import playstore from "../assets/playstore.svg"
import mobile from "../assets/mobile.svg"

function Mobile(){
    return <>
    
    <div className={styles.mobile}>
    <div className={styles.mobileone}>
        <h1>Stay up to date with StayVista’s Homeowner App</h1>
        <p>
        With the StayVista’s easy-to-use homeowner mobile app, it's simpler than ever to access bookings and updates about your vacation home—right at your fingertips. Reserve your own vacation time, review upcoming bookings, check your real-time revenue performance, and so much more.
        </p>
        <div className={styles.mobileonelogo}>
            <img src={(appstore)} alt="" />
            <img src={(playstore)} alt="" />
        </div>
    </div>
    <div className={styles.mobiletwo} style={{backgroundImage:`url(${mobile})`}}></div>
    </div>
    
    
    
    </>
}

export default Mobile