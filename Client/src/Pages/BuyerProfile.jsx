import React from 'react';
const buyerData = {
  name: 'Jane Doe',
  image: '/buyer-profile.jpg',
  location: 'Nairobi, Kenya',
  contact: '+254 712 345 678',
  preferences: 'Foreign Used Tractors, Diesel Engines',
  favorites: [
    {
      id: 1,
      name: 'John Deere 5055E',
      image: '/tractor-1.jpg',
      price: 'KES 2,500,000',
    },
    {
      id: 2,
      name: 'New Holland T7.210',
      image: '/tractor-2.jpg',
      price: 'KES 3,200,000',
    },
  ],
  inquiryHistory: [
    {
      tractor: {
        id: 3,
        name: 'Case IH Puma 140',
        image: '/tractor-3.jpg',
        price: 'KES 5,100,000',
      },
      sellerContact: '+254 700 123 456',
      date: '2024-11-20',
    },
    {
      tractor: {
        id: 4,
        name: 'Massey Ferguson MF 5700',
        image: '/tractor-4.jpg',
        price: 'KES 4,800,000',
      },
      sellerContact: '+254 701 789 101',
      date: '2024-11-22',
    },
  ],
};

const BuyerProfile = () => {
  const { name, image, location, contact, preferences, favorites, inquiryHistory } = buyerData;

  return (
    <div className="buyer-profile bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url('/path-to-header-image.jpg')` }}
      >
        <div className="text-center">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-white"
          />
          <h1 className="text-white text-3xl font-bold mt-4">{name}'s Profile</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Buyer Details Section */}
        <section className="buyer-details bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600">📍 Location: {location}</p>
          <p className="text-gray-600">📞 Contact: {contact}</p>
          <p className="text-gray-600">🔖 Preferences: {preferences}</p>
        </section>

        {/* Disclaimer */}
        <section className="disclaimer bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            ⚠️ All transactions are conducted outside this platform. The seller’s contact details are provided for direct communication. Ensure all due diligence is performed before completing a purchase.
          </p>
        </section>

        {/* Favorites Section */}
        <section className="favorites mb-6">
          <h2 className="text-xl font-bold mb-4">Favorites</h2>
          {favorites.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {favorites.map((tractor) => (
                <div key={tractor.id} className="border border-gray-100 rounded-lg shadow-md">
                  <img
                    src={tractor.image}
                    alt={tractor.name}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{tractor.name}</h3>
                    <p className="text-gray-600">Price: {tractor.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No tractors added to favorites yet.</p>
          )}
        </section>

        {/* Inquiry History Section */}
        <section className="inquiry-history">
          <h2 className="text-xl font-bold mb-4">Inquiry History</h2>
          {inquiryHistory.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {inquiryHistory.map((inquiry) => (
                <div key={inquiry.tractor.id} className="border border-gray-100 rounded-lg shadow-md">
                  <img
                    src={inquiry.tractor.image}
                    alt={inquiry.tractor.name}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{inquiry.tractor.name}</h3>
                    <p className="text-gray-600 mb-2">Price: {inquiry.tractor.price}</p>
                    <p className="text-gray-600 mb-2">
                      Seller Contact: {inquiry.sellerContact}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Inquiry Date: {new Date(inquiry.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No inquiries made yet.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default BuyerProfile;
