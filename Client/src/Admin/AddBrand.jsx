import React, { useState } from 'react';

const AddBrand = () => {
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Brand Added:', {
      brandName,
      brandDescription,
      country,
    });

    // Clear fields after submission
    setBrandName('');
    setBrandDescription('');
    setCountry('');
  };

  const handleCancel = () => {
    // Clear all inputs
    setBrandName('');
    setBrandDescription('');
    setCountry('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-black">
      <div className="bg-white text-black p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-lg font-medium mb-4 text-center">Add New Brand</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input for Brand Name */}
          <div>
            <label htmlFor="brandName" className="block mb-2 text-sm">
              Brand Name
            </label>
            <input
              type="text"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Enter brand name"
              className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input for Brand Description */}
          <div>
            <label htmlFor="brandDescription" className="block mb-2 text-sm">
              Brand Description
            </label>
            <textarea
              id="brandDescription"
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
              placeholder="Enter a brief description"
              className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>

          {/* Input for Country */}
          <div>
            <label htmlFor="country" className="block mb-2 text-sm">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country of origin"
              className="w-full p-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4">
            {/* Cancel Button */}
            <button
              type="button"
              onClick={handleCancel}
              className="w-full p-2 rounded-md bg-gray-300 text-black font-medium hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Add Brand
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
