import styles from "./Faq.module.css"
import arrow from "../assets/arrow.svg"

function Faq(){
    let faqpass = [
        {
            head:"1.What are the steps to partner with StayVista?"
        },
        {
            head:"2.How does StayVista market my home?"
        },
        {
            head:"3.Can I reserve my villa for a few days?"
        },
        {
            head:"4.How can I learn more about StayVista’s end-to-end property management services?"
        },
        {
            head:"5.Which platforms do you list your villas?"
        },
    ] 
    return <>
    
    <div className={styles.faq}>
    <div className={styles.faqhead}>
        <h1>FAQ's</h1>
        <input type="text" placeholder="Search your question"/>
    </div>
    <div className={styles.faqque}>
        {faqpass.map((item)=>(

       
        <div className={styles.questions}>

            <h2>{item.head}</h2>
            <img src={(arrow)} alt="" />
        </div>
         ))}
    </div>
    <a>View All</a>
    </div>
    
    </>
}

export default Faq