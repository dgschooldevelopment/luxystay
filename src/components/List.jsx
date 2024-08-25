import styles from "./List.module.css"
import img1 from "../assets/img1.png"
function List(){
    return <>
    
    <div className={styles.propertyheader} style={{backgroundImage:`url(${img1})`}}>
        <div className={styles.propertyheadertext}>
            <h1>
            Maximise the Success of Your
           Holiday Home with StayVista:
           A Partnership of Trust
            </h1>
        </div>
        <div className={styles.propertyheaderform}>
            <h2>Tell us about your house</h2>
            <div className={styles.form}>
                <input type="text" placeholder="Firstname*"/>
                <input type="text" placeholder="Lastname*"/>
            </div>
            <div className={styles.form1}>
            <input type="text" placeholder="Email id*"/>
           
            <select>
                <option>+91</option>
                <option>+92</option>
                <option>+234</option>
                <option>+501</option>
                <option>+229</option>
            </select>
            <input type="text" placeholder="Mobile Phone" />
            
            </div>
            <div className={styles.form}>
            <input type="text" placeholder="Yours property location"/>
            <input type="text" placeholder="What type of property is it"/>
            </div>
            <div className={styles.form}>
            <input type="text" placeholder="How many rooms"/>
            <input type="text" placeholder="Where did you hear about us"/>
            </div>
            <div className={styles.form2}>
            <input type="text" placeholder="Photos / Website link if any"/>
            </div>
            <div className={styles.form3}>
            <input type="text" placeholder="Describe your property"/>
            </div>
        <button>Send a request</button>
        </div>

    </div>
    
    </>
}

export default List