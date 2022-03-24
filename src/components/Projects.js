import React from "react";
import SisHorarios from "./SisHorarios";
import Proyecto from "./Proyecto";
// import {withRouter} from "react-router";
const Projects = () => {
    return (
        <div className="box" >
            <Proyecto img="horarios-crear.png" alt="crearHorario" titulo="Sistema de Horarios" link="https://joelvega.me/sishorarios/" descripcion="Desarrollo de un sistema para la búsqueda y visualización de los horarios de clases en función del aula, docente o semestre elegido, las materias del pénsum, los docentes y auxiliares, y una herramienta de apoyo a decisiones para la programación de clases, mediante el ciclo de desarrollo de software y la arquitectura Modelo-Vista-Controlador, distribuido en dos subsistemas, comunicados a través de una interfaz que responde a peticiones HTTP."/>
            
            <Proyecto img="quantum.png" alt="quantum" titulo="Despliegue de página web de Quantum" link="http://oci.joelvega.me:3000/" descripcion="" />
            <p>
                <a className="enlace " href="http://docker.joelvega.me:81">
                    <img className="big-icon" src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="docker"/>Contenedor Ngnix en Docker</a>
            </p>
            
        </div>
    )
}
export default Projects;