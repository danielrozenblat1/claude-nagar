import React from 'react';
import styles from './Brides.module.css';

// Import your images
import result1 from "../../images/קלוד נגר המלצות 1.png";
import result2 from "../../images/קלוד נגר המלצות 2.png";
import result3 from "../../images/קלוד נגר המלצות 3.png";
import result4 from "../../images/קלוד נגר המלצות 4.png";
import result5 from "../../images/קלוד נגר המלצות 5.png";
import result6 from "../../images/קלוד נגר המלצות 6.png";
import result7 from "../../images/קלוד נגר המלצות 7.png";
import result8 from "../../images/קלוד נגר המלצות 8.png";
import result9 from "../../images/קלוד נגר המלצות 9.png";
import result10 from "../../images/קלוד נגר המלצות 10.png";
import result11 from "../../images/קלוד נגר המלצות 11.png";
import Button from '../button/Button';



const Brides = () => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, 
  ];

  return (
    <>
      <div className={styles.title}>קצת מהכלות שעברו דרכי</div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="קלוד, בוא נדבר!"/>
    </>
  );
};

export default Brides;