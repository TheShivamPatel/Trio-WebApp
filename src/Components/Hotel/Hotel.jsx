import React from "react";
import Location from "./Location";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import PricePerNight from "./PricePerNight";
import SearchBtn from "../Header/SearchBtn";
import EEE from "../Flight/EEE";
import HotelCard from "./HotelCard";
import AboveSelector from "./AboveSelecote";

function Hotel() {
  return (
    <div className="h-auto w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {/* Hotel Search Form */}
      <div className="bg-white  h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full mt-[-24.5em] md:mt-[-20em] lg:mt-[-22em] xl:mt-[-25em] 2xl:mt-[-27em] z-[-4] pt-15 rounded-3xl shadow-lg">
        <div className="font-semibold">
        <AboveSelector/>
        </div>
        <div className="py-4 flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Location />
          </div>
          <div className="flex-1 min-w-[200px]">
            <CheckIn />
          </div>
          <div className="flex-1 min-w-[200px]">
            <CheckOut />
          </div>
          <div className="flex-1 min-w-[200px]">
            <PricePerNight />
          </div>
        </div>

        <div className="flex h-1 justify-center mt-4">
          <SearchBtn />
        </div>
      </div>

      {/* EEE Section */}
      <div className="mt-10 mb-10 sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30 2xl:mb-35">
        <EEE />
      </div>

      {/* Hotel Cards Section */}
      <div className="mt-5 mb-10 sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30 2xl:mb-35">
        <HotelCard />
      </div>
    </div>
  );
}

export default Hotel;