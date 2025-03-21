// FlightContext.js
import React, { createContext, useState, useContext } from 'react';

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightSearchParams, setFlightSearchParams] = useState({
    from: "Mumbai",
    to: "Kerala",
    departureDate: new Date().toISOString().split('T')[0], // Today's date as default
    returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Week later as default
    travelClass: "Economy",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0
    }
  });

  const updateFlightSearch = (newParams) => {
    setFlightSearchParams(prev => ({
      ...prev,
      ...newParams
    }));
  };

  return (
    <FlightContext.Provider value={{ flightSearchParams, updateFlightSearch }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);