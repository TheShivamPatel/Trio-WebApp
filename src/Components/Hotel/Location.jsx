import React, { useState, useRef, useEffect } from "react";

 const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState("Goa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const locations = ["Mumbai", "Bengaluru", "Goa", "Chennai", "Dubai", "Jaipur"];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="p-3 rounded-lg bg-white shadow-md cursor-pointer h-full"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className="text-gray-500 text-xs sm:text-sm">City, Property Name Or Location</p>
        <h2 className="text-base sm:text-lg md:text-xl font-bold">{selectedLocation}</h2>
        <p className="text-gray-400 text-xs sm:text-sm">India</p>
      </div>
      {isDropdownOpen && (
        <div className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-2 z-50">
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="w-full p-2 border-b outline-none text-gray-700 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-100 text-sm sm:text-base ${
                  selectedLocation === location ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsDropdownOpen(false);
                  setSearchTerm("");
                }}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Location;