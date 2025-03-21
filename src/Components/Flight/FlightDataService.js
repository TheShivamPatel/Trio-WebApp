// FlightDataService.js
const flightRoutes = {
    "Mumbai-Kerala": [
      {
        id: 1,
        airline: "IndiGo",
        flightNumber: "6E 172",
        departureCity: "Mumbai",
        arrivalCity: "Kochi",
        departureTime: "06:15",
        arrivalTime: "08:20",
        duration: "2h 05m",
        basePrice: 3249,
        image: "/Images/indigo.png",
      },
      {
        id: 2,
        airline: "Air India",
        flightNumber: "AI 683",
        departureCity: "Mumbai",
        arrivalCity: "Kochi",
        departureTime: "10:30",
        arrivalTime: "12:45",
        duration: "2h 15m",
        basePrice: 4120,
        image: "/Images/airindia.png",
      },
      {
        id: 3,
        airline: "Vistara",
        flightNumber: "UK 533",
        departureCity: "Mumbai",
        arrivalCity: "Kochi",
        departureTime: "14:25",
        arrivalTime: "16:40",
        duration: "2h 15m",
        basePrice: 4590,
        image: "/Images/vistara.png",
      },
      {
        id: 4,
        airline: "SpiceJet",
        flightNumber: "SG 279",
        departureCity: "Mumbai",
        arrivalCity: "Kochi",
        departureTime: "18:45",
        arrivalTime: "21:00",
        duration: "2h 15m",
        basePrice: 3150,
        image: "/Images/spicejet.png",
      },
    ],
    "Delhi-Mumbai": [
      {
        id: 5,
        airline: "IndiGo",
        flightNumber: "6E 256",
        departureCity: "Delhi",
        arrivalCity: "Mumbai",
        departureTime: "07:30",
        arrivalTime: "09:45",
        duration: "2h 15m",
        basePrice: 3750,
        image: "/Images/indigo.png",
      },
      {
        id: 6,
        airline: "Air India",
        flightNumber: "AI 865",
        departureCity: "Delhi",
        arrivalCity: "Mumbai",
        departureTime: "11:20",
        arrivalTime: "13:35",
        duration: "2h 15m",
        basePrice: 4350,
        image: "/Images/airindia.png",
      },
    ],
    // Add more routes as needed
  };
  
  // Class multipliers for ticket prices
  const classMultipliers = {
    Economy: 1.0,
    "Premium Economy": 1.5,
    Business: 2.5,
    "First Class": 4.0,
  };
  
  // Date-based price factors
  const getDateFactor = (selectedDate) => {
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    // Weekend flights cost more
    if (isWeekend) return 1.3;
    
    // Current month + next month bookings
    const currentDate = new Date();
    const daysDifference = Math.floor((date - currentDate) / (24 * 60 * 60 * 1000));
    
    if (daysDifference < 7) return 1.5; // Last minute booking (within a week)
    if (daysDifference < 14) return 1.2; // Within two weeks
    if (daysDifference < 30) return 1.1; // Within a month
    
    return 1.0; // Regular price for advance bookings
  };
  
  export const getFlights = (from, to, departureDate, returnDate, travelClass) => {
    // Default to Mumbai-Kerala if no specific route found
    const routeKey = `${from}-${to}`;
    const routeExists = flightRoutes[routeKey];
    const flights = routeExists ? flightRoutes[routeKey] : flightRoutes["Mumbai-Kerala"];
    
    const classMultiplier = classMultipliers[travelClass] || 1.0;
    const dateFactor = getDateFactor(departureDate);
    
    // Calculate final prices based on class and date
    const flightsWithPricing = flights.map(flight => ({
      ...flight,
      price: Math.round(flight.basePrice * classMultiplier * dateFactor),
      departureDate: departureDate,
      returnDate: returnDate,
      class: travelClass
    }));
    
    return flightsWithPricing;
  };