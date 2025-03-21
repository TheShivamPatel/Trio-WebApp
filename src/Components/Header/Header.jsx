// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
// import RightImg from "./RightImg";

// function Header() {
//   const serviceData = [
//     {
//       image: "/Images/flight.png",
//       purpose: "Flights",
//       link: "flights",
//     },
//     {
//       image: "/Images/hotel.png",
//       purpose: "Hotels",
//       link: "hotels",
//     },
//     {
//       image: "/Images/cab.png",
//       purpose: "Cabs",
//       link: "cabs",
//     },
//     {
//       image: "/Images/homestay.png",
//       purpose: "Homestays & Villa",
//       link: "homestay",
//     },
//     {
//       image: "/Images/card.png",
//       purpose: "Forex Card",
//       link: "card",
//     },
//     {
//       image: "/Images/insurance.png",
//       purpose: "Travel Insurance",
//       link: "insurance",
//     },
//     {
//       image: "/Images/train.png",
//       purpose: "Trains",
//       link: "train",
//     },
//     {
//       image: "/Images/bus.png",
//       purpose: "Buses",
//       link: "bus",
//     },
//     {
//       image: "/Images/holiday.png",
//       purpose: "Holiday packages",
//       link: "holiday",
//     },
//   ];

//   return (
//     <>
//       <Link to="/">
//         {/* Increase the height of the background container */}
//         <div className="h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] w-full bg-left-Top bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat">
//           <div className="pt-2 flex flex-row place-content-between">
//             <RightImg />
//             <Navbar />
//           </div>
//           {/* section 2 */}
          
//           {/* section 2 */}
//         </div>
//       </Link>
//     </>
//   );
// }

// export default Header;



import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "#" },
    { name: "Packages", link: "/packages" },
    { name: "Services", link: "#" },
    { name: "Portfolio", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    } ${mobileMenuOpen ? 'bg-white' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
            <img className='h-10 w-auuto' src="/trio image.png" alt="trio img" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((item, index) => (
              <Link 
                key={index} 
                to={item.link} 
                className={`uppercase font-semibold text-sm ${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-gray-300 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled || mobileMenuOpen ? 'text-gray-800' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="uppercase block px-3 py-2 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;