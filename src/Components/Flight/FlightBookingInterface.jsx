import React, { useState } from "react";
import {
  Plane,
  Hotel,
  Car,
  Home,
  CreditCard,
  Shield,
  Train,
  Bus,
  Umbrella,
  ChevronDown,
  Calendar,
} from "lucide-react";

const FlightBookingInterface = ({ onSearch }) => {
  const [tripType, setTripType] = useState("oneWay");
  const [fareType, setFareType] = useState("regular");
  const [fromCity, setFromCity] = useState("Mumbai");
  const [toCity, setToCity] = useState("Kerala");
  const [departureDate, setDepartureDate] = useState("01 Jan");
  const [returnDate, setReturnDate] = useState("21 Mar");
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Flights");

  const [navItems, setNavItems] = useState([
    { icon: <Plane size={20} />, text: "Flights", active: true },
    { icon: <Hotel size={20} />, text: "Hotels", active: false },
    { icon: <Car size={20} />, text: "Cabs", active: false },
    { icon: <Home size={20} />, text: "Homestays & Villa", active: false },
    { icon: <CreditCard size={20} />, text: "Forex Card", active: false },
    { icon: <Shield size={20} />, text: "Travel Insurance", active: false },
    { icon: <Train size={20} />, text: "Trains", active: false },
    { icon: <Bus size={20} />, text: "Buses", active: false },
    { icon: <Umbrella size={20} />, text: "Holiday packages", active: false },
  ]);

  const fareOptions = [
    { id: "regular", label: "Regular", subtext: "Regular fares" },
    { id: "student", label: "Student", subtext: "Extra discounts/baggage" },
    { id: "senior", label: "Senior Citizen", subtext: "Up to ₹ 600 off" },
    { id: "armed", label: "Armed Forces", subtext: "Up to ₹ 600 off" },
    { id: "doctor", label: "Doctor and Nurses", subtext: "Up to ₹ 600 off" },
  ];

  // Calendar data
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar dates for current month and next month
  const generateCalendarDates = (startMonth = 0) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + startMonth;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const dates = [];
    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.push(null);
    }

    // Add dates for the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayOfWeek = days[date.getDay()];
      dates.push({
        day: i,
        month: months[month],
        year: year,
        dayOfWeek,
        disabled: date < today, // Disable past dates
      });
    }

    return {
      month: months[month],
      year,
      dates,
    };
  };

  const currentMonth = generateCalendarDates(0);
  const nextMonth = generateCalendarDates(1);

  const handleDateSelection = (day, month, dayOfWeek, isReturn = false) => {
    const dateStr = `${day < 10 ? "0" + day : day} ${month}`;

    if (isReturn) {
      // Check if return date is after departure date
      const depDay = parseInt(departureDate.split(" ")[0]);
      const depMonth = departureDate.split(" ")[1];

      const depMonthIndex = months.indexOf(depMonth);
      const selMonthIndex = months.indexOf(month);

      if (
        selMonthIndex < depMonthIndex ||
        (selMonthIndex === depMonthIndex && day < depDay)
      ) {
        alert("Return date must be after departure date");
        return;
      }

      setReturnDate(dateStr);
      setShowReturnCalendar(false);
    } else {
      setDepartureDate(dateStr);
      setShowDepartureCalendar(false);

      // If return date is before departure date, update return date too
      const retDay = parseInt(returnDate.split(" ")[0]);
      const retMonth = returnDate.split(" ")[1];

      const retMonthIndex = months.indexOf(retMonth);
      const selMonthIndex = months.indexOf(month);

      if (
        selMonthIndex > retMonthIndex ||
        (selMonthIndex === retMonthIndex && day > retDay)
      ) {
        // Set return date to the same as departure date
        setReturnDate(dateStr);
      }
    }
  };

  // const handleSearch = () => {
  //   // Get day of week for the selected dates
  //   const getDayOfWeek = (dateStr) => {
  //     const [day, month] = dateStr.split(" ");
  //     const monthIndex = months.indexOf(month);
  //     const date = new Date(
  //       new Date().getFullYear(),
  //       monthIndex,
  //       parseInt(day)
  //     );
  //     return days[date.getDay()];
  //   };

  //   // Pass flight search parameters to parent component
  //   onSearch({
  //     tripType,
  //     fareType,
  //     fromCity,
  //     toCity,
  //     departureDate,
  //     departureDay: getDayOfWeek(departureDate),
  //     returnDate,
  //     returnDay: getDayOfWeek(returnDate),
  //   });
  // };

  const handleSearch = () => {
    // Get day of week for the selected dates
    const getDayOfWeek = (dateStr) => {
      const [day, month] = dateStr.split(" ");
      const monthIndex = months.indexOf(month);
      const date = new Date(
        new Date().getFullYear(),
        monthIndex,
        parseInt(day)
      );
      return days[date.getDay()];
    };

    // Pass flight search parameters to parent component
    onSearch({
      navType: activeNavItem, // Add this line
      tripType,
      fareType,
      fromCity,
      toCity,
      departureDate,
      departureDay: getDayOfWeek(departureDate),
      returnDate,
      returnDay: getDayOfWeek(returnDate),
    });
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
      {/* Navigation */}
      <div className="flex overflow-x-auto pb-4 gap-4 mb-6">
        {/* {navItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center justify-center min-w-fit ${item.active ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-sm whitespace-nowrap">{item.text}</span>
          </div>
        ))} */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center min-w-fit cursor-pointer ${
              item.active ? "text-blue-500" : "text-gray-600"
            }`}
            onClick={() => {
              // Create a new array with updated active states
              const updatedNavItems = navItems.map((navItem) => ({
                ...navItem,
                active: navItem.text === item.text,
              }));
              // Update the navItems state
              setNavItems(updatedNavItems);

              // Update activeNavItem state
              setActiveNavItem(item.text);

              // Call onNavChange prop if it exists
              if (onNavChange) {
                onNavChange(item.text);
              }
            }}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-sm whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Trip Type Selection */}
      <div className="flex gap-6 mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-blue-500 h-4 w-4"
            checked={tripType === "oneWay"}
            onChange={() => setTripType("oneWay")}
          />
          <span className="ml-2 text-sm">One Way</span>
        </label>

        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-blue-500 h-4 w-4"
            checked={tripType === "roundTrip"}
            onChange={() => setTripType("roundTrip")}
          />
          <span className="ml-2 text-sm">Round Trip</span>
        </label>

        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-blue-500 h-4 w-4"
            checked={tripType === "multiCity"}
            onChange={() => setTripType("multiCity")}
          />
          <span className="ml-2 text-sm">Multi City</span>
        </label>
      </div>

      {/* Flight Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
        {/* From */}
        <div className="border rounded-md p-3">
          <div className="text-xs text-gray-500 mb-1">From</div>
          <select
            className="font-bold bg-transparent border-none w-full focus:outline-none"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Goa">Goa</option>
          </select>
          <div className="text-xs text-gray-500">
            Chhatrapati Shivaji International Airport
          </div>
        </div>

        {/* To */}
        <div className="border rounded-md p-3">
          <div className="text-xs text-gray-500 mb-1">To</div>
          <select
            className="font-bold bg-transparent border-none w-full focus:outline-none"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          >
            <option value="Kerala">Kerala</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Goa">Goa</option>
          </select>
          <div className="text-xs text-gray-500">
            Kannur International Airport
          </div>
        </div>

        {/* Departure Date with Calendar */}
        <div className="border rounded-md p-3 relative">
          <div className="text-xs text-gray-500 mb-1">Departure</div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowDepartureCalendar(!showDepartureCalendar)}
          >
            <div className="font-bold">{departureDate}</div>
            <Calendar size={16} className="ml-2 text-blue-500" />
          </div>

          {/* Calendar Dropdown */}
          {showDepartureCalendar && (
            <div className="absolute z-10 mt-2 left-0 w-64 bg-white rounded-md shadow-lg p-3 border">
              <div className="mb-4">
                <div className="text-center font-bold mb-2">
                  {currentMonth.month} {currentMonth.year}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-center text-xs font-semibold text-gray-500"
                    >
                      {day.charAt(0)}
                    </div>
                  ))}

                  {currentMonth.dates.map((date, index) => (
                    <div
                      key={index}
                      className={`
                        text-center p-1 text-sm rounded cursor-pointer
                        ${!date ? "invisible" : ""}
                        ${
                          date && date.disabled
                            ? "text-gray-300 cursor-not-allowed"
                            : "hover:bg-blue-100"
                        }
                        ${
                          date &&
                          !date.disabled &&
                          `${date.day} ${date.month}` === departureDate
                            ? "bg-blue-500 text-white"
                            : ""
                        }
                      `}
                      onClick={() =>
                        date &&
                        !date.disabled &&
                        handleDateSelection(
                          date.day,
                          date.month,
                          date.dayOfWeek
                        )
                      }
                    >
                      {date ? date.day : ""}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-center font-bold mb-2">
                  {nextMonth.month} {nextMonth.year}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-center text-xs font-semibold text-gray-500"
                    >
                      {day.charAt(0)}
                    </div>
                  ))}

                  {nextMonth.dates.map((date, index) => (
                    <div
                      key={index}
                      className={`
                        text-center p-1 text-sm rounded cursor-pointer
                        ${!date ? "invisible" : ""}
                        ${
                          date && date.disabled
                            ? "text-gray-300 cursor-not-allowed"
                            : "hover:bg-blue-100"
                        }
                        ${
                          date &&
                          !date.disabled &&
                          `${date.day} ${date.month}` === departureDate
                            ? "bg-blue-500 text-white"
                            : ""
                        }
                      `}
                      onClick={() =>
                        date &&
                        !date.disabled &&
                        handleDateSelection(
                          date.day,
                          date.month,
                          date.dayOfWeek
                        )
                      }
                    >
                      {date ? date.day : ""}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Return Date with Calendar - REMOVED DISABLED STATE */}
        <div className="border rounded-md p-3 relative">
          <div className="text-xs text-gray-500 mb-1">Return</div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowReturnCalendar(!showReturnCalendar)}
          >
            <div className="font-bold">{returnDate}</div>
            <Calendar size={16} className="ml-2 text-blue-500" />
          </div>

          {/* Calendar Dropdown */}
          {showReturnCalendar && (
            <div className="absolute z-10 mt-2 right-0 w-64 bg-white rounded-md shadow-lg p-3 border">
              <div className="mb-4">
                <div className="text-center font-bold mb-2">
                  {currentMonth.month} {currentMonth.year}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-center text-xs font-semibold text-gray-500"
                    >
                      {day.charAt(0)}
                    </div>
                  ))}

                  {currentMonth.dates.map((date, index) => {
                    // Calculate if this date should be disabled based on departure date
                    const [depDay, depMonth] = departureDate.split(" ");
                    const depDayNum = parseInt(depDay);
                    const depMonthIndex = months.indexOf(depMonth);
                    const dateMonthIndex = date
                      ? months.indexOf(date.month)
                      : -1;

                    const isBeforeDeparture =
                      date &&
                      (dateMonthIndex < depMonthIndex ||
                        (dateMonthIndex === depMonthIndex &&
                          date.day < depDayNum));

                    return (
                      <div
                        key={index}
                        className={`
                          text-center p-1 text-sm rounded
                          ${!date ? "invisible" : ""}
                          ${
                            (date && date.disabled) || isBeforeDeparture
                              ? "text-gray-300 cursor-not-allowed"
                              : "hover:bg-blue-100 cursor-pointer"
                          }
                          ${
                            date &&
                            !date.disabled &&
                            !isBeforeDeparture &&
                            `${date.day} ${date.month}` === returnDate
                              ? "bg-blue-500 text-white"
                              : ""
                          }
                        `}
                        onClick={() => {
                          if (date && !date.disabled && !isBeforeDeparture) {
                            handleDateSelection(
                              date.day,
                              date.month,
                              date.dayOfWeek,
                              true
                            );
                          }
                        }}
                      >
                        {date ? date.day : ""}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-center font-bold mb-2">
                  {nextMonth.month} {nextMonth.year}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-center text-xs font-semibold text-gray-500"
                    >
                      {day.charAt(0)}
                    </div>
                  ))}

                  {nextMonth.dates.map((date, index) => {
                    // Calculate if this date should be disabled based on departure date
                    const [depDay, depMonth] = departureDate.split(" ");
                    const depDayNum = parseInt(depDay);
                    const depMonthIndex = months.indexOf(depMonth);
                    const dateMonthIndex = date
                      ? months.indexOf(date.month)
                      : -1;

                    const isBeforeDeparture =
                      date &&
                      (dateMonthIndex < depMonthIndex ||
                        (dateMonthIndex === depMonthIndex &&
                          date.day < depDayNum));

                    return (
                      <div
                        key={index}
                        className={`
                          text-center p-1 text-sm rounded
                          ${!date ? "invisible" : ""}
                          ${
                            (date && date.disabled) || isBeforeDeparture
                              ? "text-gray-300 cursor-not-allowed"
                              : "hover:bg-blue-100 cursor-pointer"
                          }
                          ${
                            date &&
                            !date.disabled &&
                            !isBeforeDeparture &&
                            `${date.day} ${date.month}` === returnDate
                              ? "bg-blue-500 text-white"
                              : ""
                          }
                        `}
                        onClick={() => {
                          if (date && !date.disabled && !isBeforeDeparture) {
                            handleDateSelection(
                              date.day,
                              date.month,
                              date.dayOfWeek,
                              true
                            );
                          }
                        }}
                      >
                        {date ? date.day : ""}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fare Options */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-3">Select a special fare</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {fareOptions.map((option) => (
            <label
              key={option.id}
              className={`border rounded-md p-3 cursor-pointer transition-all 
                ${
                  fareType === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="fareType"
                  value={option.id}
                  checked={fareType === option.id}
                  onChange={() => setFareType(option.id)}
                  className="mr-2 text-blue-500"
                />
                <div>
                  <div className="text-sm font-medium">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.subtext}</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition-colors"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default FlightBookingInterface;
