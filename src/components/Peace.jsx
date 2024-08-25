import styles from "./Peace.module.css"
import peaceimg from "../assets/peaceimg.png"
import peacei1 from "../assets/peace1.svg"
import peacei2 from "../assets/peace2.svg"
import peacei3 from "../assets/peace3.svg"
import peacei4 from "../assets/peace4.svg"
import peacei5 from "../assets/peace5.svg"
import peacei6 from "../assets/peace6.svg"

function Peace(){
    let peacepassone = [
        {
            image1:peacei1,
            para1:" Hassle-free onboarding of all your property units",
        },
        {
            image1:peacei2,
            para1:" Seamless end-to-end management & on-ground expertise",
        },
        {
            image1:peacei3,
            para1:" Training and empowering staff for hospitality excellence",
        },
  
    ]
    let peacepasstwo = [
        {
            image2:peacei4,
            para2:"Expert guidance on how to build a guest",
        },
        {
            image2:peacei5,
            para2:" Maximise sales and amplify customised marketing initiatives",
        },
        {
            image2:peacei6,
            para2:" Curate F&B services and organise celebratory experiences",
        },
  
    ]
    return <>
    <div className={styles.peace}>
    <div className={styles.peacehead}>
    <h1>Peace of mind</h1>
    </div>
    <div className={styles.peacepic} style={{backgroundImage:`url(${peaceimg})`}}></div>
    <div className={styles.peacecontent}>
    <div className={styles.peacecontentone}>
         {peacepassone.map((itemone)=>(

        
        <div className={styles.peaceobject}>
        <div className={styles.peaceobjectimg}>
            <img src={(itemone.image1)} alt="" />
        </div>
        <div className={styles.peaceobjecttxt}>
            <p>{itemone.para1}</p>
        </div>
        </div>
         ))}
         </div>
         <div className={styles.peacecontenttwo}>
         {peacepasstwo.map((itemtwo)=>(

        
        <div className={styles.peaceobject}>
        <div className={styles.peaceobjectimg}>
            <img src={(itemtwo.image2)} alt="" />
        </div>
        <div className={styles.peaceobjecttxt}>
            <p>{itemtwo.para2}</p>
        </div>
        </div>
         ))}
         </div>
    
    </div>
    </div>
    
    
    
    
    </>
}


export default Peace