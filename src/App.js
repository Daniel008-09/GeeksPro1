import TopLine from './components/Header/TopLine/TopLine' 
import SecondLine from './components/Header/SecondLine/SecondLine';
import './App.css';
import FirstSection from './components/Main/FirstSection/FirstSection';
import SecondSection from './components/Main/SecondSection/SecondSection';
import ThirdSection from './components/Main/ThirdSection/ThirdSection';
import ForSection from './components/Main/ForSection/ForSection';
import FiveSection from './components/Main/FiveSection/FiveSection';
import SixSection from './components/Main/SixSection/SixSection';
import FirstLine from './components/Footer/FirstLine/FirstLine';
import SecondLineF from './components/Footer/SecondLine/SecondLineF';
import ThirdLine from './components/Footer/ThirdLine/ThirdLine';


function App() {
  return (
    <div className="App">
      <TopLine />
      <SecondLine />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForSection />
      <FiveSection />
      <SixSection />
      <FirstLine />
      <SecondLineF />
      <ThirdLine />
    </div>
  );
}

export default App;
