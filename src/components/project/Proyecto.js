import React from "react";
import MoreInfo from "./MoreInfo";
const Proyecto = (props) => {
    return (
        <div className="container">
            <h1>{props.titulo}</h1>
            <div className="proyecto">
            <img className="imagen" src={props.img} alt={props.alt} />
            <div>
            <h5>{props.descripcion}</h5>
            <MoreInfo  demo={props.link} repo={props.repo}/>
            </div>
            
            </div>
           
        </div>
    )
}
export default Proyecto;