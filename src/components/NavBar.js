import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img className='icon' alt="home" src="https://cdn-icons-png.flaticon.com/512/619/619032.png"/></Link>
            <Link to="/projects"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="projects" />Projects</Link>
            <Link to="/stats"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/921/921591.png" alt="stats"/>Stats</Link>
            <Link to="/aboutme"><img className='icon'alt="yo" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"/>About Me</Link>
        </nav>
    )
}
export default NavBar;
