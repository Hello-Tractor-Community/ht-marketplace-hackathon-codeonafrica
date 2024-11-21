import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [exploreDropDown, setExploreDropDown] = useState(false);
  const [hireDropDown, setHireDropDown] = useState(false);

  const toggleExploreDropDown = () => {
    setExploreDropDown(!exploreDropDown);
    if (hireDropDown) setHireDropDown(false); // Close the other dropdown
  };

  const toggleHireDropDown = () => {
    setHireDropDown(!hireDropDown);
    if (exploreDropDown) setExploreDropDown(false); // Close the other dropdown
  };

  return (
    <div className="pt-12 h-[100vh] relative">
      <div className="w-1/2 mx-auto grid items-center relative z-10">
        {/* Title */}
        <h1 className="font-serif leading-snug text-center text-[40px]">
          The <strong>safest way</strong> to buy or sell your
          <span className="bg-[#FF481D] rounded-md mx-2 px-2 text-white">Tractor</span> in Kenya
        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-4 pt-8 relative">
          {/* Explore Tractors Button */}
          <div className="relative">
            <button
              onClick={toggleExploreDropDown}
              className="bg-black flex items-center gap-2 justify-center text-white py-3 hover:shadow-md text-md w-full"
            >
              Explore Tractors
              <FaChevronDown size="16" />
            </button>
            {exploreDropDown && (
              <div className="absolute top-full grid mt-2 left-0 bg-white border shadow-md rounded-md w-full text-center py-2 z-20">
              <Link to={'/tractors/new'} className="py-2 hover:bg-gray-100 cursor-pointer">
                New Tractors
              </Link>
              <Link to={'/tractors/used'} className="py-2 hover:bg-gray-100 cursor-pointer">
                Used Tractors
              </Link>
              <Link to={'/tractors/rental'} className="py-2 hover:bg-gray-100 cursor-pointer">
                Rental Services
              </Link>
            </div>
            )}
          </div>

          {/* Hire a Tractor Button */}
          <div className="relative">
            <button
              onClick={toggleHireDropDown}
              className="border border-[#FF481D] flex items-center justify-center gap-2 text-[#FF481D] py-3 w-full"
            >
              Hire a Tractor
              <FaChevronDown size="16" />
            </button>
            {hireDropDown && (
              <div className="absolute top-full mt-2 left-0 bg-white border shadow-md rounded-md w-full text-center py-2 z-20">
                <p className="py-2 hover:bg-gray-100 cursor-pointer">Hire by Location</p>
                <p className="py-2 hover:bg-gray-100 cursor-pointer">Hire by Type</p>
                <p className="py-2 hover:bg-gray-100 cursor-pointer">Short-term Rentals</p>
              </div>
            )}
          </div>

          {/* Sell Tractor Button */}
          <button className="border border-[#FF481D] text-[#FF481D] py-3 w-full">
            Sell Tractor
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <h2 className="uppercase font-bold text-[20vh] px-40 text-center z-0 mx-auto absolute bottom-0 opacity-15">
        Hello Tractor
      </h2>

      {/* Image */}
      <img
        src="tractor.png"
        className="h-[56vh] relative z-5 bottom-0 mx-auto"
        alt="Tractor"
      />
    </div>
  );
};

export default HeroSection;
