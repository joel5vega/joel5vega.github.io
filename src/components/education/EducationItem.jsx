import React from "react";

function EducationItem(props) {
  const { name, description, link } = props.data;
  return (
    <div key={link} className="education__item">
      <a href={link}>
        {props.logo} {name}
      </a>
    </div>
  );
}

export default EducationItem;
