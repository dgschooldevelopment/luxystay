import styles from "./Partner1.module.css"

import img3 from "../assets/img3.png"

function Partnerone(){
    let pass=[
{    
    header:"Gain access to the largest network of verified guests",
    para:"StayVista offers the unparalleled advantage of exposing your property to a vast pool of 5L+ discerning travellers, 80% of whom directly book through our website.",
    image:img3,
},



    ]
    return <>
    
    <div className={styles.partnerheader}>
        {pass.map((item)=> (
            <>
            <div className={styles.partnerheaderpic}>
 <img src={item.image} alt=""  />
</div>
 <div className={styles.partnerheadertext}>
<h1>{item.header}</h1>
 <p>{item.para}</p>
</div>

</>
        ))};
       

    </div>
    
    </>
}

export default Partnerone