import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";

const Departure = ({ setDepartureDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize departure date on component mount
  useEffect(() => {
    if (setDepartureDate) {
      setDepartureDate(startDate);
    }
  }, []);

  const handleDateChange = (date) => {
    setStartDate(date);
    if (setDepartureDate) {
      setDepartureDate(date);
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

  // Format date manually without date-fns
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Button to Toggle Date Picker */}
      <div
        className="border-none shadow-md p-3 rounded-lg cursor-pointer flex justify-between items-center bg-white h-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Departure</p>
          <p className="text-base sm:text-lg md:text-xl font-bold">{formatDate(startDate)}</p>
          <p className="text-gray-500 text-xs sm:text-sm">{getDayName(startDate)}</p>
        </div>
        <FaChevronDown className="text-blue-500" />
      </div>

      {/* Date Picker */}
      {isOpen && (
        <div className="absolute mt-2 z-50 bg-white p-4 shadow-lg rounded-lg">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            minDate={new Date()}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default Departure;