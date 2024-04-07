import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  return (
    <div>
      <header>
        <nav className="fixed top-0 left-0 w-full bg-zinc-700 text-center z-50">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-350}
            className="text-white font-mono font-bold inline-flex py-2 px-4"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="aboutMe"
            smooth={true}
            duration={500}
            offset={-250}
            className="text-white font-mono font-bold inline-flex py-2 px-4"
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to="expertise"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white font-mono font-bold inline-flex py-2 px-4"
          >
            Expertise
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-white font-mono font-bold inline-flex py-2 px-4"
          >
            Projects
          </ScrollLink>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
