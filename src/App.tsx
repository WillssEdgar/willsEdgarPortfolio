// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Expertise from "./Components/Expertise/Expertise";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Navigation />
      <div className="grid grid-rows-5">
        <div className="homediv content-center">
          <Home />
        </div>
        <div className="aboutmediv d-flex align-items-center justify-content-center ">
          <AboutMe />
        </div>
        <div>
          <Expertise />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
