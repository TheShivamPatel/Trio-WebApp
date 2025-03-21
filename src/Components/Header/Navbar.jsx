import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
<>
 <div className='uppercase flex gap-7 w-[66%] mt-3 text-sm text-white font-semibold'>
    <Link to="#">Home</Link>
    <Link to="#">About</Link>
    <Link to="/Packages">Packages</Link>
    <Link to="#">Services</Link>
    <Link to="#">Portfolio</Link>
    <Link to="#">Blog</Link>
    <Link to="#">Contact Us</Link>
 </div>
     
    
</>
)
}

export default Navbar