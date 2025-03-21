import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaChevronDown } from "react-icons/fa";

const Return = ({ setReturnDate }) => {
  // Set default return date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const [startDate, setStartDate] = useState(tomorrow);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize return date on component mount
  useEffect(() => {
    if (setReturnDate) {
      setReturnDate(startDate);
    }
  }, []);

  const handleDateChange = (date) => {
    setStartDate(date);
    if (setReturnDate) {
      setReturnDate(date);
    }
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
    <div className="relative w-full xs:min-w-48 sm:w-56 md:w-48 lg:w-56 xl:w-64 2xl:w-80">
      <div ref={dropdownRef}>
        {/* Button to Toggle Date Picker */}
        <div
          className="border-none drop-shadow-sm p-2 rounded-r-lg cursor-pointer flex justify-between items-center bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <p className="text-gray-500 text-xs xs:text-sm">Return</p>
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
              onChange={handleDateChange}
              minDate={new Date()}
              inline
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Return;