import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import logo from '../assets/logo/logo.png'

function Navbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])
  return (

    <div className={`flex justify-between items-center px-10 py-5 space-y-3
        transition-all duration-700 ease-in
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
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
