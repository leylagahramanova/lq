'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
import DynamicBackground from '@/components/DynamicBackground';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'projects', 'footer'];

  const SkillsButton = () => {
    const [showSkills, setShowSkills] = useState(false);
  
    return (
      <div>
        <Button onClick={() => setShowSkills(!showSkills)}>
          Skills
        </Button>
       {showSkills && (
  <div
    className="w-80 p-2 bg-blue-200 rounded-[10px_50px] border-2 border-blue-300 mt-4 transition-all duration-500 ease-in-out transform"
  >
    <ul className="ml-16 text-lg list-disc">
      <li>HTML, CSS, JavaScript, TypeScript</li>
      <li>Angular, React, Redux, Next.js</li>
      <li>Node.js, ExpressJS, RestAPI</li>
      <li>MySQL, MongoDB, SQL, PHPMyAdmin</li>
      <li>Git, GitHub</li>
    </ul>
  </div>
)}
      </div>
    );
  };

  const Button = ({ children, ...props }) => (
    <button
      className="inline-block w-30 px-8 py-4 rounded-full m-2 text-gray-100 font-extrabold text-sm uppercase text-center no-underline shadow-inner bg-blue-500 hover:opacity-80 focus:opacity-80 active:scale-90 transition duration-300 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSectionIndex = (index) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(index);
      }
    }
  };

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      isScrolling = true;
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        scrollToSectionIndex(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        scrollToSectionIndex(currentSection - 1);
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault();
        scrollToSectionIndex(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        scrollToSectionIndex(currentSection - 1);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection]);
  
  return (
    <div className="scroll-smooth overflow-hidden">
      <DynamicBackground />
      <Navbar />
      {/* Desktop Navigation - Hidden on mobile */}
<nav className="hidden md:flex fixed top-4 right-4 z-[200] gap-2">
  <button 
    onClick={() => {
      scrollToSection('hero');
      setCurrentSection(0);
    }}
    className={`px-4 py-2 rounded-full transition-colors ${
      currentSection === 0
        ? 'bg-blue-800 text-white'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}
  >
    Home
  </button>

  <button 
    onClick={() => {
      scrollToSection('about');
      setCurrentSection(1);
    }}
    className={`px-4 py-2 rounded-full transition-colors ${
      currentSection === 1
        ? 'bg-blue-800 text-white'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}
  >
    About
  </button>

  <button 
    onClick={() => {
      scrollToSection('projects');
      setCurrentSection(2);
    }}
    className={`px-4 py-2 rounded-full transition-colors ${
      currentSection === 2
        ? 'bg-blue-800 text-white'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}
  >
    Projects
  </button>
    <button 
    onClick={() => {
      scrollToSection('footer');
      setCurrentSection(3);
    }}
    className={`px-4 py-2 rounded-full transition-colors ${
      currentSection === 3
        ? 'bg-blue-800 text-white'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}
  >
  Contact
  </button>
</nav>


      {/* Hero Section */}
      <div id="hero" className="flex flex-col justify-center items-center min-h-screen snap-start">
        <h1 className="text-6xl text-center mb-2">Leyla Gahramanova</h1>
        <h2 className="text-4xl text-center ">Hi! I am a front-end developer.</h2>
      </div>

      {/* About Section */}
 <div id="about" className="flex justify-center items-center w-full min-h-screen snap-start md:items-start text-center md:text-left py-4 px-4 sm:px-6 lg:px-8">
<section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen md:gap-20 gap-5 ">
  {/* Image */}
  <div className="order-1 md:order-2 w-full md:w-1/2 flex md:justify-end items-center justify-center">
    <Image
      src="/image/comp.png"
      width={300}
      height={300}
      alt="comp"
      className="max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px]"
      style={{ filter: 'drop-shadow(0 -2px 8px rgba(0, 0, 0, 0.5))' }}
    />
  </div>

  {/* Content */}
  <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center items-center ">
    <h2 className="text-3xl mb-4 text-center">About Me</h2>
    <h3 className="text-2xl mb-6">
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;I possess a diverse skill set and specialize in creating dynamic and responsive web applications.  
      I am always eager to learn new technologies and collaborate with others to craft exceptional applications.
    </h3>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row items-start gap-4">
      <SkillsButton />
      <a
        href="Leyla Qəhrəmanova.pdf"
        download="Leyla Qəhrəmanova.pdf"
        className="inline-block w-30 px-8 py-4 rounded-full m-2 text-gray-100 font-extrabold text-sm uppercase text-center no-underline shadow-inner bg-blue-500 hover:opacity-80 focus:opacity-80 active:scale-90 transition duration-300"
      >
        Download CV
      </a> 
    </div>
  </div>
</section>

</div>


      {/* Projects Section */}
      <div id="projects" className="min-h-screen snap-start py-4 px-4 sm:px-6 lg:px-8 mx-auto lg:py-8">
        <Projects />
      </div>

      {/* Footer Section */}
   <div
  id="footer"
  className="min-h-screen flex flex-col justify-between py-4 px-4 sm:px-6 lg:px-8 mx-auto lg:py-8"
>
  <div className="flex-grow">
    <Footer />
  </div>

  <div className="flex items-center justify-center py-6">
    <p className=" text-gray-500">
      © 2025 Designed & Developed by Leyla Gahramanova
    </p>
  </div>
</div>
    </div>
  );
}
