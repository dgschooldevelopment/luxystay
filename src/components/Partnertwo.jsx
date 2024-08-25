import styles from "./Partnertwo.module.css"

import img4 from "../assets/img4.png"

function Partnertwo(){
    let pass=[
{
    header:"Perfect balance of low-maintenance and high revenue",
    para:"Achieve an average growth of 40% by unlocking your property’s true potential via design enhancements, dynamic pricing, a dedicated sales manager, and an on-ground experience team for round-the-clock support",
    image:img4,
},



    ]
    return <>
    
    <div className={styles.partnerheader}>
        {pass.map((item)=> (
            <>
 <div className={styles.partnerheadertext}>
 <h1>{item.header}</h1>
 <p>{item.para}</p>
</div>
<div className={styles.partnerheaderpic}>
 <img src={item.image} alt=""  />
</div>
</>
        ))};
       

    </div>
    
    </>
}

export default Partnertwo