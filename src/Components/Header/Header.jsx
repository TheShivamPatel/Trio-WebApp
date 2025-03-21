import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import RightImg from "./RightImg";
import Section2 from "./Section2";

function Header() {
  const location = useLocation();
  
  // Check if the current path is "/Packages"
  const isPackagesPage = location.pathname === "/Packages";

  const serviceData = [
    { image: "/Images/flight.png", purpose: "Flights", link: "flights" },
    { image: "/Images/hotel.png", purpose: "Hotels", link: "hotels" },
    { image: "/Images/cab.png", purpose: "Cabs", link: "cabs" },
    { image: "/Images/homestay.png", purpose: "Homestays & Villa", link: "homestay" },
    { image: "/Images/card.png", purpose: "Forex Card", link: "card" },
    { image: "/Images/insurance.png", purpose: "Travel Insurance", link: "insurance" },
    { image: "/Images/train.png", purpose: "Trains", link: "train" },
    { image: "/Images/bus.png", purpose: "Buses", link: "bus" },
    { image: "/Images/holiday.png", purpose: "Holiday packages", link: "holiday" },
  ];

  return (
    <>
      <Link to="/">
        {/* Apply background conditionally */}
        <div className={`w-full ${isPackagesPage ? "h-auto text-black" : "h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] bg-cover bg-no-repeat bg-left-Top bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"} `}>
          {/* Navbar and Right Image should always be visible */}
          <div className="pt-2 flex flex-row place-content-between">
            <RightImg />
            <Navbar isPackagesPage={isPackagesPage}/>
          </div>

          {/* Section 2 */}
          <Section2 serviceData={serviceData} />
        </div>
      </Link>
    </>
  );
}

export default Header;
