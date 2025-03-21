import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaChevronDown } from "react-icons/fa";

const CheckOut = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="relative w-full xs:w-48 sm:w-56 md:w-60 lg:w-64 xl:w-72 2xl:w-80" ref={dropdownRef}>
      {/* Button to Toggle Date Picker */}
      <div
        className="border-none drop-shadow-lg p-3 xs:p-4 cursor-pointer flex justify-between items-center bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className="text-gray-500 text-xs xs:text-sm">Check-Out</p>
          <p className="text-lg xs:text-xl font-bold">{format(startDate, "dd MMM'")}</p>
          <p className="text-gray-500 text-xs xs:text-sm">{format(startDate, "EEEE")}</p>
        </div>
        <FaChevronDown className="text-blue-500" />
      </div>

      {/* Date Picker */}
      {isOpen && (
        <div className="absolute mt-2 z-10 bg-white p-4 shadow-lg rounded-lg">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setIsOpen(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CheckOut;