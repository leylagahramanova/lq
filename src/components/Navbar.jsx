'use client'
import React, { useState } from 'react'

import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-[2000] md:hidden bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

 

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[1900] md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl z-[2000] md:hidden transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          {/* Contact Links */}
       
      

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="w-full text-left flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-800">Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left flex items-center gap-3 p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <span className="text-gray-800">About</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full text-left flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-800">Projects</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('footer')}
                  className="w-full text-left flex items-center gap-3 p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <span className="text-gray-800">Contact</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar