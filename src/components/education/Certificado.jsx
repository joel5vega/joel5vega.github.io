import React from "react";

function Certificado(props) {
  return (
    <div>
      <iframe
        src={props.link}
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Certificado;
