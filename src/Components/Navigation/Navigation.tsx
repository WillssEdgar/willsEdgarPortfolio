import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <header>
        <nav className="fixed top-0 left-0 w-full bg-gray-700 text-center z-50">
          <Link
            to="/"
            className="text-white font-mono font-bold inline-flex py-2 px-4 cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="/AboutMe"
            className="text-white font-mono font-bold inline-flex py-2 px-4 cursor-pointer"
          >
            About Me
          </Link>

          <Link
            to="/Expertise"
            className="text-white font-mono font-bold inline-flex py-2 px-4 cursor-pointer"
          >
            Expertise
          </Link>

          <Link
            to="/Projects"
            className="text-white font-mono font-bold inline-flex py-2 px-4 cursor-pointer"
          >
            Projects
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
