import styles from "./Partner.module.css"

import img2 from "../assets/img2.png"
import logo from "../assets/logo.png"

function Partner(){

    return <>
    
    <div className={styles.partnerheader}>
      
 <div className={styles.partnerheadertext}>
 <h1>A committed partner since 2015</h1>
 <p>StayVista has been curating stay experiences like a seasoned maestro, earning undeniable credibility in the holiday rental industry. With a treasure trove of 550+ villas worth a collective value of Rs.2000 Cr.</p>
 <div className={styles.partnercount}>
 <div className={styles.partnercount1}>
    <h1>4.6</h1>
    <p>Guest ratings</p>
 </div>
 <div className={styles.partnercount2}>
 <h1>5L+</h1>
 <p>Happy Guest</p>
 </div>
 <div className={styles.partnercount3}>
    <img src={(logo)} alt="" />
    <p>In Collabaration with Marriott Bonvoy</p>
 </div>

 </div>
</div>
<div className={styles.partnerheaderpic}>
 <img src={(img2)} alt=""  />
</div>

       

    </div>
    
    </>
}

export default Partner