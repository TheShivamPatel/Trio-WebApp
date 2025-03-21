import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

function Footer() {
  const contacts = [
    {
      image: "/mailImg.png",
      subheading: "Our Email:",
      data1: "contact@triointernational.net.in",
    },
    {
      image: "phone.png",
      subheading: "Our phone number:",
      data1: "+91471 4850254",
      data2: "+91471 4011121",
    },
    {
      image: "/location.png",
      subheading: "Our Address:",
      data1:
        "TC No. 22/2855-4 ,Savithri Building, 2nd Floor, Sankar Road, Sasthamangalam, Thiruvananthapuram-10",
    },
  ];

  return (
    <footer className="bg-[#033f7b] text-white py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description - Full width on mobile, 30% on desktop */}
          <div className="w-full px-4 mb-8 md:mb-0 md:w-full lg:w-[30%]">
            <div className="flex flex-col items-center md:items-start">
              <img
                className="h-16 md:h-20 mb-4"
                src="https://triointernational.net.in/wp-content/uploads/2023/07/01-7-6-1.png"
                alt="TRIO Logo"
              />
              <p className="font-mulish text-center md:text-left text-sm leading-6 tracking-wide max-w-xs">
                At 𝗧𝗥𝗜𝗢, we believe that every trip should be a masterpiece. Whether
                you're seeking a relaxing beach getaway, an adventurous trek through
                the mountains, or a cultural immersion in a vibrant city, we have
                the expertise to turn your travel dreams into reality
              </p>
            </div>
          </div>

          {/* Contact Information - Full width on mobile, 26% on desktop */}
          <div className="w-full px-4 mb-8 md:mb-0 md:w-full lg:w-[30%]">
            <h3 className="font-playfair text-xl md:text-2xl mb-4 md:mb-6">Contacts</h3>
            <div className="space-y-6">
              {contacts.map((elem, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <img className="h-6 w-6" src={elem.image} alt="icon" />
                  </div>
                  <div>
                    <p className="font-playfair font-light text-base md:text-lg mb-1">
                      {elem.subheading}
                    </p>
                    <div className="flex flex-col">
                      <a
                        className="font-mulish text-blue-300 text-sm break-words"
                        href={elem.subheading.includes("Email") ? `mailto:${elem.data1}` : 
                               elem.subheading.includes("phone") ? `tel:${elem.data1}` : "#"}
                      >
                        {elem.data1}
                      </a>
                      {elem.data2 && (
                        <a
                          className="font-mulish text-blue-300 text-sm"
                          href={elem.subheading.includes("phone") ? `tel:${elem.data2}` : "#"}
                        >
                          {elem.data2}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two columns in one row on mobile */}
          <div className="w-full px-4 md:w-full lg:w-[40%]">
            <div className="flex flex-wrap -mx-2">
              {/* Locations - Half width on mobile, 15% on desktop */}
              <div className="w-1/2 px-2 mb-8 md:mb-0 lg:w-1/2">
                <h3 className="font-playfair text-xl md:text-2xl mb-4 md:mb-6">Locations</h3>
                <ul className="font-mulish text-sm space-y-3">
                  <li>Trivandrum</li>
                  <li>Mumbai</li>
                  <li>Chennai</li>
                  <li>Bangalore</li>
                </ul>
              </div>

              {/* Quick Links - Half width on mobile, 15% on desktop */}
              <div className="w-1/2 px-2 mb-8 md:mb-0 lg:w-1/2">
                <h3 className="font-playfair text-xl md:text-2xl mb-4 md:mb-6">Quick Links</h3>
                <ul className="font-mulish text-sm space-y-3">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/packages">Packages</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CopyRight />
    </footer>
  );
}

export default Footer;