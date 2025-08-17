import Brides from "../components/recommends/Brides"
import Recommendations from "../components/recommends/Recommends"
import Timeline from "../components/steps/Steps"
import VideoGallery from "../components/studioVideos/StudioVideos"
import styles from "./ThirdScreen.module.css"
import fun from "../videos/קלוד נגר סרטון אווירה.mp4"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
const videos=[{src:fun,alt:"קלוד נגר"}]

return <>
    <div className={styles.title}>קלוד, איך קורה הקסם?</div>
    <Timeline/>
    <div className={styles.title}>ואם נסכם..</div>
    <VideoGallery videos={videos}/>
    <div className={styles.description}>
          את הכלה שלי, ואני כאן בשבילך בכל רגע. חשוב לי שתרגישי בנוח לשתף אותי בכל מחשבה, חשש או רעיון שעולה לך. אני תמיד זמין עבורך - להרגיע, להקשיב, לייעץ ולהוביל אותך בביטחון דרך כל שלבי ההכנות. יחד נהפוך את החוויה הזו לקלה, נעימה ובעיקר - מהנה!
        </div>
        <Button text="אני רוצה לשמוע עוד"/>
        <Brides/>
    
</>


}
export default ThirdScreen