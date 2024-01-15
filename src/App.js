import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Forecasts from './pages/Forecast';
import About from './pages/About';
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import AsburyPark from './locations/AsburyPark';
import OceanCity from './locations/OceanCity';
import ShipBottom from './locations/ShipBottom';
import LongBranch from './locations/LongBranch';
import PointPleasant from './locations/PointPleasant';
import Belmar from './locations/Belmar';
import SandyHook from './locations/SandyHook';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/search" exact element={<Search/>}/>
          <Route path="/forecasts" exact element={<Forecasts/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/asbury-park" exact element={<AsburyPark/>}/>
          <Route path="/ocean-city" exact element={<OceanCity/>}/>
          <Route path="/ship-bottom" exact element={<ShipBottom/>}/>
          <Route path="/long-branch" exact element={<LongBranch/>}/>
          <Route path="/point-pleasant" exact element={<PointPleasant/>}/>
          <Route path="/belmar" exact element={<Belmar/>}/>
          <Route path="/sandy-hook" exact element={<SandyHook/>}/>
        </Routes>
      </Router>
      <Footer />  
    </div>
  );
}

export default App;
