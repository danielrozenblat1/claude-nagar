
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import Recommendations from './components/recommends/Recommends';
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
  <ByMe/>
  
  </>
}

export default App;
