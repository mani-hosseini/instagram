import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

function User() {
  return (
    <div className="flex flex-row justify-center items-start mt-10">
     
      <div className="w-40 h-40 mr-10">
      <img src="../../../public/img/frame(1).svg" alt="Profile" className="w-full h-full rounded-full" />
      </div>

      
      <div className="ml-10">
        <div className="flex flex-row items-center gap-2">
          <p className="text-lg font-semibold">upvox_</p>
          
          
          
          <button className="ml-5 bg-gray-300 rounded-2xl px-4 py-1 flex items-center gap-1">
            <span>Following</span>
            <FaChevronDown className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-row gap-10 mt-5 text-gray-600">
          <span>11 posts</span>
          <span>41 followers</span>
          <span>17 following</span>
        </div>

        <div className="mt-5">
          <p className="font-semibold">Upvox</p>
          <a href="" className="text-gray-700">Product/service</a>
          <p className="text-gray-700">Your favourite fun clips 🎦 in your language 🌎</p>
          <a href="#" className="text-blue-600 hover:underline">upvox.net</a>
        </div>
      </div>
    </div>
  );
}

export default User;