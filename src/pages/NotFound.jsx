import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg m-auto">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page not found!</p>
          <Link
            to="/"
            className="flex justify-center bg-purple-700 hover:bg-purple-500 text-white font-bold py-3 px-4 w-44 rounded m-auto"
          >
            <FaHome className="my-auto pr-1" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
