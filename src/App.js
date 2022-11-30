
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Characters from './views/Characters';
import Vehicles from './views/Vehicles';
import Planets from './views/Planets';
import SingleCharacter from './views/SingleCharacter';
import SingleVehicle from './views/SingleVehicle';
import SinglePlanet from './views/SinglePlanet';
import Menu from './views/Menu';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Menu />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/characters/:id/details" element={<SingleCharacter />} />
        <Route path="/vehicles/:id/details" element={<SingleVehicle />} />
        <Route path="/planets/:id/details" element={<SinglePlanet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
