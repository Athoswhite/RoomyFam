import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Validate email and password
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    // Perform registration logic here
    setTimeout(() => {
      setIsLoading(false);
      setIsRegistered(true);
    }, 2000);
  };

  return (
    <div className="border border-brown-500 p-4">
      <h1 className="text-lg font-medium mb-4 text-dark">Registration</h1>
      <p className="text-red-500 mb-4">
        We are currently not allowing sign-in. This feature is still in progress.{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTKngJsgbrobMpCxRxrkpA5UqQErtHg4lgKRVS6QFwyIcGow/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className='text-amber-900'>Join our waiting list</a>
      </p>
      <form onSubmit={handleRegistration}>
        <label className="block mb-2">Email Address</label>
        <input
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
        />
        <label className="block mb-2">Password</label>
        <input
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type your password"
        />
        <button
          className="bg-amber-800 text-white font-semibold px-4 py-2 text-center mb-6 rounded hover:bg-amber-900 transition duration-200 relative"
          type="submit"
          disabled={true}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center text-brown-700">
              <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6"></div>
            </div>
          )}
          Register
        </button>
      </form>
      
    </div>
  );
};

export default Signup;