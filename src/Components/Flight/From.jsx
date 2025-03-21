// import React, { useState, useRef, useEffect } from "react";
// import { FaPlane } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";

// const airports = {
//   recent: [
//     { name: "Mumbai, India", code: "BOM", details: "Chhatrapati Shivaji International Airport" },
//   ],
//   popular: [
//     { name: "Indore, India", code: "IDR", details: "Devi Ahilyabai Holkar International Airport" },
//     { name: "New Delhi, India", code: "DEL", details: "Indira Gandhi International Airport" },
//     { name: "Bangkok, Thailand", code: "BKK", details: "Bangkok" },
//   ],
// };

// const From = ({ setSelectedFrom }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedAirport, setSelectedAirport] = useState(airports.recent[0]);
//   const dropdownRef = useRef(null);

//   // Initialize selectedFrom with the default airport on component mount
//   useEffect(() => {
//     setSelectedFrom(selectedAirport);
//   }, []);

//   const handleSelect = (airport) => {
//     setSelectedAirport(airport);
//     setSelectedFrom(airport); // Send selected airport to Flight.js
//     setIsOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const filteredAirports = (category) =>
//     airports[category].filter((airport) =>
//       airport.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   return (
//     <div className="relative w-full xs:w-48 sm:w-48 md:w-48 lg:w-56 xl:w-72 2xl:w-80" ref={dropdownRef}>
//       {/* Input Box */}
//       <div
//         className="border-none drop-shadow-sm p-2 xs:p-3 rounded-l-lg cursor-pointer bg-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <p className="text-gray-500 text-xs xs:text-sm">From</p>
//         <p className="text-lg xs:text-xl font-bold">{selectedAirport.name.split(",")[0]}</p>
//         <p className="text-xs xs:text-sm text-gray-500 truncate">{selectedAirport.details}</p>
//       </div>

//       {/* Dropdown */}
//       {isOpen && (
//         <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
//           {/* Search Bar */}
//           <div className="p-2 border-b flex items-center">
//             <IoIosSearch className="text-gray-400 text-xl ml-2" />
//             <input
//               type="text"
//               placeholder="From"
//               className="w-full px-3 py-1 outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           {/* Recent Searches */}
//           {filteredAirports("recent").length > 0 && (
//             <div className="p-2">
//               <p className="text-gray-500 text-xs mb-1">RECENT SEARCHES</p>
//               {filteredAirports("recent").map((airport) => (
//                 <div
//                   key={airport.code}
//                   className="flex justify-between p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSelect(airport)}
//                 >
//                   <div className="flex items-center gap-2">
//                     <FaPlane className="text-gray-400 text-sm" />
//                     <div>
//                       <p className="font-semibold text-sm xs:text-base">{airport.name}</p>
//                       <p className="text-xs text-gray-500">{airport.details}</p>
//                     </div>
//                   </div>
//                   <span className="text-gray-400 text-sm">{airport.code}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Popular Cities */}
//           {filteredAirports("popular").length > 0 && (
//             <div className="p-2">
//               <p className="text-gray-500 text-xs mb-1">POPULAR CITIES</p>
//               {filteredAirports("popular").map((airport) => (
//                 <div
//                   key={airport.code}
//                   className="flex justify-between p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSelect(airport)}
//                 >
//                   <div className="flex items-center gap-2">
//                     <FaPlane className="text-gray-400 text-sm" />
//                     <div>
//                       <p className="font-semibold text-sm xs:text-base">{airport.name}</p>
//                       <p className="text-xs text-gray-500">{airport.details}</p>
//                     </div>
//                   </div>
//                   <span className="text-gray-400 text-sm">{airport.code}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default From;

// From.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const airports = {
  recent: [
    { name: "Mumbai, India", code: "BOM", details: "Chhatrapati Shivaji International Airport" },
  ],
  popular: [
    { name: "Indore, India", code: "IDR", details: "Devi Ahilyabai Holkar International Airport" },
    { name: "New Delhi, India", code: "DEL", details: "Indira Gandhi International Airport" },
    { name: "Bangkok, Thailand", code: "BKK", details: "Bangkok" },
  ],
};

const From = ({ setSelectedFrom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAirport, setSelectedAirport] = useState(airports.recent[0]);
  const dropdownRef = useRef(null);

  // Initialize selectedFrom with the default airport on component mount
  useEffect(() => {
    setSelectedFrom(selectedAirport);
  }, []);

  const handleSelect = (airport) => {
    setSelectedAirport(airport);
    setSelectedFrom(airport); // Send selected airport to Flight.js
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredAirports = (category) =>
    airports[category].filter((airport) =>
      airport.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Input Box */}
      <div
        className="border-none shadow-md p-3 rounded-lg cursor-pointer bg-white h-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-gray-500 text-xs sm:text-sm">From</p>
        <p className="text-base sm:text-lg md:text-xl font-bold">{selectedAirport.name.split(",")[0]}</p>
        <p className="text-xs sm:text-sm text-gray-500 truncate">{selectedAirport.details}</p>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-50">
          {/* Search Bar */}
          <div className="p-2 border-b flex items-center">
            <IoIosSearch className="text-gray-400 text-xl ml-2" />
            <input
              type="text"
              placeholder="From"
              className="w-full px-3 py-2 outline-none text-sm sm:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Recent Searches */}
          {filteredAirports("recent").length > 0 && (
            <div className="p-2">
              <p className="text-gray-500 text-xs mb-1">RECENT SEARCHES</p>
              {filteredAirports("recent").map((airport) => (
                <div
                  key={airport.code}
                  className="flex justify-between p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(airport)}
                >
                  <div className="flex items-center gap-2">
                    <FaPlane className="text-gray-400 text-sm" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{airport.name}</p>
                      <p className="text-xs text-gray-500">{airport.details}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{airport.code}</span>
                </div>
              ))}
            </div>
          )}

          {/* Popular Cities */}
          {filteredAirports("popular").length > 0 && (
            <div className="p-2">
              <p className="text-gray-500 text-xs mb-1">POPULAR CITIES</p>
              {filteredAirports("popular").map((airport) => (
                <div
                  key={airport.code}
                  className="flex justify-between p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(airport)}
                >
                  <div className="flex items-center gap-2">
                    <FaPlane className="text-gray-400 text-sm" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{airport.name}</p>
                      <p className="text-xs text-gray-500">{airport.details}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{airport.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default From;