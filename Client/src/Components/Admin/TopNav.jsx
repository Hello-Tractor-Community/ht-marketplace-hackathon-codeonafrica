import React, { useState } from 'react';
import { FiBell, FiMessageCircle } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

const TopNav = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Helper to close other dropdowns
  const closeDropdowns = () => {
    setShowNotifications(false);
    setShowMessages(false);
    setShowProfile(false);
  };

  return (
    <div
      onClick={() => closeDropdowns()} // Fix: Wrap in a function
      className="shadow-md border-b p-4 bg-white justify-between flex items-center"
    >
      {/* Left Section */}
      <div className="text-lg font-bold text-gray-800">Admin Panel</div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            className="relative"
            onClick={(e) => {
              e.stopPropagation(); // Prevent propagation to the parent `div`
              closeDropdowns();
              setShowNotifications((prev) => !prev);
            }}
          >
            <FiBell size={24} className="text-gray-600 hover:text-black" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
              <h4 className="text-gray-800 font-semibold mb-2">Notifications</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">New tractor added by seller</li>
                <li className="text-gray-600 text-sm">Price update on John Deere 5055E</li>
                <li className="text-gray-600 text-sm">Inquiry from Buyer John</li>
              </ul>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="relative">
          <button
            className="relative"
            onClick={(e) => {
              e.stopPropagation(); // Prevent propagation to the parent `div`
              closeDropdowns();
              setShowMessages((prev) => !prev);
            }}
          >
            <FiMessageCircle size={24} className="text-gray-600 hover:text-black" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></span>
          </button>
          {showMessages && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
              <h4 className="text-gray-800 font-semibold mb-2">Messages</h4>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">Message from Seller Jane Doe</li>
                <li className="text-gray-600 text-sm">Follow-up inquiry from Buyer John</li>
                <li className="text-gray-600 text-sm">New dealership partnership request</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={(e) => {
              e.stopPropagation(); // Prevent propagation to the parent `div`
              closeDropdowns();
              setShowProfile((prev) => !prev);
            }}
          >
            <img
              src="/tractor.png"
              alt="Profile"
              className="h-10 w-10 border bg-gray-100 rounded-full"
            />
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10">
              <ul className="py-2">
                <li className="text-gray-800 hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  View Profile
                </li>
                <li className="text-gray-800 hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Settings
                </li>
                <li className="text-gray-800 hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2">
                  <AiOutlineLogout />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
