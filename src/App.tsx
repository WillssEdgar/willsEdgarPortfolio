import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Expertise from "./Components/Expertise/Expertise";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Expertise />
      <Footer />
    </div>
  );
}

export default App;
