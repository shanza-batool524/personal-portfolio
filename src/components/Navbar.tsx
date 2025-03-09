import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

type Props = {
  mainButton: string;
  buttonSpan: string;
  isScrolling: boolean;
};

function Navbar({ mainButton, buttonSpan, isScrolling }: Props) {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 px-6 md:px-12 lg:px-[100px] ${
        isScrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center text-lg">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">About</a>
          <a href="#" className="hover:text-orange-500 transition">Portfolio</a>
          <a href="#" className="hover:text-orange-500 transition">Service</a>
          <a href="#" className="hover:text-orange-500 transition">Contact</a>
          <button className={mainButton}>
            <span className={buttonSpan}></span>
            <span className="relative z-10 group-hover:text-white duration-75">
              Download CV
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col items-center gap-6 mt-16 text-lg">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">About</a>
            <a href="#" className="hover:text-orange-500 transition">Portfolio</a>
            <a href="#" className="hover:text-orange-500 transition">Service</a>
            <a href="#" className="hover:text-orange-500 transition">Contact</a>
            <button className={mainButton}>
              <span className={buttonSpan}></span>
              <span className="relative z-10 group-hover:text-white duration-75">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
