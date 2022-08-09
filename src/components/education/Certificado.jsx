import React from "react";

function Certificado(props) {
  return (
    <div>
      <iframe
        src={props.link}
        width="fit-content"
        height="240"
         allow="autoplay"
         autoPlay="0"
        allowFullscreen
        title={props.name}
      ></iframe>
    </div>
  );
}

export default Certificado;
