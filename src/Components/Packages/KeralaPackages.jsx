import React, { useState, useRef } from "react";

function KeralaPackages() {
  // Reference to the scrollable container
  const scrollContainerRef = useRef(null);
  // State to keep track of scroll position for arrow visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Kerala travel packages data
  const keralaPackages = [
    {
      name: "Backwaters Bliss",
      days: "5 Days",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Alleppey Houseboat Stay", "Kumarakom Bird Sanctuary", "Fort Kochi Tour"]
    },
    {
      name: "Hill Station Retreat",
      days: "4 Days",
      price: "₹19,999",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop",
      highlights: ["Munnar Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"]
    },
    {
      name: "Complete Kerala",
      days: "7 Days",
      price: "₹34,999",
      image: "https://plus.unsplash.com/premium_photo-1697729432049-caca66a1dab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
      highlights: ["Houseboat Cruise", "Munnar Hill Station", "Kovalam Beach"]
    },
    {
      name: "Wildlife Explorer",
      days: "6 Days",
      price: "₹29,999",
      image: "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.webp?a=1&b=1&s=612x612&w=0&k=20&c=2CFWErG9QDqVOTYgy_KHOk8lpr6s1_lZVELRt8yxgy8=",
      highlights: ["Wayanad Wildlife Sanctuary", "Periyar Tiger Reserve", "Parambikulam"]
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Explore{" "}
          <span className="text-[#033f7b] font-playfair italic">
            Kerala Packages
          </span>{" "}
          <span className="hidden sm:inline">for Your Next Adventure</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto font-mulish text-sm md:text-base">
          Discover the beauty of God's Own Country with our specially curated Kerala travel packages
        </p>
      </div>

      {/* Hidden on mobile, visible on tablet and desktop: Grid display */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {keralaPackages.map((pkg, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-sm font-bold text-[#033f7b] shadow-md z-10">
                {pkg.days}
              </div>
              <img
                src={pkg.image || "https://via.placeholder.com/300x200"}
                alt={pkg.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold font-playfair">
                  {pkg.name}
                </h3>
                <span className="text-base font-bold text-[#033f7b]">{pkg.price}</span>
              </div>
              <div className="mb-3">
                <p className="text-xs md:text-sm text-gray-500 mb-2">Package Highlights:</p>
                <ul className="text-xs md:text-sm space-y-1">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-2 bg-[#033f7b] hover:bg-[#022a54] text-white rounded transition-colors text-sm font-bold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visible on mobile, hidden on tablet and desktop: Scrollable display */}
      <div className="relative md:hidden">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-hide"
        >
          {keralaPackages.map((pkg, index) => (
            <div
              key={index}
              className="min-w-[280px] w-[85vw] max-w-[350px] snap-start flex-shrink-0 rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative h-48 w-full">
                <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-sm font-bold text-[#033f7b] shadow-md">
                  {pkg.days}
                </div>
                <img
                  src={pkg.image || "https://via.placeholder.com/300x200"}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold font-playfair">
                    {pkg.name}
                  </h3>
                  <span className="text-base font-bold text-[#033f7b]">{pkg.price}</span>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Package Highlights:</p>
                  <ul className="text-xs space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2 bg-[#033f7b] hover:bg-[#022a54] text-white rounded transition-colors text-sm font-bold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {keralaPackages.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-gray-300"
            ></div>
          ))}
        </div>
      </div>

      {/* Removed Desktop arrows */}

      <div className="flex justify-center mt-6 md:mt-8">
        <button className="rounded-full px-6 py-2 md:px-8 md:py-3 bg-white text-[#033f7b] border border-[#033f7b] hover:bg-gray-50 flex items-center gap-2 font-mulish text-sm md:text-base">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4 md:h-5 md:w-5"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            <span className="hidden xs:inline">Customize</span> Your Package
          </span>
        </button>
      </div>
    </section>
  );
}

export default KeralaPackages;