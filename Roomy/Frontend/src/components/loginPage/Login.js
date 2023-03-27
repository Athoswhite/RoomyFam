import { useState } from 'react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Perform login logic here
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to confirmation screen
    }, 2000);
  };

  return (
    <div className="border border-brown-500 p-4">
      <h1 className="text-lg font-medium mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Email Address</label>
        <input className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4" type="email" name="email" placeholder="Type your email"></input>
        <label className="block mb-2">Password</label>
        <input className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4" type="password" name="password" placeholder="Type your password"></input>
        <button className="bg-blue-600 text-white font-semibold px-4 py-2 text-center mb-6 rounded hover:bg-blue-600 transition duration-200 relative" type="submit">
          {isLoading && <div className="absolute inset-0 flex items-center justify-center"><div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6"></div></div>}
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
