import React, { useState } from "react";
import { GiDiploma } from "react-icons/gi";
function EducationItem(props) {
  ////
  const { name, description, link } = props.data;
  return (
    <div className="education__item">
      {props.logo} {name}
      {link && (
        <a className="certificado" href={link} target="__blank">
          <GiDiploma />
        </a>
      )}
    </div>
  );
}

export default EducationItem;
