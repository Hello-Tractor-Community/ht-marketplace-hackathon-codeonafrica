import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';  // For decoding the JWT token (optional)
import { auth } from '../../firebase';


const NavBar = () => {
  const [user, setUser] = useState(null);  // Holds the user info (decoded from token)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();  // useNavigate hook for navigation

  useEffect(() => {
    // Check for userToken in localStorage
    const token = localStorage.getItem('userToken');
    if (token) {
      // Decode the token to extract user data (optional)
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);  // Assuming the token contains the user's info
    }
  }, []);

  const handleLogout = async () => {
    // Sign out the user by clearing the token from localStorage
    localStorage.removeItem('userToken');
    setUser(null);
    
    // If using Firebase authentication, you can also sign out using Firebase
    try {
      await auth.signOut();  // Firebase sign out
      navigate('/login');  // Redirect to login page using useNavigate
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <nav className='bg-white text-black flex items-center justify-between py-4 px-16'>
      <img className='h-20' src='/logo.svg' alt='logo' />

      <div className='w-1/3 flex items-center justify-around font-semibold'>
        <Link to='/tractors'>Tractors</Link>
        <Link to='/equipments'>Equipments</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>

      <div className='space-x-4'>
        {user ? (
          // If user is logged in, show profile and logout
          <div className='relative'>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='flex items-center space-x-2 text-black'>
              <img
                src={user.picture || '/profile-simple.svg'} // Use the user's picture from the token, fallback to a default
                alt='profile'
                className='w-8 bg-gray border h-8 rounded-full'
              />
              <span>{user.name || 'Profile'}</span>
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
                <Link
                  to={user.role === 'buyer' ? '/buyer' : '/seller'} // Redirect based on role
                  className='block px-4 py-2 text-black'>
                  View Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className='block px-4 py-2 text-red-500'>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // If user is not logged in, show login and signup buttons
          <>
            <Link to='/signup'>
              <button className='bg-black text-white px-8 py-2 rounded-md font-semibold'>
                Sign up
              </button>
            </Link>
            <Link to='/login'>
              <button className='text-black border-black bg-white border-2 px-8 py-2 rounded-md font-semibold'>
                Login
              </button>
            </Link>
          </>
        )}
      </div>

    </nav>
  );
};

export default NavBar;
