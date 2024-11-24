import React,{useState} from 'react';
import {Link} from "react-router-dom"

const TractorsList = () => {
  // Example tractor data
  const tractorData = [
    {
      id: 1,
      name: 'John Deere 5075E',
      image: '/tractor-1.jpg',
      price: 'KES 3,500,000',
      usage: 'Kenyan Used',
      manufactureYear: 2018,
      engineCapacity: '3000cc',
      fuelType: 'Diesel',
      description:
        'A reliable and durable tractor suitable for small to medium-sized farms. Equipped with advanced hydraulics and efficient fuel consumption.',
    },
    {
      id: 2,
      name: 'Massey Ferguson 290',
      image: '/tractor-2.jpg',
      price: 'KES 2,800,000',
      usage: 'Foreign Used',
      manufactureYear: 2015,
      engineCapacity: '2900cc',
      fuelType: 'Diesel',
      description:
        'A classic Massey Ferguson model with proven performance. Perfect for all-around farming tasks and excellent durability.',
    },
    {
      id: 3,
      name: 'New Holland T6050',
      image: '/tractor-3.jpg',
      price: 'KES 4,200,000',
      usage: 'Kenyan Used',
      manufactureYear: 2020,
      engineCapacity: '4500cc',
      fuelType: 'Diesel',
      description:
        'An advanced tractor with a high-capacity engine designed for heavy-duty tasks. Ideal for large-scale farming.',
    },
    {
      id: 4,
      name: 'Case IH Puma 140',
      image: '/tractor-4.jpg',
      price: 'KES 5,100,000',
      usage: 'Foreign Used',
      manufactureYear: 2019,
      engineCapacity: '6700cc',
      fuelType: 'Diesel',
      description:
        'A premium tractor with excellent horsepower, efficiency, and comfort for professional farmers.',
    },
    {
      id: 5,
      name: 'Kubota L4701',
      image: '/tractor-5.jpg',
      price: 'KES 2,200,000',
      usage: 'Kenyan Used',
      manufactureYear: 2017,
      engineCapacity: '2600cc',
      fuelType: 'Diesel',
      description:
        'A compact tractor with excellent performance and fuel efficiency, perfect for small farms and gardening.',
    },
  ];

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTractors = tractorData.filter((tractor) => {
    if (filter === 'all') return true;
    return tractor.usage === filter;
  });

  return (
    <div className="px-2 space-y-4">
      <div>
        <h2 className="text-sm font-bold mb-2">Showing results of tractors</h2>
        <div className="flex items-center gap-4">
          <select
            name="usageFilter"
            className="border p-2 text-xs"
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Kenyan Used">Kenyan Used</option>
            <option value="Foreign Used">Foreign Used</option>
          </select>
          <select name="importOption" className="border p-2 text-xs">
            <option value="Direct import">Direct Import Option</option>
          </select>
        </div>
      </div>
      <hr />
      <h2 className="text-sm font-bold text-start mb-6">
        Showing Available Tractors ({filteredTractors.length})
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tractorData.map((tractor) => (
          <div
            key={tractor.id}
            className="border border-gray-100 rounded-lg shadow-md "
          >
            <img
              src={tractor.image}
              alt={tractor.name}
              className="w-full h-64 object-cover mb-4 rounded-t-md"
            />
            <div className='p-4'>
            <span className="flex gap-4">
            <p className="text-green-500 bg-green-50 border p-1 rounded-md text-xs border-green-500">{tractor.manufactureYear}</p>
              <h3 className="text-lg font-bold">{tractor.name}</h3>
            </span>
           <div className="flex gap-2 mt-2 font-medium items-center">
            <p className="text-gray-500 border text-xs rounded p-1"> {tractor.usage}</p>
            <p className="text-gray-500 border text-xs rounded p-1" >{tractor.engineCapacity}</p>
            <p className="text-gray-500 border text-xs rounded p-1">{tractor.fuelType}</p>
            </div>
            <p className="text-gray-600 line-clamp-2 mt-2 text-sm">{tractor.description}</p>
            </div>
            <hr className=""/>
            <div className="p-4 flex justify-between item-center">
            
            <p className="text-gray-500 mt-2 ">{tractor.price}</p>
            <div>
              <Link to="/tractor">

            <button className="bg-black text-white text-xs hover:bg-[#ff481d] font-medium px-2 py-1 rounded" type="">View Seller</button>
            </Link>
            </div>

            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TractorsList;
