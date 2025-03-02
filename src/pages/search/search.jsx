import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="mt-4 rounded-2xl shadow-xl  p-4 bg-white w-100 h-100 ml-20 ">
    
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center space-x-2 focus:outline-none text-lg"
      >
        <FaSearch className="w-5 h-5" />
        <span>Search</span>
      </button>

     
      {showSearch && (
        <div className="relative mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search..."
          />
          
        
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

