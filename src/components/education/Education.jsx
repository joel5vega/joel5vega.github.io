import React from "react";
import "./education.css";
import EducationItem from "./EducationItem";

/// Logos
import { FaLinux, FaCentos } from "react-icons/fa";
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
  SiGnubash
} from "react-icons/si";
import { DiGoogleCloudPlatform, DiPhp } from "react-icons/di";
import { GrFirewall } from "react-icons/gr";
import DataEducation from "./DataEducation";
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
  bash: <SiGnubash />
};
function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="container education__container">
        <div className="education__area">
          <h5>Operating Systems</h5>
          <div className="education__content">
            {DataEducation.OS.map((item) => (
              <EducationItem logo={iconObj[item.icon]} data={item} />
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
              <EducationItem logo={iconObj[item.icon]} data={item} />
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5>IT Infrastructure</h5>
          <div className="education__content">
            {DataEducation.Infra.map((item) => (
              <EducationItem logo={iconObj[item.icon]} data={item} />
            ))}
          </div>
        </div>
        <div className="education__area">
          <h5>Programming</h5>
          <div className="education__content">
            {DataEducation.Code.map((item) => (
              <EducationItem logo={iconObj[item.icon]} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
