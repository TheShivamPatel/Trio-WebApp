import { Link, NavLink, useLocation } from "react-router-dom";

const Section2 = ({ serviceData }) => {
  const location = useLocation(); // Get the current route

  return location.pathname !== "/Packages" ? ( // Render only on the home page
    <div className="static h-[100px] w-full xm:w-[90%] sm:w-[85%] md:w-[110%] lg:w-[90%] xl:w-[70%] 2xl:w-[65%] mx-auto">
      <Link to="/Flights">
        <div>
          {/* Adjust the margin-top to position the white box correctly */}
          <div className="w-full h-[100px] flex justify-center ml-[5%] bg-white md:w-[82%] lg:w-[77%] xl:w-[65%] 2xl:w-[60%] rounded-xl mt-12 md:mt-16 lg:mt-18 xl:mt-20 2xl:mt-24 drop-shadow-xl absolute">
            <div className="pl-[1%] h-[100px] rounded-lg gap-3 flex overflow-x-auto md:overflow-hidden">
              {serviceData.map((elem, index) => (
                <NavLink
                  key={index}
                  to={elem.link}
                  className={({ isActive }) =>
                    `flex-shrink-0 ${isActive ? "text-blue-500" : "text-gray-700"}`
                  }
                >
                  <div className="h-full w-auto flex flex-col items-center justify-center p-2">
                    <img className="h-7 w-7" src={elem.image} alt={elem.purpose} />
                    <p className="font-mulish text-sm font-semibold leading-4 tracking-tight text-center mt-2">
                      {elem.purpose}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  ) : null;
};

export default Section2;
