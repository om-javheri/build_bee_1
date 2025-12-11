import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import logo from '../assets/logo/logo.png'

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <div className="w-18">
        <img src={logo} alt="Logo" className=" " />
      </div>
      <div className="rounded-full bg-[#838383]  flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 px-5 rounded-full hover:bg-gray-200 ${isActive ? "bg-white text-black" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `py-2 px-5 rounded-full hover:bg-gray-200 ${isActive ? "bg-white text-black" : ""
            }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/sale"
          className={({ isActive }) =>
            `py-2 px-5 rounded-full hover:bg-gray-200 ${isActive ? "bg-white text-black" : ""
            }`
          }
        >
          Sale
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `py-2 px-5 rounded-full hover:bg-gray-200 ${isActive ? "bg-white text-black" : ""
            }`
          }
        >
          Blog
        </NavLink>
      </div>
      <div className=""><Button text={"Sign Up"} type={"primary"} /></div>

    </div >
  )
}

export default Navbar
