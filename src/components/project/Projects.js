import React from "react";
import "./projects.css"
import Proyecto from "./Proyecto";
// import {withRouter} from "react-router";
const Projects = () => {
    return (
        <section id="projects" >
            <h1>Projects</h1>
            <div className="proyectos__container">
                <Proyecto img="horarios-crear.png" alt="crearHorario" titulo="Sistema de Horarios" link="https://joelvega.me/sishorarios/" descripcion="Information System to manage class data and brings visibility and stats to support decission making backend:Laravel, frontend:React ." repo="https://github.com/joel5vega/sishorarios" />
                <Proyecto img="testDones.png" alt="dones" titulo="Test de dones" link="https://joelvega.me/dones/" descripcion="Test of spiritual gifts. Answer questions and find out with spiritual gift is more prominent. React, Data Visualization" repo="https://github.com/joel5vega/dones" />
                <Proyecto img="fletsy.gif" alt="dones" titulo="Fletsy" link="https://joelvega.me/fletsy/" descripcion="Searcher of Transport enterprises. B2B" repo="https://github.com/joel5vega/fletsy" />
                <Proyecto img="images/acceptgo.png" alt="dones" titulo="AcceptGO" link="https://joelvega.me/acceptgo/" descripcion="Toolbox of AcceptGO. Career advice" repo="https://github.com/joel5vega/acceptgo" />
            </div>
        </section>
    )
}
export default Projects;
