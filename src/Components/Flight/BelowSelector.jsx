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
    <div>
      <div className="flex gap-2 my-5 mx-8 ">
        <div className=" flex gap-2">
          <label className="text-sm font-bold pt-2  ">
            Select a special fare
          </label>
          {fares.map((fare) => (
            <label
              key={fare.label}
              className={`flex flex-col border rounded-md px-1 cursor-pointer ${
                selectedFare === fare.label
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="fare"
                value={fare.label}
                checked={selectedFare === fare.label}
                onChange={() => setSelectedFare(fare.label)}
                className="hidden"
              />
              <div className="p-2 flex  ">
                <span
                  className={`flex items-center text-lg ${
                    selectedFare === fare.label
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  <span
                    className={`w-4 h-4 border rounded-full flex items-center justify-center mr-2  ${
                      selectedFare === fare.label
                        ? "border-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedFare === fare.label && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full "></span>
                    )}
                  </span>
                </span>
                <div className="text-sm  ">
                  <div className="font-semibold"> {fare.label}</div>
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
  );
}

export default BelowSelector;