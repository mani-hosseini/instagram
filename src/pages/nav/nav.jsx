import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaInstagram, FaHome, FaSearch, FaPlusSquare, FaUser, FaTimes } from "react-icons/fa";

const Layout = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex h-screen">
            <div
                className={`p-6 shadow-md fixed h-full bg-white transition-all duration-300 ${
                    showSearch ? "w-20" : "w-56"
                }`}
            >
                <div className="flex items-center mb-6">
                    {!showSearch ? (
                        <span className="text-lg font-bold text-gray-700">Instagram</span>
                    ) : (
                        <FaInstagram className="text-3xl text-[#E4405F]" />
                    )}
                </div>
                <nav className="flex flex-col space-y-8 items-start">
                    <Link to="/" className="flex items-center space-x-2 text-black">
                        <FaHome className="w-5 h-5" />
                        {!showSearch && <span>Home</span>}
                    </Link>

                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="flex items-center space-x-2 focus:outline-none text-black"
                    >
                        <FaSearch className="w-5 h-5" />
                        {!showSearch && <span>Search</span>}
                    </button>

                    <Link to="/create" className="flex items-center space-x-2">
                        <FaPlusSquare className="w-5 h-5" />
                        {!showSearch && <span>Create</span>}
                    </Link>
                    <Link to="/profile" className="flex items-center space-x-2">
                        <FaUser className="w-5 h-5" />
                        {!showSearch && <span>Profile</span>}
                    </Link>
                </nav>
            </div>

            <div
                className={`p-6 transition-all duration-300 ${
                    showSearch ? "ml-20" : "ml-56"
                } flex-grow`}
            >
                {showSearch && (
                    <div className="mt-4 rounded-2xl shadow-xl p-4 bg-white w-[400px]">
                        <div className="relative">
                            <h2 className="text-xl font-bold mb-2">Search</h2>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Search"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black"
                                >
                                    <FaTimes className="w-5 h-5" />
                                </button>
                            )}
                            <div className="mt-6 border-b border-gray-300 w-full"></div>
                            <div className="mt-4 space-y-2 flex items-center justify-between">
                                <p className="text-sm text-gray-700">Recent</p>
                                <p className="text-sm text-blue-500">Clear all</p>
                            </div>
                        </div>
                    </div>
                )}

                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
