import { React, useState, useRef, useEffect } from 'react';
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdWork, MdCall, MdPersonSearch } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { IoIosRocket } from 'react-icons/io';
const NavBar = (props) => {
  const [activeNav, setActiveNav] = useState('#')
  // const navRef = useRef()
  // const activeNav =props.activeNav;
  // const setActiveNav =props.setActiveNav;
  const vHeight = window.innerHeight;
  const options = ["#", "#experience", "#projects", "#education", "#contact", "#about"];
  const optionscel = ["#", "#experience", "#projects", "#projects", "#projects", "#education", "#contact", "#about", "#contact", "#contact"];

  useEffect(() => {
    const handleScroll = (event) => {
      const page = Math.floor((window.scrollY + 10) / vHeight);
      // console.log(event)
      // console.log(window.scrollY, vHeight, page);
      if (window.innerWidth < 480) {
        setActiveNav(optionscel[page])
      }
      else { setActiveNav(options[page]) }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoIosRocket /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><ImBooks /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdCall /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdPersonSearch /></a>


    </nav >
  )
}
export default NavBar;
