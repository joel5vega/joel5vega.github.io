import { React } from 'react';
import "./navbar.css";
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineHome,AiOutlineUser } from "react-icons/ai";
import { BiBook,BiMessageSquareDetail} from "react-icons/bi";
import { RiServiceLine,} from "react-icons/ri";
import {ImStatsDots} from "react-icons/im";
import { useState } from 'react';

import { Link } from "react-router-dom"
const NavBar = () => {
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav>
             <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
             <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects'?'active':''}><BiBook/></a>
                <a href="#stats" onClick={()=>setActiveNav('#stats')} className={activeNav==='#stats'?'active':''}><ImStatsDots/></a>
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
            {/*<a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><BiMessageSquareDetail/></a> */}

                {/* <Link to="/"> <img  className="imagen"alt="home" src="home-blanco.png" /> </Link> */}
            {/* <Link  to="/projects">
                Projects</Link>
            <Link to="/stats">
                Stats</Link>
            <Link  to="/aboutme">
                Profile</Link> */}
        </nav >
    )
}
export default NavBar;
