import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="mb-12 shadow-lg bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded  text-neutral-content">
      <div className="container mx-auto flex  ">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end space-x-4">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.prototypes = {
  title: PropTypes.string,
};

export default Navbar;
