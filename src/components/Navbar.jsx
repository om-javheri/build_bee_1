import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo/logo.png';

function Navbar() {
  const [show, setShow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const menuItems = ["Home", "Shop", "Sale", "Blog"];

  return (
    <div
      className={`
        flex 
        justify-between items-center
        px-4 sm:px-8 lg:px-10
        pt-4 sm:pt-6
        gap-4
        transition-all duration-700 ease-in flex-wrap
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}
      `}
    >
      <img src={logo} alt="Logo" className="w-16 sm:w-20 order-1 md:order-2" />

      {/* Desktop Menu */}
      <div className="hidden md:flex rounded-full bg-white/10 backdrop-blur-md gap-1 order-2">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `py-2 px-4 rounded-full text-sm hover:bg-white/20 transition-colors ${isActive ? "bg-white/30 text-black" : "text-white"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center gap-2 order-1 ">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-12 p-2 flex items-center  justify-center rounded-full focus:outline-none z-20 bg-black/50" // optional light overlay
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              style={{
                fill: "rgba(255, 255, 255, 0.2)",  // semi-transparent for glass look
                backdropFilter: "blur(12px)",        // blur behind the icon
                WebkitBackdropFilter: "blur(12px)"
              }}
            >
              <path d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="w-6 h-6"
              style={{
                stroke: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Sign Up Button */}
      <div className="mb-1 hidden md:block order-3">
        <Button text="Sign Up" type="glass" className="w-full mt-2" />
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all w-full duration-700 ease-in-out order-3
          ${mobileMenuOpen ? 'max-h-96 mt-2' : 'max-h-0'}
        `}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 flex flex-col gap-4 border border-white/20">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              {item}
            </NavLink>
          ))}
          <Button text="Sign Up" type="glass" className="w-full mt-2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
