import React, { useState, useRef } from "react";
import AboveSelector from "./AboveSelector";
import From from "./From";
import To from "./To";
import Departure from "./Departure";
import Return from "./Return";
import BelowSelector from "./BelowSelector";
import EEE from "./EEE";
import SearchBtn from "../Header/SearchBtn";
import FlightCards from "./FlightsCard";

function Flight() {
  const [tripType, setTripType] = useState("oneway");
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [hasSearched, setHasSearched] = useState(false);
  
  // Create a ref for the FlightCards section
  const flightCardsRef = useRef(null);

  // Function to scroll to the flight cards section and set search state
  const handleSearch = () => {
    setHasSearched(true);
    flightCardsRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="h-auto w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {/* Flight Search Form */}
      <div className="bg-white h-auto justify-start py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full md:mt-[-20em] lg:mt-[-22em] xl:mt-[-25em] 2xl:mt-[-27em] z-[-4] pt-15 rounded-3xl shadow-lg">
        <AboveSelector tripType={tripType} setTripType={setTripType} />
        
        {/* Only changing this section to make it stack vertically on small screens */}
        <div className="py-4 flex flex-col xs:flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <From setSelectedFrom={setSelectedFrom} />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <To 
              selectedFrom={selectedFrom} 
              setSelectedTo={setSelectedTo}
            />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <Departure setDepartureDate={setDepartureDate} />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1">
            <Return setReturnDate={setReturnDate} />
          </div>
        </div>
        
        <div className="pb-4 flex justify-around">
          <BelowSelector />
          <div></div>
        </div>
        <div className="flex h-1 justify-center">
          <SearchBtn onSearch={handleSearch} />
        </div>
      </div>

      {/* EEE Section */}
      <div className="mt-10 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30">
        <EEE />
      </div>

      {/* Flight Cards Section - Added ref here */}
      <div 
        ref={flightCardsRef} 
        className="mt-5 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30"
      >
        <FlightCards 
          tripType={tripType} 
          selectedFrom={selectedFrom}
          selectedTo={selectedTo}
          departureDate={departureDate}
          returnDate={returnDate}
          hasSearched={hasSearched}
        />
      </div>
    </div>
  );
}

export default Flight;