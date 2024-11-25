import React, { useState } from 'react';

const AddTractor = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        location: '',
        availability: 'available',
        mileage: '',
        fuelType: 'diesel',
        image: null,
        size: '',           
        brandId: '',       
        ownerId: '',        
      });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = new FormData();
    payload.append('size', formData.size);
    payload.append('fuel_type', formData.fuelType);
    payload.append('name', formData.name);
    payload.append('brand_id', formData.brandId);
    payload.append('price', formData.price);
    payload.append('owner_id', formData.ownerId);
    payload.append('location', formData.location);
    payload.append('availability', formData.availability);
    payload.append('mileage', formData.mileage);

    if (formData.image) {
        payload.append('image', formData.image);
      }
  
      try {
        const response = await fetch("http://127.0.0.1:5000/api/tractors", {
            method: "POST",
            body: payload, 
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            const error = await response.json();
            alert(`Error: ${error.error}`);
        }
    } catch (err) {
        console.error("Submission error:", err);
        alert("An unexpected error occurred.");
    }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add New Tractor</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tractor Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tractor Price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="availability">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="mileage">
              Mileage
            </label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mileage"
              value={formData.mileage}
              onChange={handleChange}
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fuelType">
              Fuel Type
            </label>
            <select
              id="fuelType"
              name="fuelType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={formData.fuelType}
              onChange={handleChange}
            >
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Add Tractor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTractor;
