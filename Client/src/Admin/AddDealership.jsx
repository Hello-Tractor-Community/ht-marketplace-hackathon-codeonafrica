import React, { useState } from "react";

const AddDealership = () => {
  const [dealership, setDealership] = useState({
    name: "",
    brand: "",
    branches: [{ location: "", phone: "", address: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealership({ ...dealership, [name]: value });
  };

  const handleBranchChange = (index, field, value) => {
    const updatedBranches = dealership.branches.map((branch, i) =>
      i === index ? { ...branch, [field]: value } : branch
    );
    setDealership({ ...dealership, branches: updatedBranches });
  };

  const addBranch = () => {
    setDealership({
      ...dealership,
      branches: [...dealership.branches, { location: "", phone: "", address: "" }],
    });
  };

  const removeBranch = (index) => {
    const updatedBranches = dealership.branches.filter((_, i) => i !== index);
    setDealership({ ...dealership, branches: updatedBranches });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Dealership:", dealership);
    // Handle API call or state update here
  };

  return (
    <div className="w-3/4 mx-auto my-8 bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Dealership</h2>
      <form onSubmit={handleSubmit}>
        {/* Dealership Details */}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="name">
            Dealership Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={dealership.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter dealership name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={dealership.brand}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter brand name"
            required
          />
        </div>

        {/* Branches */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">Branches</h3>
          {dealership.branches.map((branch, index) => (
            <div key={index} className="mb-4 border border-gray-200 p-4 rounded-md">
              <div className="mb-2">
                <label className="block font-medium mb-1" htmlFor={`location-${index}`}>
                  Location
                </label>
                <input
                  type="text"
                  id={`location-${index}`}
                  value={branch.location}
                  onChange={(e) => handleBranchChange(index, "location", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter branch location"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium mb-1" htmlFor={`phone-${index}`}>
                  Phone
                </label>
                <input
                  type="text"
                  id={`phone-${index}`}
                  value={branch.phone}
                  onChange={(e) => handleBranchChange(index, "phone", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium mb-1" htmlFor={`address-${index}`}>
                  Address
                </label>
                <input
                  type="text"
                  id={`address-${index}`}
                  value={branch.address}
                  onChange={(e) => handleBranchChange(index, "address", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter address"
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => removeBranch(index)}
                className="text-red-600 underline mt-2"
              >
                Remove Branch
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addBranch}
            className="text-blue-600 underline mt-4"
          >
            Add Another Branch
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <button
            type="reset"
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Dealership
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDealership;
