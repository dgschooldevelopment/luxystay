import styles from './InputField.module.css'
const InputField =()=>{
    return <div className={styles.inputField}>
    <input type="text" placeholder='Where to ?' />
    <input type="date" placeholder='Select Date' />
    <input type="date" name="" id="" placeholder='select Date' />
    <input type="text" value={"2 Guest , 1+ Rooms"} readOnly/>
   <div className={styles.searchButton}>
    <h5>SEARCH</h5>
   </div>
  </div>
}
export default InputField;