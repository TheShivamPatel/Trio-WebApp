import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Section2 = ({ serviceData }) => {
  const location = useLocation(); // Get the current route
  const [initialRender, setInitialRender] = useState(true);
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  // When component mounts or location changes
  useEffect(() => {
    // If we've navigated away from home and back, or to another route
    // we no longer need the initial state
    if (initialRender && !isHomePage) {
      setInitialRender(false);
    }
  }, [location.pathname, isHomePage, initialRender]);

  return location.pathname !== "/Packages" ? ( // Render only on the home page
    <div className="static h-[80px] sm:h-[90px] md:h-[100px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[65%] mx-auto">
      <div>
        {/* Responsive white box with centered positioning */}
        <div className="w-[90%] sm:w-[85%] md:w-[82%] lg:w-[77%] xl:w-[65%] 2xl:w-[60%] 
                      h-[80px] sm:h-[90px] md:h-[100px] 
                      mx-auto left-0 right-0
                      bg-white rounded-xl 
                      mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 
                      drop-shadow-xl absolute overflow-hidden">
          {/* Scrollable content with responsive sizes */}
          <div className="w-full h-full rounded-lg flex overflow-x-auto scrollbar-hide px-2">
            {serviceData.map((elem, index) => (
              <NavLink
                key={index}
                to={elem.link}
                className={({ isActive }) => {
                  // If we're on the home page and it's the initial render, make "Flights" active
                  const shouldBeActive = 
                    (isActive) || 
                    (initialRender && isHomePage && elem.link === "flights");
                  
                  return `flex-shrink-0 flex-grow min-w-[60px] xs:min-w-[65px] sm:min-w-[70px] 
                         ${shouldBeActive ? "text-blue-500" : "text-gray-700"}`;
                }}
              >
                <div className="h-full w-full flex flex-col items-center justify-center p-1 sm:p-2">
                  <img 
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7" 
                    src={elem.image} 
                    alt={elem.purpose} 
                  />
                  <p className="font-mulish text-xs xs:text-sm font-semibold leading-tight tracking-tight text-center mt-1 sm:mt-2 whitespace-nowrap">
                    {elem.purpose}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Section2;