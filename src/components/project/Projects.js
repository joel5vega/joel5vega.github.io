import React from "react";
import "./projects.css"
import Proyecto from "./Proyecto";

import DataProjects from "./DataProjects";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
            <h2>Projects</h2>
            <div className="projects-container">
                {DataProjects.map((proyecto, index) => (
                    <Proyecto key={index}  {...proyecto} />))}
            </div>
            </div>
        </section>
    )
}
export default Projects;
