// import styles from "./HotelPage.module.css";
// import img1 from "../assets/img.jpg";
// function ImgInsert() {
//   return (
//     <>
//       <div className={styles.Allimg}>
//         <div className={styles.Allimgleft}>
//             <img src={img1} alt=""  height={490} width={800} style={{borderRadius:"10px"}}/>
//         </div>
//         <div className={styles.Allimgright}>
//         <img src={img1} alt=""  height={250} width={530} style={{borderRadius:"10px"}}/>
//         <img src={img1} alt=""  height={250} width={530} style={{borderRadius:"10px"}}/>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ImgInsert;
import React from "react";
import styles from "./HotelPage.module.css";

function ImgInsert({ images }) {
    return (
        <div className={styles.Allimg}>
            <div className={styles.Allimgleft}>
                <img src={images[0]} alt="" height={490} width={900} style={{ borderRadius: "10px" }} />
            </div>
            <div className={styles.Allimgright}>
                {images.slice(1).map((img, index) => (
                    <img key={index} src={img} alt="" height={243} width={530} style={{ borderRadius: "10px" }} />
                ))}
            </div>
        </div>
    );
}

export default ImgInsert;
