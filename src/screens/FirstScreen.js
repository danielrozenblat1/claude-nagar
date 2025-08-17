import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import styles from './FirstScreen.module.css';

import middleImage from "../images/קלוד נגר עבודות 2.png";
import rightImage from "../images/קלוד נגר עבודות 12.png"
import leftImage from "../images/קלוד נגר עבודות 2.png"
import GlassButton from '../components/ButtonScroll/ScrollButton';
import Loader from '../components/loader/Loader';
// import GradientLoader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>CLAUDE NAGAR</h1>
  
        <div className={styles.buttonContainer}>
        <GlassButton text="אני כלה לעתיד" targetId="כלה לעתיד"/>
        <GlassButton text="יש לי אירוע בקרוב (ערב)" targetId="ערב"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;