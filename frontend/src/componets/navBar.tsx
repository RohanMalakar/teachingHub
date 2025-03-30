import { motion } from "motion/react"
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav className="p-4  flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img className="h-[30px] lg:h-[50px]" src={logo} alt="logo" />
        </div>
        <div>
          <div className="inline">
            <p className="inline 2xl lg:text-3xl font-inika font-bold bg-gradient-to-r from-[#60DDC5] to-[#0366f2] text-transparent bg-clip-text">
              TEACHING
              <span className="relative after:content-[''] after:absolute after:-left-20 lg:after:-left-38 after:bottom-0 after:w-[80px] lg:after:w-[152px] lg:after:h-[4px] after:h-[2px]   after:rounded after:bg-gradient-to-r after:from-[#FE611D] after:to-[#870A4A]">
              </span>
              <span className="text-[10px] lg:text-2xl">HUB</span>
            </p>
            <p className="lg:text-[17px] text-[9px]">Global learning spot</p>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden items-center font-bold gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-b-3  border-[#D13C84]'
              : 'text-black'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? ' text-black border-b-3  border-[#D13C84]'
              : 'text-black'
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? ' text-black border-b-3  border-[#D13C84]'
              : 'text-black'
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? ' text-black border-b-3  border-[#D13C84]'
              : 'text-black'
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? ''
              : 'text-black'
          }
        >
          <button className="bg-[#F58A3C] hover:bg-[#32A6FB] cursor-pointer rounded-3xl px-5 py-2 text-white">
            Contact
          </button>
        </NavLink>

      </div>
      <div className="lg:hidden pr-5 block">
        <RxHamburgerMenu
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-4xl" />
      </div>
      <div className={`lg:hidden absolute top-16 right-0 rounded-4xl p-5 bg-black text-white flex-col  items-center font-bold gap-5 ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? 'lg:text-black border-b-3  border-[#D13C84]'
              : 'lg:text-black'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? ' lg:text-black border-b-3  border-[#D13C84]'
              : 'lg:text-black'
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? ' lg:text-black border-b-3  border-[#D13C84]'
              : 'lg:text-black'
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? ' lg:text-black border-b-3  border-[#D13C84]'
              : 'lg:text-black'
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? ''
              : 'lg:text-black'
          }
        >
          <button className="bg-[#F58A3C] hover:bg-[#32A6FB] cursor-pointer rounded-3xl px-5 py-2 text-white">
            Contact
          </button>
        </NavLink>
      </div>
    </motion.nav>
  )
}

export default NavBar;