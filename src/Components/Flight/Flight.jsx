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
      {/* Flight Search Form - Adjusted spacing for smaller screens */}
      <div className="bg-white h-auto justify-start py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full 
                     mt-[-8em] xs:mt-[-12em] sm:mt-[-16em] md:mt-[-20em] lg:mt-[-22em] xl:mt-[-25em] 2xl:mt-[-27em] 
                     z-10 pt-15 rounded-3xl shadow-lg">
        <AboveSelector tripType={tripType} setTripType={setTripType} />
        
        {/* Vertical stacking on small screens */}
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

      {/* Adjusted spacing between sections */}
      <div className="mt-12 xs:mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-36">
        {/* EEE Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <EEE />
        </div>

        {/* Flight Cards Section */}
        <div 
          ref={flightCardsRef} 
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
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
    </div>
  );
}

export default Flight;