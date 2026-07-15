import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/home.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <nav className="py-2 px-6 md:px-16 flex justify-between items-center fixed w-full top-0 z-50 bg-[#212529]/70 backdrop-blur-md border-b border-white/5 text-[#0A9396]">
      
      {/* Brand Logo */}
      <Link to="Home" smooth={true} duration={500} className="cursor-pointer">
        <img src={logo} alt="Logo" className="h-14 hover:scale-105 transition-transform duration-300" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 text-[15px] font-semibold tracking-wide">
        {menuItems.map((section) => (
          <li key={section} className="relative group py-1">
            <Link
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="text-[#0A9396]"
              className="hover:text-[#0A9396] transition-colors duration-300 cursor-pointer"
            >
              {section}
            </Link>
            {/* Elegant slide-in underline on hover */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A9396] transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="md:hidden text-white text-3xl focus:outline-none cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX className="text-[#0A9396]" /> : <HiMenu />}
      </button>

      {/* Mobile Menu (Smooth Slide Down via AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-20 left-0 right-0 mx-6 bg-[#2b3035] border border-[#0A9396]/20 text-white p-6 rounded-2xl shadow-2xl flex flex-col gap-5 md:hidden z-50"
          >
            {menuItems.map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-[#0A9396] bg-[#0A9396]/10 font-bold"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#0A9396] hover:bg-[#0A9396]/5 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-base text-left"
              >
                {section}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}