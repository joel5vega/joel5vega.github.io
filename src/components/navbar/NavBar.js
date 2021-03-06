import { React } from 'react';
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdWork ,MdCall} from "react-icons/md";
import { RiServiceLine, } from "react-icons/ri";
import { ImStatsDots ,ImBooks} from "react-icons/im";
import { useState } from 'react';
import {IoIosRocket} from 'react-icons/io';
const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><ImBooks /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoIosRocket /></a>
            <a href="#stats" onClick={() => setActiveNav('#stats')} className={activeNav === '#stats' ? 'active' : ''}><ImStatsDots /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdCall /></a>

        </nav >
    )
}
export default NavBar;
