import "./experience.css";
import { FaLinux, FaWhatsapp } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { FiPenTool } from "react-icons/fi";
import { FcDocument } from "react-icons/fc";
import {RiDashboardLine} from "react-icons/ri"
import {
  SiApachekafka,
  SiOracle,
  SiTwilio,
  SiZapier,
  SiGoogleanalytics,
  SiReact,
  SiGooglesheets,
  SiServerfault,
  SiMysql
} from "react-icons/si";
// import { GrAnalytics, GrVirtualMachine } from "react-icons/gr";
import { DiRedhat } from "react-icons/di";
import LogoQTM from "../../assets/logo/logo-qtm.png";
import LogoAcceptGO from "../../assets/logo/logo-acceptgo.png";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h5>Skills I Have</h5> */}
      <h1>My experience</h1>
      <div className="container experience__container">
        <ExperienceItem
          title="Infraestructure Engineer"
          logo={LogoQTM}
          link="http://129.151.103.245:3000/"
          experience="+5 years of experience"
          details={[
            {
              icon: <FaLinux />,
              skill: "Linux",
              description: ["Managing critical linux servers."]
            },
            {
              icon: <GiArchiveResearch />,
              skill: "Log analysis",
              description: ["Proactive analysis of logs.Bash scripting."]
            },
            {
              icon: <FiPenTool />,
              skill: "Implementation",
              description:
                ["Implementation of multiple technology solutions","Red Hat Enterprise Virtualization. Oracle Linux Manager.RH Satellite."]
            },
            {
              icon: <FcDocument />,
              skill: "Technical documentation",
              description: ["Documenting infrastructure implementations."]
            },
            
          ]}
          technologies={[
            <SiApachekafka />,
            <FaLinux />,
            <SiOracle />,
            <DiRedhat />,
            <SiServerfault />,
            <SiMysql/>
          ]}
        />
         <ExperienceItem
          title="Lead Developer"
          logo={LogoAcceptGO}
          link="http://acceptgo.co"
          experience="3 months"
          details={[
            {
              icon: <SiTwilio />,
              skill: "Twilio",
              description: ["Automated SMS to new leads."]
            },
            {
              icon: <SiZapier />,
              skill: "Zapier",
              description:
                ["Integration between Calendly and GSheets through Zapier, to centralize Database."]
            },
            {
              icon: <SiGoogleanalytics />,
              skill: "Analytics",
              description: ["Implementation of Google Analytics in landing page, to analyze traffic."]
            },
            {
              icon: <SiReact />,
              skill: "Toolbox",
              description: ["Migrating the business logic to new technology in react."]
            },
            {
              icon: <RiDashboardLine />,
              skill: "Data Visualization",
              description: ["Implemented a Dashboard in Data Studio to analyse weekly leads."]
            }
          ]}
          technologies={[
            <SiTwilio />,
            <SiZapier />,
            <SiGoogleanalytics />,
            <SiReact />,
            <SiGooglesheets />,
            <FaWhatsapp />,
            <RiDashboardLine/>
          ]}
        /> 
      </div>
    </section>
  );
};
export default Experience;
