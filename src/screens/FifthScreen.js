import Brides from "../components/recommends/Brides"


import styles from "./FifthScreen.module.css"

import Button from "../components/button/Button"
import Recommendations from "../components/recommends/Recommends"
const FifthScreen=()=>{


return <>
    <div className={styles.title} id="ערב">יש לך ערב מיוחד בקרוב?</div>
    <div className={styles.description}>
            אני מבין כמה חשוב לך להרגיש הכי יפה באירוע ואני כאן להבטיח לך את המראה המושלם שחלמת עליו
        </div>
    <Recommendations title="חלק מהבנות שעברו דרכי לפני האירוע שלהן.."/>
        <Button text="תלחצי כאן כדי לשריין איתי תאריך" message="היי קלוד, הגעתי מהדף נחיתה , אשמח לשמוע עוד לגבי איפור ערב"/>

    
</>


}
export default FifthScreen