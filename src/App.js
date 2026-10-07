
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import Recommendations from './components/recommends/Recommends';
import PrivacyPolicy from './privacy/Privacy';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
  <Recommendations title="לפני שנתחיל.."/>

  <SecondScreen/>
  <AboutMe/>
  <ThirdScreen/>

  <FifthScreen/>
  <ForthScreen/>
  <PrivacyPolicy 
  ownerName="עמנואל נגר" 

  phone="+972 54-321-6567" 
  domain="https://claudenagar.co.il/" 
/>
  <ByMe/>
  
  </>
}

export default App;
