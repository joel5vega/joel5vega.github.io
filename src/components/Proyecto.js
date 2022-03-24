import React from "react";
const Proyecto = (props) => {
    return (
        <div className="tarjeta">
            <hr></hr>
            <div className="titulo-descripcion" ><a className="enlace" href={props.link}>{props.titulo}</a></div>
            <img className="imagen" src={props.img} alt={props.alt} />
            <div className="descripcion">
                <div className="texto-descripcion">{props.descripcion}</div>
                {/* <Link to="sishorarios" target="_blank"><div className="button ">+ info</div></Link> */}
            </div>
        </div>
    )
}
export default Proyecto;