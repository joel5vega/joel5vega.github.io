import { React } from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (

        <Navbar sticky='top' collapseOnSelect defaultExpanded expand="lg" bg="dark" variant='dark'>
            {/* <div className='opcion'> */}
                <Link to="/"><img className='icon' alt="home" src="home-blanco.png" /></Link>
            {/* </div> */}

            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse id="responsive-navbar-nav"> */}

            <Link className="enlace" to="/projects">
                {/* <img className='icon' src="proyecto-blanco.png" alt="projects" /> */}
                Projects</Link>
            <Link className="enlace" to="/stats">
                {/* <img className='icon' src="stat-blanco.png" alt="stats" /> */}
                Stats</Link>
            <Link className="enlace" to="/aboutme">
                {/* <img className='icon' alt="yo" src="persona-blanco.png" /> */}
                Profile</Link>


            {/* </Navbar.Collapse> */}


        </Navbar>

    )
}
export default NavBar;
