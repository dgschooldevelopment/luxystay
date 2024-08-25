import styles from "./Awarde.module.css"
import award1 from "../assets/awarde1.svg"
import award2 from "../assets/awarde2.svg"
import award3 from "../assets/awarde3.svg"
import award4 from "../assets/awarde4.svg"
function Awarde(){
    let awardpass = [
        {
            image:award1,
            para:"Favourite Villa Rental Platform in India",
        },
        {
            image:award2,
            para:"Best Hospitality Brand",
        },
        {
            image:award3,
            para:"Kid Friendly Homestay of the Year",
        },
        {
            image:award4,
            para:"Best Hospitality Brand",
        },
    ]
    return <>
    <div className={styles.awarde}>
    <div className={styles.awardehead}>
        <h1>Awarded & Recognized by</h1>
    </div>
    <div className={styles.awardedata}>
        {awardpass.map((item)=>(

  
        <div className={styles.awardecontent}>
        <div className={styles.awardecontentimg} style={{backgroundImage:`url(${item.image})`}}></div>
        <div className={styles.awardecontenttxt}>
            <p>{item.para}</p>
        </div>
        </div>
              ))}
    </div>
    </div>
    
    
    </>
}

export default Awarde