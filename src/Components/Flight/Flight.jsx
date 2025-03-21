import React, {useState} from "react";
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

  return (
    <div className="h-auto w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {/* Flight Search Form */}
      <div className="bg-white h-auto justify-start py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full  md:mt-[-20em] lg:mt-[-22em] xl:mt-[-25em] 2xl:mt-[-27em] z-[-4] pt-15 rounded-3xl shadow-lg">
      <AboveSelector tripType={tripType} setTripType={setTripType} />
        <div className="py-4 flex flex-row justify-center md:flex-row flex-wrap ">
          <div className="flex min-w-[10%] ">
          <From setSelectedFrom={setSelectedFrom} />
          </div>
          <div className="flex min-w-[15%]">
          <To selectedFrom={selectedFrom} />
          </div>
          <div className="flex min-w-[15%]">
            <Departure />
          </div>
          <div className="flex min-w-[15%]">
            <Return />
          </div>
        </div>
        <div className="pb-4 flex justify-around">
          <BelowSelector />
          <div></div>
        </div>
        <div className="flex h-1 justify-center">
          <SearchBtn />
        </div>
      </div>

      {/* EEE Section */}
      <div className="mt-10 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30">
        <EEE />
      </div>

      {/* Flight Cards Section */}
      <div className="mt-5 mb-10 md:mb-15 lg:mb-20 xl:mb-25 2xl:mb-30">
      <FlightCards tripType={tripType} />
      </div>
    </div>
  );
}

export default Flight;