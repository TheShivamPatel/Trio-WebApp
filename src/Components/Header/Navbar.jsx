import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ isPackagesPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu on window resize (to prevent it staying open when switching to desktop view)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative" ref={navRef}>
      {/* Desktop Navigation */}
      <div 
        className="hidden md:flex uppercase w-full gap-3 lg:gap-7 mt-3 text-xs lg:text-sm font-semibold justify-between whitespace-nowrap"
        style={{ color: isPackagesPage ? "black" : "white" }}
      >
        <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
        <Link to="#" className="hover:opacity-80 transition-opacity">About</Link>
        <Link to="/Packages" className="hover:opacity-80 transition-opacity">Packages</Link>
        <Link to="#" className="hover:opacity-80 transition-opacity">Services</Link>
        <Link to="#" className="hover:opacity-80 transition-opacity">Portfolio</Link>
        <Link to="#" className="hover:opacity-80 transition-opacity">Blog</Link>
        <Link to="#" className="hover:opacity-80 transition-opacity">Contact Us</Link>
      </div>

      {/* Mobile Navigation Toggle Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="focus:outline-none transition-transform duration-200 z-50"
          style={{ color: isOpen ? "white" : (isPackagesPage ? "black" : "white") }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/95 text-white z-40 flex flex-col justify-center items-center"
        >
          <div className="flex flex-col items-center space-y-6 text-xl">
            <Link to="/" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/Packages" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Packages</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;