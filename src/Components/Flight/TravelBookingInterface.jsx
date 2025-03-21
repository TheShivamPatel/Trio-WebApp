import React, { useState } from 'react';
import { 
  Plane, Hotel, Car, Home, CreditCard, Shield, Train, Bus, Umbrella,
  ChevronDown, Calendar
} from 'lucide-react';

// Import both component types
import FlightBookingInterface from './FlightBookingInterface';
import HotelBookingInterface from './HotelBookingInterface'; // Assuming this exists

const TravelBookingInterface = ({ onSearch }) => {
  // State to track which booking type is active
  const [activeBookingType, setActiveBookingType] = useState('flights');
  
  // Navigation items with active state
  const navItems = [
    { icon: <Plane size={20} />, text: 'Flights', id: 'flights' },
    { icon: <Hotel size={20} />, text: 'Hotels', id: 'hotels' },
    { icon: <Car size={20} />, text: 'Cabs', id: 'cabs' },
    { icon: <Home size={20} />, text: 'Homestays & Villa', id: 'homestays' },
    { icon: <CreditCard size={20} />, text: 'Forex Card', id: 'forex' },
    { icon: <Shield size={20} />, text: 'Travel Insurance', id: 'insurance' },
    { icon: <Train size={20} />, text: 'Trains', id: 'trains' },
    { icon: <Bus size={20} />, text: 'Buses', id: 'buses' },
    { icon: <Umbrella size={20} />, text: 'Holiday packages', id: 'packages' },
  ];

  // Handle search based on the active booking type
  const handleSearch = (params) => {
    // Pass both the booking type and search parameters to parent component
    onSearch({
      bookingType: activeBookingType,
      ...params
    });
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
      {/* Navigation */}
      <div className="flex overflow-x-auto pb-4 gap-4 mb-6">
        {navItems.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col items-center justify-center min-w-fit cursor-pointer ${activeBookingType === item.id ? 'text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveBookingType(item.id)}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-sm whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
      
      {/* Conditional rendering based on active booking type */}
      {activeBookingType === 'flights' ? (
        <FlightBookingInterface onSearch={handleSearch} />
      ) : activeBookingType === 'hotels' ? (
        <HotelBookingInterface onSearch={handleSearch} />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Sorry, {activeBookingType} booking is not available yet.</p>
        </div>
      )}
    </div>
  );
};

export default TravelBookingInterface;