import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const flightData = [
  { city: "Chennai", image: "https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=2070&auto=format&fit=crop", routes: "Delhi, Mumbai, Coimbatore, Madurai" },
  { city: "Goa", image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop", routes: "Delhi, Mumbai, Bangalore, Ahmedabad" },
  { city: "Mumbai", image: "https://images.unsplash.com/photo-1621190462153-92bc87157fbe?q=80&w=1974&auto=format&fit=crop", routes: "Delhi, Bangalore, Chennai, Ahmedabad" },
  { city: "Hyderabad", image: "https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?q=80&w=2070&auto=format&fit=crop", routes: "Chennai, Mumbai, Bangalore, Delhi" },
  { city: "Delhi", image: "https://plus.unsplash.com/premium_photo-1661916190661-60d195b7e402?q=80&w=2070&auto=format&fit=crop", routes: "Mumbai, Pune, Bangalore, Chennai" },
  { city: "Pune", image: "https://images.unsplash.com/photo-1611529375210-577127775587?q=80&w=2070&auto=format&fit=crop", routes: "Delhi, Bangalore, Chennai, Ahmedabad" },
  { city: "Kolkata", image: "https://images.unsplash.com/photo-1582219435545-57221e57a292?q=80&w=1974&auto=format&fit=crop", routes: "Delhi, Mumbai, Bangalore, Pune" },
  { city: "Bangalore", image: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=1944&auto=format&fit=crop", routes: "Delhi, Pune, Mumbai, Kolkata" },
  { city: "Jaipur", image: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa?q=80&w=2070&auto=format&fit=crop", routes: "Mumbai, Delhi, Pune, Bangalore" },
];

// Sample flight times and prices
const flightTimes = [
  "06:00 AM - 08:30 AM",
  "09:15 AM - 11:45 AM",
  "12:30 PM - 03:00 PM",
  "04:45 PM - 07:15 PM",
  "08:00 PM - 10:30 PM"
];

const airlines = [
  "IndiGo",
  "Air India",
  "SpiceJet",
  "Vistara",
  "GoAir"
];

const prices = [
  "₹3,499",
  "₹4,299",
  "₹3,850",
  "₹5,125",
  "₹4,765"
];

function FlightCards({ 
  tripType, 
  selectedFrom, 
  selectedTo, 
  departureDate, 
  returnDate,
  hasSearched 
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [userSelection, setUserSelection] = useState(null);
  
  // Generate search results based on user inputs
  useEffect(() => {
    if (hasSearched && selectedFrom && selectedTo) {
      // Create flight results based on selections
      const randomFlights = generateRandomFlights(
        selectedFrom.name, 
        selectedTo.name, 
        departureDate, 
        returnDate, 
        tripType
      );
      
      setSearchResults(randomFlights);
      
      // Create user selection display text
      setUserSelection({
        from: selectedFrom.name.split(",")[0],
        to: selectedTo.name.split(",")[0],
        departure: format(departureDate, "dd MMM yyyy"),
        return: tripType !== "oneway" ? format(returnDate, "dd MMM yyyy") : null,
        tripType
      });
    }
  }, [hasSearched, selectedFrom, selectedTo, departureDate, returnDate, tripType]);

  // Generate random flight results
  const generateRandomFlights = (from, to, depDate, retDate, type) => {
    const results = [];
    
    // Generate 3-5 random flights
    const flightCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < flightCount; i++) {
      const timeIndex = Math.floor(Math.random() * flightTimes.length);
      const airlineIndex = Math.floor(Math.random() * airlines.length);
      const priceIndex = Math.floor(Math.random() * prices.length);
      
      results.push({
        id: `F${i+1000}`,
        from: from.split(",")[0],
        to: to.split(",")[0],
        departureTime: flightTimes[timeIndex].split(" - ")[0],
        arrivalTime: flightTimes[timeIndex].split(" - ")[1],
        airline: airlines[airlineIndex],
        price: prices[priceIndex],
        date: format(depDate, "dd MMM"),
        duration: "2h 30m",
        direct: Math.random() > 0.3 ? "Direct" : "1 Stop"
      });
    }
    
    return results;
  };

  return (
    <div>
      {/* Heading */}
      {hasSearched && userSelection ? (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">
            {userSelection.from} to {userSelection.to} Flights
          </h2>
          <p className="text-center text-gray-600 mt-2">
            {userSelection.departure} 
            {userSelection.return ? ` - ${userSelection.return}` : ""} • 
            {userSelection.tripType === "oneway" ? " One Way" : 
             userSelection.tripType === "roundtrip" ? " Round Trip" : " Multi City"}
          </p>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-center mb-6">Popular Flight Routes</h2>
      )}
      
      {/* Display search results when available */}
      {hasSearched && searchResults.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
       {searchResults.map((flight, index) => (
         <div key={flight.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-center flex-wrap">
             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 flex-shrink-0">
                 <img 
                   src={`https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=2070&auto=format&fit=crop`} 
                   alt={flight.airline} 
                   className="w-full h-full object-contain rounded"
                 />
               </div>
               <div>
                 <p className="font-semibold">{flight.airline}</p>
                 <p className="text-sm text-gray-500">{flight.id} • {flight.direct}</p>
               </div>
             </div>
     
             <div className="flex items-center space-x-8 mt-2 sm:mt-0">
               <div className="text-center">
                 <p className="font-semibold">{flight.departureTime}</p>
                 <p className="text-sm text-gray-500">{flight.from}</p>
               </div>
     
               <div className="flex flex-col items-center">
                 <p className="text-xs text-gray-400">{flight.duration}</p>
                 <div className="w-20 h-0.5 bg-gray-300 relative my-1">
                   <div className="absolute rounded-full w-2 h-2 bg-blue-500 -top-0.5 left-0"></div>
                   <div className="absolute rounded-full w-2 h-2 bg-blue-500 -top-0.5 right-0"></div>
                 </div>
                 <p className="text-xs text-gray-400">{flight.date}</p>
               </div>
     
               <div className="text-center">
                 <p className="font-semibold">{flight.arrivalTime}</p>
                 <p className="text-sm text-gray-500">{flight.to}</p>
               </div>
     
               <div>
                 <p className="font-bold text-lg">{flight.price}</p>
                 <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1 rounded-lg mt-1 transition-colors">
                   Book Now
                 </button>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
     
      ) : null}
      
      {/* Popular flight routes grid */}
      {/*  */}
    </div>
  );
}

export default FlightCards;