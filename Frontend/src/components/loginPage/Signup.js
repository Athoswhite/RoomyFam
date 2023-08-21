import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const Signup = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const handleRegistration = async (event) => {
    event.preventDefault();
    const res = await fetch("/pages/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    });
    if (res.status === 200) {
      setIsRegistered(true);
    } else {
      // handle error
    }
  };

  useEffect(() => {
    if (isRegistered) {
      router.push("/add-listing");
    }
  }, [isRegistered, router]);

  return (
    <div className="border border-brown-500 p-4">
      <h1 className="text-lg font-medium mb-4">Registration</h1>
      <form onSubmit={handleRegistration}>
        <label className="block mb-2">Email Address</label>
        <input
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4"
          type="email"
          name="email"
          placeholder="Type your email"
        ></input>
        <label className="block mb-2">Password</label>
        <input
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4"
          type="password"
          name="password"
          placeholder="Type your password"
        ></input>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-2 rounded hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
