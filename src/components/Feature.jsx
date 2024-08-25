import styles from "./Feature.module.css"
import feature1 from "../assets/feature1.svg"
import feature2 from "../assets/feature2.svg"
import feature3 from "../assets/feature3.svg"
import feature4 from "../assets/feature4.svg"
import feature5 from "../assets/feature5.svg"
import feature6 from "../assets/feature6.svg"
function Feature(){
    let featurepass = [
        {
            image:feature1,
        },
        {
            image:feature2,
        },
        {
            image:feature3,
        },
        {
            image:feature4,
        },
        
        {
            image:feature5,
        },
        {
            image:feature6,
        },
        
        
        
    ]
    return <>
    
    <div className={styles.feature}>
    <div className={styles.featurehead}>
        <h3>Featured in</h3>
    </div>
   

  
    <div className={styles.featureimg}>
    {featurepass.map((item)=>(
        <img src={(item.image)} alt="" />
    ))}
    </div>
  
    </div>
    
    </>
}

export default Feature