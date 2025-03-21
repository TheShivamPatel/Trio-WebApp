import React from "react";
import KeralaPackages from "./KeralaPackages";

function Packages() {
  // Pilgrimage sites data
  const pilgrimageSites = [
    {
      name: "Rameswaram",
      image: "/rameswaram.jpg", // Replace with your actual image path
    },
    {
      name: "Puri",
      image: "/puri.jpg", // Replace with your actual image path
    },
    {
      name: "Dwarka",
      image: "/dwarka.jpg", // Replace with your actual image path
    },
    {
      name: "Ayodhya",
      image: "/ayodhya.jpg", // Replace with your actual image path
    },
  ];

  // Trending destinations data
  const trendingDestinations = [
    {
      name: "New Delhi, India",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fkerala&psig=AOvVaw0JrNYc6slb0kafKRaHQEPg&ust=1742573172287000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD4wImFmYwDFQAAAAAdAAAAABAE", // Replace with your actual image path
    },
    {
      name: "Bangalore, India",
      image: "/bangalore.jpg", // Replace with your actual image path
    },
    {
      name: "Mumbai, India",
      image: "/mumbai.jpg", // Replace with your actual image path
    },
    {
      name: "Chennai, India",
      image: "/chennai.jpg", // Replace with your actual image path
    },
    {
      name: "Varanasi, India",
      image: "/varanasi.jpg", // Replace with your actual image path
    },
  ];

  return (
    <div className="w-full">
      {/* Section 1: Spiritual Trails Hero Section */}
      <section className="relative w-full h-[500px]">
        <div className="absolute inset-0">
          <img
            src="../Images/packages/banner.jpg"
            alt="Spiritual Trails"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair text-white mb-2 italic">
          Adventure Awaits
          </h1>
          <h2 className="text-2xl md:text-4xl font-playfair text-white mb-8">
          Explore The World, One Journey At A Time.
          </h2>
          <div className="w-full max-w-3xl relative">
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search You Dream Pilgrimage!"
                className="flex-1 border-none h-14 pl-6 pr-4 rounded-l-full focus:outline-none font-mulish"
              />
              <button className="h-14 px-8 rounded-r-full bg-[#033f7b] hover:bg-[#022a54] text-white font-mulish transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

    

    <KeralaPackages />

      {/* Section 2: Trending Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-2 text-[#033f7b]">
            Trending destinations
          </h2>
          <p className="text-gray-600 mb-8 font-mulish">
            Most popular choices for travellers from India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First row - larger cards (2 columns) */}
            <div className="md:col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow-md h-80 relative group">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop"
                alt="Alleppey, Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-4 font-playfair">
                  Alleppey, Kerala
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 rounded-lg overflow-hidden shadow-md h-80 relative group">
              <img
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop"
                alt="Munnar, Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-4 font-playfair">
                  Munnar, Kerala
                </h3>
              </div>
            </div>

            {/* Second row - smaller cards */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 relative group">
              <img
                src="https://a0.muscache.com/im/pictures/5a024f99-252d-450d-a92b-77ca7f762f96.jpg?im_w=960"
                alt="Kochi, Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-4 font-playfair">
                  Kochi, Kerala
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64 relative group">
              <img
                src="https://a0.muscache.com/im/pictures/fafc2cf8-7683-40f1-aa7b-2dc2b17c3a1f.jpg?im_w=960"
                alt="Wayanad, Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-4 font-playfair">
                  Wayanad, Kerala
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64 relative group">
              <img
                src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?q=80&w=1887&auto=format&fit=crop"
                alt="Kovalam, Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-bold p-4 font-playfair">
                  Kovalam, Kerala
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Customer Support */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 font-playfair text-[#033f7b]">
                Customer Support
              </h2>
              <p className="text-gray-600 mb-6 font-mulish">
                Our Customer Support Team is committed to providing you with
                extensive knowledge about our tours and procedures. We are here
                to guide you every step of the way, ensuring your travel
                experience with Kesari Tours is seamless and memorable. Contact
                us now to have all of your travel-related questions answered!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-mulish py-3 px-8 rounded transition-colors">
                Contact us
              </button>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <img
                src="../Images/packages/customer_support.avif"
                alt="Customer Support Team"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto mt-16 flex justify-end">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div> */}
      </section>
    </div>
  );
}

export default Packages;
