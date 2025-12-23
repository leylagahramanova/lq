'use client'
import { useState, useCallback, useEffect } from 'react';
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
            className="w-80 p-6 glass rounded-2xl border border-slate-200 mt-4 transition-all duration-300 ease-in-out shadow-sm"
          >
            <ul className="ml-4 text-base space-y-2 list-disc text-slate-50">
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
      className="inline-block px-8 py-3 rounded-full  text-white font-semibold text-sm uppercase text-center no-underline shadow-sm bg-blue-900 hover:bg-blue-800 focus:opacity-90 active:scale-95 transition-colors duration-200 cursor-pointer"
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

  // Update currentSection based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        });

        if (mostVisible?.target?.id) {
          const idx = sections.indexOf(mostVisible.target.id);
          if (idx !== -1) {
            setCurrentSection(idx);
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth full-page snapping between sections (like at the beginning)
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
      // Prevent the default long free scroll so we can snap section by section
      e.preventDefault();

      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSectionIndex(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSectionIndex(currentSection - 1);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 600);
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
    <div className="scroll-smooth">

      <Navbar />
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex fixed top-6 right-6 z-[200] gap-3">
        <button
          onClick={() => {
            scrollToSection('hero');
            setCurrentSection(0);
          }}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 ${currentSection === 0
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800'
            }`}
        >
          Home
        </button>

        <button
          onClick={() => {
            scrollToSection('about');
            setCurrentSection(1);
          }}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 ${currentSection === 1
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800'
            }`}
        >
          About
        </button>

        <button
          onClick={() => {
            scrollToSection('projects');
            setCurrentSection(2);
          }}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 ${currentSection === 2
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800'
            }`}
        >
          Projects
        </button>
        <button
          onClick={() => {
            scrollToSection('footer');
            setCurrentSection(3);
          }}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 ${currentSection === 3
              ? 'bg-blue-900 text-white border-blue-900'
              : 'bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800'
            }`}
        >
          Contact
        </button>
      </nav>


      {/* Hero Section */}
      <div
        id="hero"
        className={`flex flex-col justify-center items-center min-h-[80vh] snap-start px-4 pt-20 pb-16 sm:pt-24 transition-all duration-500 ${
          currentSection === 0 ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-slate-50">
            Leyla Gahramanova
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-slate-50 font-medium leading-relaxed px-2">
            Hi! I&apos;m a <span className="font-semibold text-indigo-600">web developer</span> and a <span className="font-semibold text-purple-600">graphic designer</span>.
          </h2>
        </div>
      </div>


      {/* About Section */}
      <div
        id="about"
        className={`flex justify-center items-center w-full min-h-screen snap-start md:items-start text-center md:text-left py-10 sm:py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          currentSection === 1 ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'
        }`}
      >
        <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-[70vh] md:min-h-screen md:gap-16 gap-10 max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex md:justify-end items-center justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-slate-200 rounded-full blur-2xl opacity-40"></div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-50">
              About Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-500 leading-relaxed max-w-2xl px-1">
              I possess a diverse skill set and specialize in creating dynamic and responsive web applications.
              I am always eager to learn new technologies and collaborate with others to craft exceptional applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
              <SkillsButton />
              <a
                href="/Leyla Qəhrəmanova.pdf"
                download="Leyla Qəhrəmanova.pdf"
                className="inline-block px-8 py-3 rounded-full text-white font-semibold text-sm uppercase text-center no-underline shadow-sm bg-blue-900 hover:bg-blue-800 focus:opacity-90 active:scale-95 transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

      </div>


      {/* Projects Section */}
      <div
        id="projects"
        className={`min-h-screen snap-start py-4 sm:px-6 lg:px-8 mx-auto lg:py-8 transition-all duration-500 ${
          currentSection === 2 ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'
        }`}
      >
        <Projects />
      </div>

      {/* Footer Section */}
      <div
        id="footer"
        className={`min-h-screen snap-start flex flex-col justify-between py-4 sm:px-6 lg:px-8 mx-auto lg:py-8 transition-all duration-500 ${
          currentSection === 3 ? 'animate-fade-in-up' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex-grow">
          <Footer />
        </div>
      </div>
    </div>
  );
}
