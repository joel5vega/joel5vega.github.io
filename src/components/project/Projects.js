import React from "react";
import "./projects.css"
import Proyecto from "./Proyecto";

import DataProjects from "./DataProjects";

const Projects = () => {
    return (
        <section id="projects" >
            <h1>Projects</h1>
            <div className="proyectos__container">
                {DataProjects.map((proyecto, index) => (
                    <Proyecto key={index}  {...proyecto} />))}
            </div>
        </section>
    )
}
export default Projects;
