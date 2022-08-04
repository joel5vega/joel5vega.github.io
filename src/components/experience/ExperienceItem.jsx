import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function ExperienceItem(props) {
  return (
    <div className="experience__item">
      <h2>{props.title}</h2>
      <h4>
        <a href={props.link} target="_blank" rel="noreferrer">
          <img className="logo" src={props.logo} alt="" />
        </a>
      </h4>
      <h5>{props.experience}</h5>
      <div className="experience__content">
        {props.details.map((detail, index) => (
          <article id={index} className="experience__details">
            <div>
              <h4>
                {detail.icon}
                {detail.skill}
              </h4>
              {detail.description.map((description, indice) => (
                <li key={indice} className="text-light" >{description}</li>
              ))}
            </div>
          </article>
        ))}
        <h3>Technologies</h3>
        <Stack direction="row" spacing={1}>
          {props.technologies.map((technology, index) => (
            <Chip
              id={index}
              label={technology}
              variant="outlined"
              color="primary"
            />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default ExperienceItem;
