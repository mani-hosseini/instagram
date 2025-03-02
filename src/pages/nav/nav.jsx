import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaInstagram, FaHome, FaSearch, FaPlusSquare, FaUser } from "react-icons/fa";

const Layout = () => {
    const [hideText, setHideText] = useState(false);
    const [showInstagramIcon, setShowInstagramIcon] = useState(false);

    const handleLinkClick = () => {
        setHideText(false);
        setShowInstagramIcon(false);
    };

    return (
        <div className="flex h-screen">
            <div className={`p-6 shadow-md fixed h-full bg-white transition-all duration-500 ease-in-out ${hideText ? "w-20" : "w-64"}`}>
                <div className="flex items-center space-x-2 mb-6">
                    {showInstagramIcon ? (
                        <FaInstagram className="w-8 h-8 text-pink-600" />
                    ) : (
                        <span className={`text-lg font-bold text-gray-700 ${hideText ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>Instagram</span>
                    )}
                </div>
                <nav className="flex flex-col space-y-8 items-start">
                    <Link to="/" className="flex items-center space-x-2 text-black" onClick={handleLinkClick}>
                        <FaHome className="w-5 h-5" />
                        <span className={`${hideText ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>Home</span>
                    </Link>
                    <Link
                        to="/search"
                        className="flex items-center space-x-2"
                        onClick={() => {
                            setHideText(!hideText);
                            setShowInstagramIcon(true);
                        }}
                    >
                        <FaSearch className="w-5 h-5" />
                        <span className={`${hideText ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>Search</span>
                    </Link>
                    <Link to="/create" className="flex items-center space-x-2" onClick={handleLinkClick}>
                        <FaPlusSquare className="w-5 h-5" />
                        <span className={`${hideText ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>Create</span>
                    </Link>
                    <Link to="/profile" className="flex items-center space-x-2" onClick={handleLinkClick}>
                        <FaUser className="w-5 h-5" />
                        <span className={`${hideText ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>Profile</span>
                    </Link>
                </nav>
            </div>

            <div className={`flex-grow w-auto transition-all duration-500 ease-in-out ${hideText ? "ml-10" : "ml-54"}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;