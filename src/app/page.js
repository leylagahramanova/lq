'use client'
import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
import DynamicBackground from '@/components/DynamicBackground';

const sections = ['hero', 'about', 'projects', 'footer'];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const SkillsButton = () => {
    const [showSkills, setShowSkills] = useState(false);
  
    return (
      <div>
        <Button onClick={() => setShowSkills(!showSkills)}>
          Skills
        </Button>
       {showSkills && (
  <div
    className="w-80 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50 mt-4 transition-all duration-500 ease-in-out transform shadow-lg backdrop-blur-sm"
  >
    <ul className="ml-8 text-base space-y-2 list-disc text-slate-700">
      <li className="font-medium">HTML, CSS, JavaScript, TypeScript</li>
      <li className="font-medium">Angular, React, Redux, Next.js</li>
      <li className="font-medium">Node.js, ExpressJS, RestAPI</li>
      <li className="font-medium">MySQL, MongoDB, SQL, PHPMyAdmin</li>
      <li className="font-medium">Git, GitHub</li>
    </ul>
  </div>
)}
      </div>
    );
  };

  const Button = ({ children, ...props }) => (
    <button
      className="inline-block px-8 py-4 rounded-full m-2 text-white font-semibold text-sm uppercase text-center no-underline shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:opacity-80 active:scale-95 transition-all duration-300 cursor-pointer transform hover:shadow-xl hover:-translate-y-0.5"
      {...props}
    >
      {children}
    </button>
  );

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToSectionIndex = useCallback((index) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(index);
      }
    }
  }, []);

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
  }, [currentSection, scrollToSectionIndex]);
  
  return (
    <div className="scroll-smooth overflow-hidden">
      <DynamicBackground />
      <Navbar />
      {/* Desktop Navigation - Hidden on mobile */}
<nav className="hidden md:flex fixed top-6 right-6 z-[200] gap-3">
  <button 
    onClick={() => {
      scrollToSection('hero');
      setCurrentSection(0);
    }}
    className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-md ${
      currentSection === 0
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
        : 'glass text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md'
    }`}
  >
    Home
  </button>

  <button 
    onClick={() => {
      scrollToSection('about');
      setCurrentSection(1);
    }}
    className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-md ${
      currentSection === 1
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
        : 'glass text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md'
    }`}
  >
    About
  </button>

  <button 
    onClick={() => {
      scrollToSection('projects');
      setCurrentSection(2);
    }}
    className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-md ${
      currentSection === 2
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
        : 'glass text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md'
    }`}
  >
    Projects
  </button>
    <button 
    onClick={() => {
      scrollToSection('footer');
      setCurrentSection(3);
    }}
    className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-md ${
      currentSection === 3
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
        : 'glass text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md'
    }`}
  >
  Contact
  </button>
</nav>


      {/* Hero Section */}
      <div id="hero" className="flex flex-col justify-center items-center min-h-screen snap-start px-4">
        <div className="animate-fade-in-up text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Leyla Gahramanova
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-700 font-medium leading-relaxed">
            Hi! I&apos;m a <span className="font-semibold text-indigo-600">web developer</span> and a <span className="font-semibold text-purple-600">graphic designer</span>.
          </h2>
        </div>
      </div>

      {/* About Section */}
 <div id="about" className="flex justify-center items-center w-full min-h-screen snap-start md:items-start text-center md:text-left py-4 px-4 sm:px-6 lg:px-8">
<section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen md:gap-20 gap-8 max-w-7xl mx-auto">
  {/* Image */}
  <div className="order-1 md:order-2 w-full md:w-1/2 flex md:justify-end items-center justify-center animate-slide-in-right">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <Image
        src="/image/comp.png"
        width={300}
        height={300}
        alt="comp"
        className="relative max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px] drop-shadow-2xl"
      />
    </div>
  </div>

  {/* Content */}
  <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start animate-fade-in-up">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      About Me
    </h2>
    <p className="text-lg md:text-xl mb-8 text-slate-700 leading-relaxed max-w-2xl">
      I possess a diverse skill set and specialize in creating dynamic and responsive web applications.  
      I am always eager to learn new technologies and collaborate with others to craft exceptional applications.
    </p>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <SkillsButton />
      <a
        href="/Leyla Qəhrəmanova.pdf"
        download="Leyla Qəhrəmanova.pdf"
        className="inline-block px-8 py-4 rounded-full text-white font-semibold text-sm uppercase text-center no-underline shadow-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:via-purple-700 hover:to-sky-600 focus:opacity-80 active:scale-95 transition-all duration-300 transform hover:shadow-xl hover:-translate-y-0.5"
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
    <p className="text-slate-500 text-sm font-medium">
      © 2025 Designed & Developed by <span className="font-semibold text-indigo-600">Leyla Gahramanova</span>
    </p>
  </div>
</div>
    </div>
  );
}
