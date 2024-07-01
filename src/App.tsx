import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Expertise from "./Components/Expertise/Expertise";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import MoodWaves from "./Pages/MoodWaves";
import HawksEye from "./Pages/HawksEye";
import WseBanking from "./Pages/WseBanking";
import MadeByWills from "./Pages/MadeByWills";
import MockTrading from "./Pages/MockTrading";

function App() {
  return (
    <>
      <BrowserRouter basename="/willsEdgarPortfolio/">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/MoodWaves" element={<MoodWaves />} />
          <Route path="/HawksEye" element={<HawksEye />} />
          <Route path="/WseBanking" element={<WseBanking />} />
          <Route path="/MadeByWills" element={<MadeByWills />} />
          <Route path="/MockTrading" element={<MockTrading />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
