import React, { useState } from "react";

function AboveSelector() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-2 sm:space-y-0 text-sm mb-2 px-4 sm:px-10 mt-2">
        {[
          { label: "One Way", value: "oneway" },
          { label: "Round Trip", value: "roundtrip" },
          { label: "Multi City", value: "multicity" },
        ].map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-2"
          >
            <input
              type="radio"
              name="tripType"
              value={option.value}
              checked={tripType === option.value}
              onChange={(e) => setTripType(e.target.value)}
              className="accent-blue-500" // Optional: Customize radio button color
            />
            <span className="whitespace-nowrap">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default AboveSelector;