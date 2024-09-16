import styles from "./Luxurybody.module.css";
import Rightcard from "./Rightcard";
import Righttop from "./Righttop";
import Leftbody from "./Leftbody";
let Luxurybody = () => {

return <>

<div className={styles.body}>

<div className={styles.leftbody} style={{position:"fixed", overflow:"auto",backgroundColor:"white"}}>
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