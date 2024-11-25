import React from 'react';

const SellerProfile = () => {
  const sellerData = {
    name: 'John Doe',
    image: '/seller-profile.jpg',
    location: 'Nairobi, Kenya',
    contact: '+254 700 123 456',
    tractors: [
      {
        id: 1,
        name: 'John Deere 5055E',
        image: '/tractor-1.jpg',
        price: 'KES 2,500,000',
        usage: 'Brand New',
        manufactureYear: 2023,
        engineCapacity: '2900cc',
        fuelType: 'Diesel',
        description: 'A reliable and durable tractor perfect for medium-sized farms.',
      },
      // Add more tractor objects here
    ],
  };
  
  const { name, image, location, contact, tractors } = sellerData;

  return (
    <div className="seller-profile bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url('/path-to-header-image.jpg')` }}>
        <h1 className="text-white text-3xl font-bold">{name}'s Profile</h1>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Seller Details */}
        <section className="seller-details bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-6">
            <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full border" />
            <div>
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-gray-500">📍 {location}</p>
              <p className="text-gray-500">📞 {contact}</p>
            </div>
          </div>
        </section>

        {/* Tractors List */}
        <section className="seller-tractors">
          <h3 className="text-xl font-bold mb-4">Tractors for Sale</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tractors.map((tractor) => (
              <div
                key={tractor.id}
                className="border border-gray-100 rounded-lg shadow-md"
              >
                <img
                  src={tractor.image}
                  alt={tractor.name}
                  className="w-full h-64 object-cover mb-4 rounded-t-md"
                />
                <div className="p-4">
                  <span className="flex gap-4 items-center">
                    <p className="text-green-500 bg-green-50 border p-1 rounded-md text-xs border-green-500">
                      {tractor.manufactureYear}
                    </p>
                    <h3 className="text-lg font-bold">{tractor.name}</h3>
                  </span>
                  <div className="flex gap-2 mt-2 font-medium items-center">
                    <p className="text-gray-500 border text-xs rounded p-1">
                      {tractor.usage}
                    </p>
                    <p className="text-gray-500 border text-xs rounded p-1">
                      {tractor.engineCapacity}
                    </p>
                    <p className="text-gray-500 border text-xs rounded p-1">
                      {tractor.fuelType}
                    </p>
                  </div>
                  <p className="text-gray-600 line-clamp-2 mt-2 text-sm">
                    {tractor.description}
                  </p>
                </div>
                <hr className="" />
                <div className="p-4 flex justify-between items-center">
                  <p className="text-gray-500 mt-2">{tractor.price}</p>
                  <button
                    className="bg-black text-white text-xs hover:bg-[#ff481d] font-medium px-2 py-1 rounded"
                    type="button"
                  >
                    Contact Seller
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SellerProfile;
