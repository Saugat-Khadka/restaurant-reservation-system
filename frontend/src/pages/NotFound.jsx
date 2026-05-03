import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="h-screen flex flex-col justify-center items-center bg-purple-50 px-6">
    <h1 className="text-6xl font-bold text-purple-700 mb-6">404</h1>
    <p className="text-gray-700 text-lg mb-6 text-center">Page not found</p>
    <Link
      to="/"
      className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound;