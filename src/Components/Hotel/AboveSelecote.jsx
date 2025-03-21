import React, { useState } from "react";


function AboveSelector() {
  const [tripType, setTripType] = useState("4rooms");
  return (
    <div>
      <div className="flex space-x-5 text-sm mb-2 px-10 mt-2">
        {[
          { label: "Upto 4 Rooms", value: "4rooms" },
          { label: "Group Deals", value: "GroupDeals" },
        
        ].map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name="tripType"
              value={option.value}
              checked={tripType === option.value}
              onChange={(e) => setTripType(e.target.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default AboveSelector;