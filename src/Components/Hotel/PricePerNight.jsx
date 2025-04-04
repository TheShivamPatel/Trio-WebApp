import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function  PricePerNight() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState(["₹0-₹1500", "₹1500-₹2500"]);
  const dropdownRef = useRef(null);

  const priceOptions = ["₹0-₹1500", "₹1500-₹2500", "₹2500-₹5000", "₹5000+"];

  const handleSelect = (price) => {
    setSelectedPrices([price]);
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

  return (
    <div ref={dropdownRef} className="relative w-full p-3 bg-white shadow-md rounded-lg h-full">
      {/* Dropdown Button */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">Price Per Night</span>
        <IoIosArrowDown className={`text-blue-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Selected Prices Display */}
      <div className="mt-2 text-gray-900 text-sm sm:text-base font-semibold">
        {selectedPrices.join(", ")}...
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-lg z-50">
          {priceOptions.map((price, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(price)}
            >
              {price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};