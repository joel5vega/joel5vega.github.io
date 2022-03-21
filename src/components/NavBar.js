import { React } from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (

        <Navbar sticky='top' collapseOnSelect defaultExpanded expand="lg" bg="dark" variant='dark'>

            <Link to="/"><img className='icon' alt="home" src="https://cdn-icons-png.flaticon.com/512/619/619032.png" /></Link>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse id="responsive-navbar-nav"> */}

            <Link className="enlace" to="/projects"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="projects" />Projects</Link>
            <Link className="enlace" to="/stats"><img className='icon' src="https://cdn-icons-png.flaticon.com/512/921/921591.png" alt="stats" />Stats</Link>
            <Link className="enlace" to="/aboutme"><img className='icon' alt="yo" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" />Yo</Link>


            {/* </Navbar.Collapse> */}


        </Navbar>

    )
}
export default NavBar;
