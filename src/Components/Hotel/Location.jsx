import React, { useState, useRef, useEffect } from "react";

function Location() {
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
    <div className="relative w-full xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96" ref={dropdownRef}>
      <div
        className="p-3 xs:p-4 rounded-l-lg bg-white shadow-md cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className="text-gray-500 text-xs xs:text-sm">City, Property Name Or Location</p>
        <h2 className="text-lg xs:text-xl font-bold">{selectedLocation}</h2>
        <p className="text-gray-400 text-xs xs:text-sm">India</p>
      </div>
      {isDropdownOpen && (
        <div className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-2 z-10">
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="w-full p-2 border-b outline-none text-gray-700 text-sm xs:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-100 text-sm xs:text-base ${
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
}

export default Location;