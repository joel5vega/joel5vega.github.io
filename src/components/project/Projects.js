import React from "react";
import "./projects.css"
import Proyecto from "./Proyecto";
// import {withRouter} from "react-router";
const Projects = () => {
    return (
        <section id="projects"  className="proyectos__container">
            <h1>Projects</h1>
            <Proyecto img="horarios-crear.png" alt="crearHorario" titulo="Sistema de Horarios" link="https://joelvega.me/sishorarios/" descripcion="Administrador y DSS de horarios de clases, arquitectura MVC, backend:Laravel, frontend:React ."repo="https://github.com/joel5vega/sishorarios"/>
            {/* <Proyecto img="quantum.png" alt="quantum" titulo="Despliegue de página web de Quantum" link="http://129.151.103.245:3000" descripcion="" /> */}
        </section>
    )
}
export default Projects;