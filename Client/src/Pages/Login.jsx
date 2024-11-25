import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 // Assuming the firebase.js file exports auth and googleProvider
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const token = await user.getIdToken();
      localStorage.setItem('userToken', token);  // Store token for session management

      // Redirect based on the user's role (this assumes role info is stored in the user profile)
      const role = user.displayName;  // Modify this logic to reflect how you store the role (could be in user metadata)
      if (role === 'buyer') {
        navigate('/buyer');
      } else if (role === 'seller') {
        navigate('/seller');
      } else {
        // Default redirect if role is undefined
        navigate('/');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem('userToken', token);  // Store token for session management

      // Redirect based on the user's role (this assumes role info is stored in the user profile)
      const role = user.displayName;  // Modify this logic to reflect how you store the role
      if (role === 'buyer') {
        navigate('/buyer');
      } else if (role === 'seller') {
        navigate('/seller');
      } else {
        // Default redirect if role is undefined
        navigate('/');
      }
    } catch (err) {
      console.error('Error with Google login:', err);
      setError('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full text-white bg-[#ff481d] hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="w-full text-gray-600 border border-300 bg-gray-50 flex items-center gap-2 justify-center hover:border-[#ff481d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                disabled={loading}
              >
                <img src="/Google__G__logo.svg" alt="" />
                {loading ? 'Signing in with Google...' : 'Sign in with Google'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
