import "./Navigation.css";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <ScrollLink to="home" smooth={true} duration={500} offset={-350}>
            Home
          </ScrollLink>

          <ScrollLink to="aboutMe" smooth={true} duration={500} offset={-125}>
            About Me
          </ScrollLink>

          <ScrollLink to="expertise" smooth={true} duration={500}>
            Expertise
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
