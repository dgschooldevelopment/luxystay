import { useNavigate } from "react-router-dom";
import { useState} from "react";
import styles from "./InputField.module.css";

const InputField = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const handleSearch = () => {
    if (searchValue && date1 && date2) {
      navigate("/luxary");
      console.log("page is open")
    }
  };

  return (
    <div className={styles.inputField}>
      <input
        type="text"
        placeholder="Where to?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input 
        type="date" 
        placeholder="Select Date" 
        value={date1} 
        onChange={(e) => setDate1(e.target.value)} 
      />
      <input 
        type="date" 
        name="" 
        id="" 
        placeholder="select Date" 
        value={date2} 
        onChange={(e) => setDate2(e.target.value)} 
      />
      {/* <input type="text" value={"2 Guest , 1+ Rooms"} readOnly/> */}
      <div className={styles.searchButton}>
        <h5 onClick={handleSearch}>Search</h5>
      </div>
    </div>
  );
};

export default InputField;