import "./experience.css";


// import { GrAnalytics, GrVirtualMachine } from "react-icons/gr";

import LogoQTM from "../../assets/logo/logo-quantum-white.png";
import LogoAcceptGO from "../../assets/logo/logo-acceptgo-white.png";
import LogoShalom from "../../assets/logo/logo-shalom.png";
import LogoUSQ from "../../assets/logo/logo-usq.png";
import ExperienceItem from "./ExperienceItem";
import DataExperience from "./DataExperience";
const LogoObj={"Quantum":LogoQTM,"AcceptGO":LogoAcceptGO,"Shalom":LogoShalom,"UnoSquare":LogoUSQ};
const Experience = (props) => {
  return (
    <section  id="experience">
      <h1>My experience</h1>
      <div className="container experience__container">
        {DataExperience.map((experience, index) => (
          <div key={index}>
          <ExperienceItem 
          title={experience.title} 
          logo={LogoObj[experience.company]}
          link={experience.link}
          description={experience.description}
          date={experience.date}
          tech={experience.tech}
          />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
