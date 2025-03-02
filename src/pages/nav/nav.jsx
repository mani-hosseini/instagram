import { Outlet, Link } from "react-router-dom";
import { FaInstagram, FaHome, FaSearch, FaPlusSquare, FaUser } from "react-icons/fa";
const Layout = () => {
  return (
    <div className="flex h-screen">
     
      <div className="w-64 p-6 shadow-md fixed h-full bg-white">
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-lg font-bold text-gray-700">Instagram</span>
        </div>
        <nav className="flex flex-col space-y-8 items-start">
          <Link to="/" className="flex items-center space-x-2 hover:underline text-black">
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/search" className="flex items-center space-x-2">
            <FaSearch className="w-5 h-5" />
            <span>Search</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-2">
            <FaPlusSquare className="w-5 h-5" />
            <span>Create</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2">
            <FaUser className="w-5 h-5" />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
      
     
      <div className="flex-grow ml-56 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
