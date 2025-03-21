import { NavLink, useLocation } from "react-router-dom";

const Section2 = ({ serviceData }) => {
  const location = useLocation(); // Get the current route

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
                className={({ isActive }) =>
                  `flex-shrink-0 flex-grow min-w-[60px] xs:min-w-[65px] sm:min-w-[70px] ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  }`
                }
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