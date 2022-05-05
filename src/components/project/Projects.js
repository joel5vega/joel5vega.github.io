import React from "react";
import "./projects.css"
import Proyecto from "./Proyecto";
// import {withRouter} from "react-router";
const Projects = () => {
    return (
        <section id="projects" >
            <h1>Projects</h1>
            <div className="proyectos__container">
            <Proyecto img="horarios-crear.png" alt="crearHorario" titulo="Sistema de Horarios" link="https://joelvega.me/sishorarios/" descripcion="Information System to manage class data and brings visibility and stats to support decission making backend:Laravel, frontend:React ."repo="https://github.com/joel5vega/sishorarios"/>
            <Proyecto img="testDones.png" alt="dones" titulo="Test de dones" link="https://joelvega.me/dones/" descripcion="Test of spiritual gifts. React, Data Visualization"repo="https://github.com/joel5vega/dones"/>
            {/* <Proyecto img="quantum.png" alt="quantum" titulo="Despliegue de página web de Quantum" link="http://129.151.103.245:3000" descripcion="" /> */}
            </div>
        </section>
    )
}
export default Projects;