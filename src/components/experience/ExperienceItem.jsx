import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
function ExperienceItem(props) {
  return (
    <div className="experience__item">
      <h3>{props.title}</h3>
      <h4>
        <a href={props.link} target="_blank">
          <img className="icon" src={props.logo} />
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
              <small className="text-light">{detail.description}</small>
            </div>
          </article>
        ))}
        <h3>Technologies</h3>
        <Stack direction="row" spacing={1}>
          
          {props.technologies.map((technology, index) => (
            <Chip id={index}label={technology} variant="outlined" color="primary"/>
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default ExperienceItem;
