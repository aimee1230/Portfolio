import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/home.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-1 px-8 flex justify-between items-center fixed w-full top-0 z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg text-[#0A9396]">

      <img src={logo} alt="Logo" className="h-16" />

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8 text-white text-lg">
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <li key={section} className="hover:text-[#0A9396] cursor-pointer">
            <Link to={section} smooth={true} duration={500}>
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle button */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile menu (slide from right) */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-[#212529] text-white p-6 rounded-lg shadow-lg flex flex-col gap-6 md:hidden z-50">
          {["Home", "About", "Projects", "Contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0A9396] cursor-pointer text-lg"
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
