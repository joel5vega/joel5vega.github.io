import React from "react";
import "./education.css";
import EducationItem from "./EducationItem";

/// Logos
import { FaLinux, FaCentos ,FaServer} from "react-icons/fa";
import { AiOutlineCloudSync } from "react-icons/ai";
import {
  SiSuse,
  SiRedhat,
  SiUbuntu,
  SiMicrosoftazure,
  SiAmazonaws,
  SiOracle,
  SiCisco,
  SiMysql,
  SiKubernetes,
  SiDocker,
  SiRancher,
  SiHuawei,
  SiPython,
  SiJavascript,
  SiGnubash,SiReact,SiAnsible,SiSpringsecurity
} from "react-icons/si";
import {IoLanguageSharp} from "react-icons/io"
import { DiGoogleCloudPlatform, DiPhp } from "react-icons/di";
import { GrFirewall ,GrSystem} from "react-icons/gr";
import {FaCode} from "react-icons/fa"
import {RiTranslate} from "react-icons/ri"
import DataEducation from "./DataEducation";
import  {MdOutlineSettingsSystemDaydream}from "react-icons/md"
let iconObj = {
  linux: <FaLinux />,
  suse: <SiSuse />,
  redhat: <SiRedhat />,
  centos: <FaCentos />,
  ubuntu: <SiUbuntu />,
  azure: <SiMicrosoftazure />,
  aws: <SiAmazonaws />,
  oci: <SiOracle />,
  gcp: <DiGoogleCloudPlatform />,
  firewall: <GrFirewall />,
  cisco: <SiCisco />,
  mysql: <SiMysql />,
  kubernetes: <SiKubernetes />,
  docker: <SiDocker />,
  rancher: <SiRancher />,
  telecom: <SiHuawei />,
  python: <SiPython />,
  php: <DiPhp />,
  js: <SiJavascript />,
  bash: <SiGnubash />,
  react:<SiReact/>,
  ansible:<SiAnsible/>,
  sophos:<SiSpringsecurity/>
};
function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="container education__container">
        <div className="education__area">
          <h5><MdOutlineSettingsSystemDaydream/>Operating Systems</h5>
          <div className="education__content">
            {DataEducation.OS.map((item) => (
              <div key={item.id}>
              <EducationItem logo={iconObj[item.icon]} data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5>
            <AiOutlineCloudSync />
            Cloud Technology
          </h5>
          <div className="education__content">
            {DataEducation.Cloud.map((item) => (
              <div key={item.id}>
              <EducationItem logo={iconObj[item.icon]} data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5><FaServer/>IT Infrastructure</h5>
          <div className="education__content">
            {DataEducation.Infra.map((item) => (
              <div key={item.id}>
              <EducationItem logo={iconObj[item.icon]} data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5><FaCode/>Programming</h5>
          <div className="education__content">
            {DataEducation.Code.map((item) => (
              <div key={item.id}>
              <EducationItem logo={iconObj[item.icon]} data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5><RiTranslate/>Languages </h5>
          <div className="education__content">
            {DataEducation.Lang.map((item) => (
              <div key={item.id}>
              <EducationItem logo={iconObj[item.icon]} data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
