import React from "react";

const flightData = [
  {
    city: "Chennai",
    image: "https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Mumbai, Coimbatore, Madurai",
  },
  {
    city: "Goa",
    image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Mumbai, Bangalore, Ahmedabad",
  },
  {
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1621190462153-92bc87157fbe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Bangalore, Chennai, Ahmedabad",
  },
  {
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Chennai, Mumbai, Bangalore, Delhi",
  },
  {
    city: "Delhi",
    image: "https://plus.unsplash.com/premium_photo-1661916190661-60d195b7e402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Mumbai, Pune, Bangalore, Chennai",
  },
  {
    city: "Pune",
    image: "https://images.unsplash.com/photo-1611529375210-577127775587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Bangalore, Chennai, Ahmedabad",
  },
  {
    city: "Kolkata",
    image: "https://images.unsplash.com/photo-1582219435545-57221e57a292?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Mumbai, Bangalore, Pune",
  },
  {
    city: "Bangalore",
    image: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Delhi, Pune, Mumbai, Kolkata",
  },
  {
    city: "Jaipur",
    image: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    routes: "Mumbai, Delhi, Pune, Bangalore",
  },
];

function FlightCards() {
  return (
    <div className="max-w-7xl mx-auto p-4  rounded-xl shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flightData.map((flight, index) => (
          <div key={index} className="flex items-center space-x-2 p-1 bg-white rounded-3xl shadow-sm">
            <img
              src={flight.image}
              alt={flight.city}
              className="w-13 h-13 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{flight.city} Flights</h3>
              <p className="text-gray-600 text-sm">Via - {flight.routes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightCards;
