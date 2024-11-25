import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    id_number: "",
    role: "",
  });
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with the username
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      setMessage("Signup successful!");
      console.log("User signed up:", userCredential.user);

      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        phone_number: "",
        id_number: "",
        role: "",
      });

      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage(error.message || "An error occurred during signup.");
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setMessage("Google signup successful!");
      console.log("User signed up with Google:", user);

      // Navigate to the homepage or dashboard after signup
      navigate("/");
    } catch (error) {
      console.error("Error during Google signup:", error);
      setMessage(error.message || "An error occurred during Google signup.");
    }
  };

  return (
    <section className=" ">
      <div className="h-auto bg-gray-50 flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white my-4 rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  name="id_number"
                  id="id_number"
                  placeholder="ID Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.id_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#ff481d] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
            </form>

            {/* Sign up with Google */}
            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full flex gap-4 items-center justify-center bg-gray-50 border border-gray-300 hover:border-[#ff481d] text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <img src="/Google__G__logo.svg" alt="" />
                Sign up with Google
              </button>
            </div>

            {message && (
              <p className="mt-4 text-sm font-medium text-green-500 dark:text-green-400">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
