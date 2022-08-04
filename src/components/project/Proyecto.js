import React from "react";
import MoreInfo from "./MoreInfo";
const Proyecto = (props) => {
    return (
        <div className="proyecto__container">
             <div className="proyecto__descripcion">
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
                <MoreInfo demo={props.link} repo={props.repo} />
            </div>
            <div className="proyecto__show">
                <img className="proyecto__img" src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}
export default Proyecto;