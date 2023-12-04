import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import logo from './assets/solarSystemLogo.png';

function App() {
  return (
    <div className="App">
      <Header image={ logo } />
      <SolarSystem />
      <Missions />
    </div>
  );
}

export default App;
