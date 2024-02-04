'use client'
import {  useRef, useEffect, useState  } from 'react';
import Image from "next/image";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
export default function Home() {
  const SkillsButton = () => {
    const [showSkills, setShowSkills] = useState(false);
  
    const myFunction = () => {
      setShowSkills((prevShowSkills) => !prevShowSkills);
    };
  
    return (
      <div>
        <div className="btn orange circular" onClick={myFunction}>
          Skills
        </div>
        {showSkills && (
          <div className="skills-popup">

         <ul className="list">
             <li>HTML, CSS, JavaScript, TypeScript</li>  
             <li>Angular, React, Redux, Next.js</li> 
             <li>Node.js, ExpressJS, RestAPI</li> 
             <li>MySQL, MongoDB, SQL,  PHPMyAdmin</li>
             <li>Git, GitHub</li>
              </ul>
          </div>
        )}
      </div>
    );
  };
  
  return (
    
      <div>
          <div className="sector" style={{  minHeight: '100vh'}} >

            <h1  style={{ textAlign: 'center' }}>Leyla Gahramanova</h1>
            <Image src='/image/me.jpg' width={300} alt="me"
              height={300} className="mask delayed-circle" />
            <h2  style={{ textAlign: 'center' }}>Hi! I am a front-end developer.</h2>
          </div>

          <div className="sector" id="host" >
          <div className="container">
            <section className="content-wrap">
              <div className="text">
                <div className="description-container">
                  <div className="photo">
                    <Image src='/image/comp.png' width={300} alt="comp"
                      height={300} className="comp " />
                  </div>
                  <h2 style={{ textAlign: "center" }} >About Me</h2>
                  <h3>
  &nbsp;&nbsp;&nbsp;I possess a diverse skill set and specialize in creating dynamic and responsive web applications. I am always eager to learn new technologies and collaborate with others to craft exceptional applications.
</h3>

                </div>

                <div className="buttons1">
                <SkillsButton />
                  <a
                    href="Leyla Gahramanova FullStack Developer.pdf" download="Leyla Gahramanova FullStack Developer.pdf"
                    className="btn orange circular"
                  >
                    Download CV
                  </a>
                </div>
              </div>

            </section>
          </div>
     
        </div>
        <Projects />
       <div style={{marginTop:"5rem"}} >     <Footer /></div>
    
       
      </div>

  );
}
