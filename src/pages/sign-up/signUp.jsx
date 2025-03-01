import image1 from "../../assets/insta logo.png";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 border rounded-lg w-96 shadow-lg">
        <form className="flex flex-col space-y-4">
          <img 
            src={image1} 
            alt="Instagram Logo"
            className="w-[256px] h-[87px] object-contain mx-auto mb-4" 
          /> 
          <input
            type="text"
            placeholder="Username"
            className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
