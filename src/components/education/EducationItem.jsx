import React from "react";
import { GiDiploma } from "react-icons/gi";
function EducationItem(props) {
  ////
  const { id,name,  link } = props.data;
  return (
    <div className="education__item" key={id}>
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
