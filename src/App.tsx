import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Expertise from "./Components/Expertise/Expertise";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import backgroundImage from "./assets/hoomeImage.png"; // Import the image

function App() {
  return (
    <div className="bg-slate-50 ">
      <Navigation />
      <div
        className="flex justify-center items-center py-96 h-2/5 mb-72"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100%",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Home />
      </div>
      <div className="mb-72 flex justify-center">
        <AboutMe />
      </div>
      <div className="mb-72">
        <Expertise />
      </div>
      <div className="mb-72 flex justify-center">
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
