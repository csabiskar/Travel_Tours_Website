import React, { useState } from "react";
import { TfiAlignLeft, TfiClose } from "react-icons/tfi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md p-4 z-50">
      <div className="flex justify-between items-center container mx-auto px-6">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          A <span className="text-[#fa1515]">Xplorer</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-[#fa1515] transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#fa1515] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#explore"
              className="hover:text-[#fa1515] transition-colors duration-300"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#fa1515] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <TfiClose size={26} /> : <TfiAlignLeft size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-16 left-0 w-full py-6 text-center">
          <ul className="flex flex-col gap-6 text-lg text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-[#fa1515] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#fa1515] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#explore"
                className="hover:text-[#fa1515] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#fa1515] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
