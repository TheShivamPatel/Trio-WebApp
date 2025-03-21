import React, { useRef } from "react";
import Location from "./Location";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import PricePerNight from "./PricePerNight";
import SearchBtn from "../Header/SearchBtn";
import EEE from "../Flight/EEE";
import HotelCard from "./HotelCard";
import AboveSelector from "./AboveSelecote";

function Hotel() {
  // Create a ref for the HotelCard section
  const hotelCardsRef = useRef(null);

  // Function to scroll to the hotel cards section
  const scrollToCards = () => {
    hotelCardsRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="h-auto w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {/* Hotel Search Form - Adjusted spacing for Section2 */}
      <div className="bg-white h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full 
                     mt-[-8em] xs:mt-[-12em] sm:mt-[-16em] md:mt-[-20em] lg:mt-[-22em] xl:mt-[-25em] 2xl:mt-[-27em] 
                     z-10 pt-15 rounded-3xl shadow-lg">
        <div className="font-semibold">
          <AboveSelector />
        </div>
        
        {/* Only changing this section to make it stack better on small screens with proper spacing */}
        <div className="py-4 flex flex-col xs:flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <Location />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <CheckIn />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
            <CheckOut />
          </div>
          <div className="w-full xs:w-full sm:w-auto sm:flex-1">
            <PricePerNight />
          </div>
        </div>

        <div className="flex h-1 justify-center mt-4">
          <SearchBtn onSearch={scrollToCards} />
        </div>
      </div>

      {/* EEE Section - Adjusted top padding to prevent overlap with Section2 */}
      <div className="mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 2xl:mt-40">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <EEE />
        </div>

        {/* Hotel Cards Section */}
        <div 
          ref={hotelCardsRef} 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <HotelCard />
        </div>
      </div>
    </div>
  );
}

export default Hotel;