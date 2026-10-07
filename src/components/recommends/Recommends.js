import React from 'react';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/עמנואל נגר עבודות 1.png";
import result2 from "../../images/עמנואל נגר עבודות 2.png";
import result3 from "../../images/עמנואל נגר עבודות 3.png";
import result4 from "../../images/עמנואל נגר עבודות 4.png";
import result5 from "../../images/עמנואל נגר עבודות 5.png";
import result6 from "../../images/עמנואל נגר עבודות 6.png";
import result7 from "../../images/עמנואל נגר עבודות 7.png";
import result8 from "../../images/עמנואל נגר עבודות 8.png";
import result9 from "../../images/עמנואל נגר עבודות 9.png";
import result10 from "../../images/עמנואל נגר עבודות 10.png";
import result11 from "../../images/עמנואל נגר עבודות 11.png";
import result12 from "../../images/עמנואל נגר עבודות 12.png";
import result13 from "../../images/עמנואל נגר עבודות 13.png";
import result14 from "../../images/עמנואל נגר עבודות 14.png";
import result15 from "../../images/עמנואל נגר עבודות 15.png";
import result16 from "../../images/עמנואל נגר עבודות 16.png";
import result17 from "../../images/עמנואל נגר עבודות 17.png";
import result18 from "../../images/עמנואל נגר עבודות 18.png";
import result19 from "../../images/עמנואל נגר עבודות 19.png";
import result20 from "../../images/עמנואל נגר עבודות 20.jpg";
import result21 from "../../images/עמנואל נגר עבודות 21.jpg";
import result22 from "../../images/עמנואל נגר עבודות 22.jpg";
import result23 from "../../images/עמנואל נגר עבודות 23.jpg";
import result24 from "../../images/עמנואל נגר עבודות 24.jpg";
import result25 from "../../images/עמנואל נגר עבודות 25.jpg";
import result26 from "../../images/עמנואל נגר עבודות 26.jpg";
import result27 from "../../images/עמנואל נגר עבודות 27.jpg";
import result28 from "../../images/עמנואל נגר עבודות 28.jpg";
import result29 from "../../images/עמנואל נגר עבודות 29.jpg";
import result30 from "../../images/עמנואל נגר עבודות 30.jpg";
import result31 from "../../images/עמנואל נגר עבודות 31.jpg";
import result32 from "../../images/עמנואל נגר עבודות 32.jpg";

const Recommendations = (props) => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, result12, result13, result14, result15, result16, result17, result18, result19,
    result20, result21, result22, result23, result24, result25, result26, result27, result28,
    result29, result30, result31, result32
  ];

  return (
    <>
      <div className={styles.title} id="כלה לעתיד">{props.title}</div>
      <div className={styles.explain}>
        מקבץ בנות שעברו דרכי
      </div>
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
    </>
  );
};

export default Recommendations;