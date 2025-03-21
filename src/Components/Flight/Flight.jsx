import React, { useState } from "react";
import FlightBookingInterface from "./FlightBookingInterface";
import FlightResults from "./FlightResults";
import HotelCard from "../Hotel/HotelCard"; 
import EEE from "./EEE";

function Flight() {
  const [searchParams, setSearchParams] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [activeNav, setActiveNav] = useState('Flights');
  
  const handleSearch = (params) => {
    setSearchParams(params);
    setShowResults(true);
    setActiveNav(params.navType); 
    
    // Scroll to results
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };
  
  const handleNavChange = (navType) => {
    setActiveNav(navType);
    setShowResults(false);
  };
  
  return (
    <div className="h-auto w-full">
      {/* Top section with background image */}
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-150">
        {/* Booking Interface - Centered with more top padding */}
        <div className="flex justify-center items-center h-full pt-25">
          <FlightBookingInterface onSearch={handleSearch} onNavChange={handleNavChange} />
        </div>
      </div>
      
      {/* Content section with white background */}
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* EEE Section */}
          <div className="mb-10">
            <EEE />
          </div>
          
          {/* Results Section */}
          {showResults && searchParams && (
            <div className="mb-10">
              {activeNav === 'Flights' && <FlightResults searchParams={searchParams} />}
              {activeNav === 'Hotels' && <HotelCard searchParams={searchParams} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Flight;