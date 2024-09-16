import Styles from "./Contact.module.css"
import { RxCross2 } from "react-icons/rx";
import React, { useState } from 'react';

export default function Contact () {

    const Option = [
        {
    city : 'Mumbai',
        },
        {
         city : 'pune',
      },
      {
        city : 'nashik',
     },
    ]

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedText, setSelectedText] = useState('city');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      setSelectedText(event.target.options[event.target.selectedIndex].text);
      hide(); // assuming hide is a function that needs to be called when the selection changes
    };

    function hide() {
      first.style.display = 'none';
    }
    return <>
      <div className={Styles.form}>
        <div className={Styles.formup}>
            <h4>What are you Looking for?</h4>
            <RxCross2  className={Styles.icon}/>
        </div>

    <div className={Styles.formlow}>
        <p>Please share your name and number so our team <br /> can connect with you</p>
        <input type="text" name="" id=""  placeholder="Full Name" className={Styles.inputt} required/>
        <input type="number" name="" id=""  placeholder="Phone Number" className={Styles.inputt} required/>
        
        <select name="" id="sel" className={Styles.inputt}  value={selectedValue} style={{width:"20.5vw"}} onChange={handleChange}  onClick={hide}>
        <option value="" id="first">{selectedText}</option>
        {Option.map((items) => (
 <option value="">{items.city}</option>
        ))}
    </select>
    
    </div>
  </div>
</>
}