import styles from "./Righttop.module.css"
import { IoIosArrowDown } from "react-icons/io";

let Righttop = () => {
    return <>
     <div className={styles.righttop}>
     <h4>Villas</h4>
     <button className={styles.btn}>sort by : <b>Most Loved </b><IoIosArrowDown />
     </button>
     </div>
    </>
}

export default Righttop;