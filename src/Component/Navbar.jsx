import React, { useEffect } from 'react'
import { Link } from "react-scroll";
import { useState } from "react"; 
import { FiMenu, FiX } from "react-icons/fi"; 
import { Home } from './Home';
import { About } from './About';
import Project from './Project';
import { Skill } from './Skill';
import { Contact } from './Contact';
import resume from '../resume/Moumita-Sarkar-Resume.pdf'
import { HiDownload } from "react-icons/hi";
import logo from "../image/namelogo.png"
import GitHubCalendar from 'react-github-calendar';
import Github from './Github';
import Footer from './Footer';

export default function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleDownload = () => {
   
    const link = document.createElement('a');
    
   
    link.href = 'https://drive.google.com/uc?export=download&id=1bEonWvKeXAwk48PT79geIm2AVjFeYrEF';
    
   
    link.setAttribute('download', 'your-resume.pdf');
    link.setAttribute('target', '_blank');
   
    link.click();
  };

 
  return (
    <div>
 <header className={isMenuOpen ? 'nav nav-open' : 'nav'}>
        <nav className="nav__container" id="nav-menu">
          <div className="nav__logo">
            <Link to="about" smooth={true} onClick={toggleMenu}>
              
              <img src={logo} alt="" srcset="" className='logocls' />
            </Link>
          </div>
          <div className="nav__toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="nav__icon" /> : <FiMenu className="nav__icon" />}
          </div>
          <ul className={isMenuOpen ? 'nav__menu nav__menu-open' : 'nav__menu'}>

          <li>
              <Link activeClass="active" smooth={true} spy={true} to="home"  onClick={toggleMenu}
               className="nav-link home">
              HOME
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth={true} spy={true} to="about"  onClick={toggleMenu}
              className="nav-link  about section"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="skills"
                onClick={toggleMenu}
                className="nav-link skills"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth={true} spy={true} to="projects"  onClick={toggleMenu}
              className="nav-link projects"
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="contact"
                onClick={toggleMenu}
                className="nav-link contact"
              >
                CONTACT
              </Link>
              </li>

              <li>
             
              </li>

              <li>
              
             
        <a href="https://drive.google.com/file/d/1bEonWvKeXAwk48PT79geIm2AVjFeYrEF/view?usp=sharing" target="__blank"  download>
            <button className="nav-link resume resume-btn"  id="resume-button-1" onClick={handleDownload}>
                Resume <HiDownload/>
                </button>
                
            </a>

            {/* <button
        className="nav-link resume resume-btn"
        id="resume-button-1"
        onClick={handleDownload}
      >
        Resume <HiDownload />
      </button> */}

              
              
             
              
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className='homebg' style={{"height":"100vh"}}>
        <Home/>
      </section>
      <section id="about" className='aboutbg about section'>
        <About/>
       
      </section>
     
      <section id="skills" className='skillbg'>

        <Skill/>
      </section>
      <section id="projects" className='projbg'>
        <Project/>
      </section>
     

      <section id="git" className='gitbg'>
        <Github/>
         </section>


      <section id="contact" className='contactbg'>
        <Contact/>
         </section>

       
       <Footer/>
         
      

    </div>
  )
}
