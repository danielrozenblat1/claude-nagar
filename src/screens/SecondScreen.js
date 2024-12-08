import Card from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import wedding from "../Icons/wired-outline-653-marriage-hover-pinch (2).json"
import skin from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (5).json"
import chat from "../Icons/wired-outline-202-chat-hover-oscillate.json"
const SecondScreen=()=>{


    return <>
    <div className={styles.title}>מזל טוב! היום הגדול שלך מתקרב</div>
    <div className={styles.description}>היום שדמיינת אותו מאז שאת ילדה ותכננת איך כל דבר ייראה, מי הולך לשבת באיזה מקום והכי חשוב - <strong>איך את עומדת להראות</strong> עומד להגיע ואני בטוח שאת רוצה לראות איך הכל קורה</div>
    <div className={styles.title}>אז ישר ולעניין</div>
    <div className={styles.description}>מעבר ללהוציא אותך הכי מושלמת שיש אני תמיד שם דגש על</div>
    {/* <div className={styles.title}></div> */}
    <div className={styles.row}>
    <Card text="לעזור לך להכין את העור לאיפור"  icon={skin}/>
    <Card text="להיות זמין לכל שאלה וחשש הכי קטן שעולה לך"  icon={chat}/>
    <Card text="להקליל את האווירה ביום הגדול"  icon={wedding}/>
    </div>
    </>
}
export default SecondScreen