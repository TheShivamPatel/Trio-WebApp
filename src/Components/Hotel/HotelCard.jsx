import React from "react";

const hotels = [
  {
    name: "Crowne Plaza Kochi",
    distance: "Kundanoor Junction NH-47 Bypass",
    rating: 4.8,
    reviews: 22,
    price: 26978,
    stars: 5,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Radisson Blu Hotel, Kochi",
    distance: "Sahodaran Ayyappan Rd, ",
    rating: 4.4,
    reviews: 13,
    price: 5844,
    stars: 4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-1 transform">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-md">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm font-bold">{hotel.rating}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 truncate">{hotel.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{hotel.distance}</p>
        
        <div className="flex justify-between items-center mb-2">
          <div className="flex">
            {[...Array(hotel.stars)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{hotel.reviews} reviews</span>
        </div>
        
        <div className="mt-4 flex justify-between items-end">
          <div>
            <p className="text-xl font-bold text-indigo-600">₹{hotel.price.toLocaleString()}</p>
            <p className="text-xs text-gray-500">Per night</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const HotelList = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;