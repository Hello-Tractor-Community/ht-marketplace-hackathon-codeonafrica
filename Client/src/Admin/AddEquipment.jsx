import React, { useState } from 'react';

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    features: [],
    featureName: '',
    featureValue: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addFeature = () => {
    if (formData.featureName && formData.featureValue) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, { name: formData.featureName, value: formData.featureValue }],
        featureName: '',
        featureValue: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Equipment:', formData);
    // Add your submit logic here
  };

  return (
    <div className="bg-[#ff481d] bg-opacity-10 py-8 mt-8">
      <div className="w-3/4 mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium text-center mb-6">Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          {/* Equipment Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Equipment Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter equipment name"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter equipment description"
              rows="3"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Harvesting">Harvesting</option>
              <option value="Planting">Planting</option>
              <option value="Tillage">Tillage</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
              Price (Ksh)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>

          {/* Features */}
          <div className="mb-4">
            <label htmlFor="features" className="block text-gray-700 font-medium mb-2">
              Features
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                name="featureName"
                value={formData.featureName}
                onChange={handleInputChange}
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Feature name"
              />
              <input
                type="text"
                name="featureValue"
                value={formData.featureValue}
                onChange={handleInputChange}
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Feature value"
              />
              <button
                type="button"
                onClick={addFeature}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            {/* Display Added Features */}
            {formData.features.length > 0 && (
              <ul className="list-disc list-inside text-gray-700">
                {formData.features.map((feature, index) => (
                  <li key={index}>
                    {feature.name}: {feature.value}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
