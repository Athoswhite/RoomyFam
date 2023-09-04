import { useState } from "react";
import Login from "../src/components/loginPage/Login";
import Signup from "../src/components/loginPage/Signup";

const Loginscreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-md p-8 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-700">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
        </div>

        {isLogin ? <Login /> : <Signup />}
        <div className="text-center mt-8">
          <button
            className="py-2 px-4 text-amber-500 hover:text-amber-700 font-medium border border-blue-500 hover:border-amber-700 rounded-full transition duration-200"
            onClick={handleToggle}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
