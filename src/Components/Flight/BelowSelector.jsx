import React, { useState } from "react";

function BelowSelector() {
  const [selectedFare, setSelectedFare] = useState("Regular");
  const fares = [
    { label: "Regular", description: "Regular fares" },
    { label: "Student", description: "Extra discounts/baggage" },
    { label: "Senior Citizen", description: "Up to ₹ 600 off" },
    { label: "Armed Forces", description: "Up to ₹ 600 off" },
    { label: "Doctor and Nurses", description: "Up to ₹ 600 off" },
  ];
  
  return (
    <div className="w-full">
      <div className="my-2 sm:my-3 md:my-4 lg:my-5 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col w-full">
          <label className="text-sm font-bold mb-2 sm:mb-3">
            Select a special fare
          </label>
          
          <div className="flex flex-wrap gap-2">
            {fares.map((fare) => (
              <label
                key={fare.label}
                className={`flex flex-row items-center border rounded-md cursor-pointer transition-colors
                  ${selectedFare === fare.label
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:bg-gray-50"
                  }
                  min-w-[140px] sm:min-w-[150px] flex-grow md:flex-grow-0`}
              >
                <input
                  type="radio"
                  name="fare"
                  value={fare.label}
                  checked={selectedFare === fare.label}
                  onChange={() => setSelectedFare(fare.label)}
                  className="hidden"
                />
                <div className="p-2 flex items-center w-full">
                  <span
                    className={`flex items-center ${
                      selectedFare === fare.label
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 border rounded-full flex items-center justify-center mr-2 
                        ${selectedFare === fare.label
                          ? "border-blue-500"
                          : "border-gray-400"
                        }`}
                    >
                      {selectedFare === fare.label && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </span>
                  </span>
                  <div className="text-sm">
                    <div className="font-semibold">{fare.label}</div>
                    <div className="text-xs text-gray-700">
                      {fare.description}
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BelowSelector;