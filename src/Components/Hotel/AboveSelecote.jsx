import React, { useState } from "react";


const AboveSelector = () => {
  const [tripType, setTripType] = useState("4rooms");
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 text-sm mb-2 mt-2">
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
};

export default AboveSelector;