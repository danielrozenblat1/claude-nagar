import React from 'react';
import styles from './Me.module.css';
import claude from "../../images/קלוד נגר תמונה ראשית.png";

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={claude} alt="קלוד נגר" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>קלוד נגר</h1>
          <div className={styles.subtitle}>"אני מאוד מאמין שלכל אחת יש את היופי המיוחד שלה"</div>
          <p className={styles.description}>
  בעשור האחרון איפרתי וסירקתי מאות כלות ביום המיוחד שלהן כשהן מחוייכות,רגועות ונראות בגרסה הכי יפה שלהן
          </p>
          <p className={styles.description}>
            אני יודע כמה היום הזה יכול להיות מלחיץ וזו הסיבה שחשוב לי תמיד להביא אנרגיות חיוביות ואווירה כיפית שעוזרת להפיג את המתח. אני תמיד כאן בשבילך - לייעץ, להקשיב, להרגיע ולענות על כל שאלה. 
            העדיפות הראשונה שלי היא שתרגישי בנוח לשתף אותי בכל מה שעל ליבך, ושתדעי שיש לך כתובת 
            לכל התלבטות או חשש. יחד נמצא את הלוק המושלם שיבטא את היופי הטבעי והייחודי שלך.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;