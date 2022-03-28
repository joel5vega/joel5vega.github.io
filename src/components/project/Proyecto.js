import React from "react";
import MoreInfo from "./MoreInfo";
const Proyecto = (props) => {
    return (
        <div className="proyecto__container">
            <div className="proyecto__show">
                <img className="proyecto__img" src={props.img} alt={props.alt} />
            </div>
            <div className="proyecto__descripcion">
                <h4>{props.titulo}</h4>
                <p>{props.descripcion}</p>
                <MoreInfo demo={props.link} repo={props.repo} />
            </div>
        </div>
    )
}
export default Proyecto;