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
        className="fixed top-4 left-4 z-[2000] md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

 

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1900] md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-80 h-full glass shadow-2xl z-[2000] md:hidden transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="w-full text-left flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 border border-indigo-100 hover:shadow-md"
                >
                  <span className="text-slate-700 font-medium">Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 border border-indigo-100 hover:shadow-md"
                >
                  <span className="text-slate-700 font-medium">About</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full text-left flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 border border-indigo-100 hover:shadow-md"
                >
                  <span className="text-slate-700 font-medium">Projects</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('footer')}
                  className="w-full text-left flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 border border-indigo-100 hover:shadow-md"
                >
                  <span className="text-slate-700 font-medium">Contact</span>
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