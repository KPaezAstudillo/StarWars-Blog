
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Characters from './views/Characters';
import Vehicles from './views/Vehicles';
import Planets from './views/Planets';
import singleCharacter from './views/singleCharacter';
import singleVehicle from './views/singleVehicle';
import singlePlanet from './views/singlePlanet';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/character/:id/details" element={<singleCharacter />} />
        <Route path="/vehicle/:id/details" element={<singleVehicle />} />
        <Route path="/planet/:id/details" element={<singlePlanet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
