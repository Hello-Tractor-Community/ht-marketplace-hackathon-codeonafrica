import React from 'react';

const Dealerships = () => {
    const dealers = [
        {
            id: 1,
            name: 'CMC',
            brand: 'New Holland Dealer',
            branches: [
                { location: 'Nairobi', phone: '0722 283 433', address: 'Lusaka Rd' },
                { location: 'Nakuru', phone: '0722 316 821', address: 'Nakuru Kisumu Rd' },
                { location: 'Nanyuki/Meru', phone: '0727 443 226', address: 'Sagana Rd' },
                { location: 'Eldoret/Kitale', phone: '0723 256 074', address: 'Eldoret Kisumu Rd' },
                { location: 'Kisumu', phone: '0722 540 558', address: 'Obote Rd' },
                { location: 'Mombasa', phone: '0720 661 972', address: 'Archbishop Makarios Rd, Mombasa' },
            ],
        },
        {
            id: 2,
            name: 'Mascor',
            brand: 'John Deere',
            branches: [
                { location: 'Eldoret', phone: '254 207 602 298', address: 'Uganda Rd' },
                { location: 'Kisumu', phone: '254 207 602 294', address: 'Obote Rd, Kisumu' },
                { location: 'Nakuru', phone: '254 207 602 288', address: 'Old Nairobi Rd, Nakuru' },
                { location: 'Narok', phone: '254 720 935 034', address: '-' },
            ],
        },
        {
            id: 3,
            name: 'CFAO Motors',
            brand: 'Case HI Dealer',
            branches: [
                { location: 'Nakuru', phone: '207 604 121', address: 'George Morara Rd, Nakuru' },
                { location: 'Kisumu', phone: '0719 029 707', address: '-' },
                { location: 'Nanyuki', phone: '0719 029 462', address: 'Kenyatta Rd' },
            ],
        },
    ];

    return (
        <div className="bg-[#ff481d] bg-opacity-10 py-8 mt-8">
            {/* Header Section */}
            <div className="w-3/4 mx-auto text-center space-y-4">
                <h2 className="text-4xl font-medium font-serif">
                    Your Trusted Tractor Dealers in Kenya
                </h2>
                <p>Find the best brands with locations near you. 🚜✨</p>
            </div>

            {/* Dealership Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto mt-8">
                {dealers.map((dealer) => (
                    <div style={{
                        backgroundImage: 'url("tractor.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                        key={dealer.id}
                        className="relative p-6 rounded-lg shadow-md text-center border border-gray-200"
                    >
                        <div></div>
                        <h3 className="text-xl text-white font-bold">{dealer.name}</h3>
                        <p className="text-gray-200 mt-2">
                            <strong>Brand:</strong> {dealer.brand}
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Locations:</strong> {dealer.branches.length}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dealerships;
