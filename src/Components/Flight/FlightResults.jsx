import React from 'react';

const FlightResults = ({ searchParams }) => {
  const { fromCity, toCity, departureDate, departureDay, returnDate, returnDay, tripType, fareType } = searchParams;

  // Generate flight data
  const generateFlights = () => {
    const airlines = [
      { name: 'Air India', logo: 'https://promos.makemytrip.com/appfest/2x//DF-Desktop-TKSS-12Mar.jpg?im=Resize=(134,134)' },
      { name: 'SpiceJet', logo: 'https://promos.makemytrip.com/appfest/2x//DF-Desktop-TKSS-12Mar.jpg?im=Resize=(134,134)' },
      { name: 'Vistara', logo: 'https://promos.makemytrip.com/appfest/2x//DF-Desktop-TKSS-12Mar.jpg?im=Resize=(134,134)' },
      { name: 'GoAir', logo: 'https://promos.makemytrip.com/appfest/2x//DF-Desktop-TKSS-12Mar.jpg?im=Resize=(134,134)' },
      { name: 'IndiGo', logo: 'https://promos.makemytrip.com/appfest/2x//DF-Desktop-TKSS-12Mar.jpg?im=Resize=(134,134)' }
    ];
    
    const departureHours = ['06:30', '08:45', '10:15', '13:20', '15:00', '17:45', '19:30', '21:10'];
    const durations = ['2h 10m', '2h 25m', '2h 35m', '2h 50m', '3h 05m', '3h 20m'];
    
    // Calculate arrival time based on departure time and duration
    const getArrivalTime = (departure, duration) => {
      const [depHour, depMinute] = departure.split(':').map(part => parseInt(part));
      const [durationHour, durationMinute] = duration.split('h ').map(part => parseInt(part.replace('m', '')));
      
      let arrivalHour = depHour + durationHour;
      let arrivalMinute = depMinute + durationMinute;
      
      if (arrivalMinute >= 60) {
        arrivalHour += 1;
        arrivalMinute -= 60;
      }
      
      arrivalHour = arrivalHour % 24;
      
      return `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;
    };
    
    // Base prices for different fare types
    const getPriceByFareType = (basePrice) => {
      switch (fareType) {
        case 'student':
          return basePrice - 500;
        case 'senior':
        case 'armed':
        case 'doctor':
          return basePrice - 600;
        default:
          return basePrice;
      }
    };

    // Generate random flight data
    const flightCount = Math.floor(Math.random() * 4) + 3; // 6 to 9 flights
    const flights = [];
    
    for (let i = 0; i < flightCount; i++) {
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const departureTime = departureHours[Math.floor(Math.random() * departureHours.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      const arrivalTime = getArrivalTime(departureTime, duration);
      const basePrice = 3000 + Math.floor(Math.random() * 5000);
      
      flights.push({
        id: i,
        airline,
        flightNumber: `${airline.name.substr(0, 2).toUpperCase()}${1000 + Math.floor(Math.random() * 9000)}`,
        departureTime,
        arrivalTime,
        duration,
        directFlight: Math.random() > 0.3, // 70% direct flights
        price: getPriceByFareType(basePrice),
        departureDate,
        departureDay,
        arrivalDate: departureDate, // Same day arrival for simplicity
        fromCity,
        toCity
      });
    }
    
    return flights.sort((a, b) => a.price - b.price); // Sort by price
  };
  
  const outboundFlights = generateFlights();
  const returnFlights = tripType === 'roundTrip' ? generateFlights() : [];
  
  // Flight Card Component with enhanced styling similar to hotel card
  const FlightCard = ({ flight, isReturn = false }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-1 transform">
        <div className="relative">
          <div className="flex items-center justify-between bg-gray-50 p-3 border-b">
            <div className="flex items-center">
              <img src={flight.airline.logo} alt={flight.airline.name} className="w-8 h-8 rounded-full mr-2" />
              <div>
                <div className="font-bold text-sm">{flight.airline.name}</div>
                <div className="text-xs text-gray-500">{flight.flightNumber}</div>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-md">
              <div className="text-sm font-bold text-indigo-600">₹ {flight.price}</div>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <div className="font-bold text-lg">{flight.departureTime}</div>
              <div className="text-xs text-gray-500">{isReturn ? flight.toCity : flight.fromCity}</div>
            </div>
            
            <div className="flex flex-col items-center px-2">
              <div className="text-xs text-gray-500 font-medium">{flight.duration}</div>
              <div className="relative w-20 h-px bg-gray-300 my-2">
                {!flight.directFlight && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
                )}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {flight.directFlight ? 
                  <span className="text-green-500">Direct</span> : 
                  <span className="text-orange-500">1 Stop</span>
                }
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-bold text-lg">{flight.arrivalTime}</div>
              <div className="text-xs text-gray-500">{isReturn ? flight.fromCity : flight.toCity}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 border-t pt-4">
            <div>
              <div className="text-xs text-gray-500">Date</div>
              <div className="text-sm font-medium">{flight.departureDate}</div>
              <div className="text-xs text-gray-500">{flight.departureDay}</div>
            </div>
            
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Outbound Flights */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {fromCity} → {toCity} | {departureDate} ({departureDay})
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outboundFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
      
      {/* Return Flights (if round trip) */}
      {tripType === 'roundTrip' && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {toCity} → {fromCity} | {returnDate} ({returnDay})
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {returnFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} isReturn={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightResults;