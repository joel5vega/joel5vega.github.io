import "./experience.css";
import { FaLinux } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { FiPenTool } from "react-icons/fi";
import { FcDocument } from "react-icons/fc";
import LogoQTM from "../../assets/logo/logo-qtm.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__item">
          <h3>IT Ops engineer</h3>
          <h4>
            <a href="http://129.151.103.245:3000/" target="_blank">
              <img className="icon" src={LogoQTM} />
            </a>
          </h4>
          <h5>+5 years of experience</h5>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>
                  <FaLinux className="experience__details-icons" />
                  Linux
                </h4>
                <small className="text-light">
                  Managing critical linux servers
                </small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>
                  <GiArchiveResearch className="experience__details-icons" />
                  Log analysis
                </h4>
                <small className="text-light">
                  Proactive analysis of logs.
                </small>
                <small className="text-light">Bash scripting</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>
                  <FiPenTool className="experience__details-icons" />
                  Implementation
                </h4>
                <small className="text-light">
                  Implementation of multiple technology solutions:
                  <br></br>
                  Red Hat Enterprise Virtualization. Oracle Linux Manager. RH
                  Satellite.
                </small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>
                  <FcDocument className="experience__details-icons" />
                  Technical documentation
                </h4>
                <small className="text-light">
                  Documenting infrastructure implementations.
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="experience__item">
          <h3>Rol22</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaLinux />
              <div>
                <h4>Linux administration</h4>
                <small className="text-light">detail</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLinux />
              <div>
                <h4>Log analysis</h4>
                <small className="text-light">detail</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLinux />
              <div>
                <h4>Log analysis</h4>
                <small className="text-light">detail</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__item">
          <h3>R333</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaLinux />
              <div>
                <h4>Linux administration</h4>
                <small className="text-light">detail</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLinux />
              <div>
                <h4>Log analysis</h4>
                <small className="text-light">detail</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Experience;
