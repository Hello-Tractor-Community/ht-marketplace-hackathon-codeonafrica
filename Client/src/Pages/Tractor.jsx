import React from "react";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

const Tractor = ({ tractor }) => {
  
  const sampleTractor = {
    image: "/tractor-2.jpg",
    name: "John Deere 5050E",
    price: "$25,000",
    location: "Nairobi, Kenya",
    availability: "In Stock",
    mileage: "500 hours",
    engineSize: "3.0L",
    horsePower: "50 HP",
    yearOfManufacture: "2018",
    estimatedArrival: "45 days",
    drive: "AWD",
    fuelType: "Diesel",
    transmission: "Manual",
  };

  const details = tractor || sampleTractor;

  return (
    <div className="max-w-8xl mx-auto p-6">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src={details.image}
            alt={details.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side: Overview Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          {/* Tractor Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{details.name}</h1>

          {/* Contact Buttons */}
          <div className="flex items-center gap-6 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              <AiOutlineWhatsApp size={24} />
              <span>WhatsApp</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              <AiOutlinePhone size={24} />
              <span>Call</span>
            </button>
          </div>

          {/* Summary Details */}
          <div className="pt-4 text-gray-600 space-y-2">
            <p>
              <span className="font-medium text-gray-800">Price:</span> {details.price}
            </p>
            <p>
              <span className="font-medium text-gray-800">Location:</span> {details.location}
            </p>
            <p>
              <span className="font-medium text-gray-800">Availability:</span> {details.availability}
            </p>
            <p>
              <span className="font-medium text-gray-800">Mileage:</span> {details.mileage}
            </p>
            <p>
              <span className="font-medium text-gray-800">Engine Size:</span> {details.engineSize}
            </p>
            <p>
              <span className="font-medium text-gray-800">Horse Power:</span> {details.horsePower}
            </p>
          </div>
        </div>
      </div>

      {/* Vehicle Details Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Details</h2>
        <div className="text-gray-600 space-y-2">
          <p>
            <span className="font-medium text-gray-800">Year of Manufacture:</span> {details.yearOfManufacture}
          </p>
          <p>
            <span className="font-medium text-gray-800">Current Location:</span> {details.location}
          </p>
          <p>
            <span className="font-medium text-gray-800">Availability:</span> {details.availability}
          </p>
          <p>
            <span className="font-medium text-gray-800">Estimated Arrival Days:</span> {details.estimatedArrival}
          </p>
          <p>
            <span className="font-medium text-gray-800">Drive:</span> {details.drive}
          </p>
          <p>
            <span className="font-medium text-gray-800">Fuel Type:</span> {details.fuelType}
          </p>
          <p>
            <span className="font-medium text-gray-800">Transmission:</span> {details.transmission}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tractor;
