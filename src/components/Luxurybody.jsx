import styles from "./Luxurybody.module.css";
import Rightcard from "./Rightcard";
import Righttop from "./Righttop";
import Leftbody from "./Leftbody";
let Luxurybody = () => {

return <>

<div className={styles.body}>

<div className={styles.leftbody}>
<Leftbody></Leftbody>
</div>

<div className={styles.rightbody}>
    <Righttop></Righttop>
    <Rightcard></Rightcard>
</div>

</div>

</>

}


export default Luxurybody;