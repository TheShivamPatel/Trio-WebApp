import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Navbar({ isPackagesPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex uppercase gap-7 w-[66%] mt-3 text-sm font-semibold"
        style={{ color: isPackagesPage ? "black" : "white" }}>
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <Link to="/Packages">Packages</Link>
        <Link to="#">Services</Link>
        <Link to="#">Portfolio</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact Us</Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black text-white text-center py-4 md:hidden">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="#" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Packages" className="block py-2" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="#" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="#" className="block py-2" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="#" className="block py-2" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="#" className="block py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
