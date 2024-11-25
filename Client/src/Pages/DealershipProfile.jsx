import React from "react";

const TractorDealershipPage = () => {
  const dealership = {
    name: "GreenFields Tractor Dealership",
    tagline: "Your Trusted Partner in Farming Innovation",
    description:
      "GreenFields Tractor Dealership has been serving the agricultural community for over 20 years, offering top-quality tractors and exceptional customer service.",
    locations: [
      "123 Farm Lane, Springfield, IL",
      "456 Agriculture Rd, Omaha, NE",
      "789 Rural Blvd, Madison, WI",
    ],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "contact@greenfieldstractors.com",
      website: "www.greenfieldstractors.com",
    },
    brands: ["John Deere", "Massey Ferguson", "New Holland", "Case IH"],
    tractors: [
      {
        id: 1,
        name: "John Deere 5075E",
        image: "/tractor-1.jpg",
        price: "KES 4,500,000",
        usage: "New",
        manufactureYear: 2021,
        engineCapacity: "2900cc",
        fuelType: "Diesel",
        description:
          "Compact utility tractor with exceptional fuel efficiency and performance.",
      },
      {
        id: 2,
        name: "Massey Ferguson MF 5710",
        image: "/tractor-2.jpg",
        price: "KES 6,200,000",
        usage: "Foreign Used",
        manufactureYear: 2020,
        engineCapacity: "4400cc",
        fuelType: "Diesel",
        description: "Versatile and durable tractor for medium to large farms.",
      },
      {
        id: 3,
        name: "New Holland T4.90",
        image: "/tractor-3.jpg",
        price: "KES 5,500,000",
        usage: "New",
        manufactureYear: 2022,
        engineCapacity: "3500cc",
        fuelType: "Diesel",
        description: "Powerful tractor designed for heavy-duty farm operations.",
      },
      {
        id: 4,
        name: "Case IH Puma 140",
        image: "/tractor-4.jpg",
        price: "KES 5,100,000",
        usage: "Foreign Used",
        manufactureYear: 2019,
        engineCapacity: "6700cc",
        fuelType: "Diesel",
        description:
          "A premium tractor with excellent horsepower, efficiency, and comfort for professional farmers.",
      },
    ],
  };

  return (
    <div className="tractor-dealership-page">
      {/* Header */}
      <header
        className="header bg-cover bg-center text-white py-20 px-4"
        style={{
          backgroundImage: `url('https://example.com/tractor-bg.jpg')`, // Replace with your image URL
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">{dealership.name}</h1>
          <p className="text-xl mt-4">{dealership.tagline}</p>
        </div>
      </header>

      {/* Description Section */}
      <section className="description p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-700">{dealership.description}</p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">Our Locations</h2>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            {dealership.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4">
            Phone: <a href={`tel:${dealership.contact.phone}`}>{dealership.contact.phone}</a>
          </p>
          <p>
            Email: <a href={`mailto:${dealership.contact.email}`}>{dealership.contact.email}</a>
          </p>
          <p>
            Website:{" "}
            <a
              href={dealership.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {dealership.contact.website}
            </a>
          </p>
        </div>
      </section>

      {/* Tractor Brands Section */}
      <section className="brands p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold">Brands We Sell</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {dealership.brands.map((brand, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-600 text-white rounded-full"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tractor List Section */}
      <section className="tractors p-6 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-6">Available Tractors</h2>
    <div className="grid md:grid-cols-4 gap-4">
      {dealership.tractors.map((tractor) => (
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
              View Seller
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default TractorDealershipPage;
