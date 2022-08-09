import React from "react";
import "./education.css";
import EducationItem from "./EducationItem";
/// Logos
import Stack from "@mui/material/Stack";
import { FaLinux, FaCentos, FaServer ,FaFlagUsa} from "react-icons/fa";
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
  SiGnubash,
  SiReact,
  SiAnsible,
  SiSpringsecurity
} from "react-icons/si";
import  {HiTranslate} from "react-icons/hi";
import { DiGoogleCloudPlatform, DiPhp } from "react-icons/di";
import { GrFirewall ,GrCodepen} from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import DataEducation from "./DataEducation";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import {TiSortAlphabeticallyOutline} from "react-icons/ti";

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
  react: <SiReact />,
  ansible: <SiAnsible />,
  sophos: <SiSpringsecurity />,
  english: <FaFlagUsa />,
  chinese: <HiTranslate />,
  spanish: <TiSortAlphabeticallyOutline />,
  development: <GrCodepen />,
};
function Education() {
  return (
    <section id="education">
      <h1>Education</h1>
      {/* <Certificado link="https://drive.google.com/file/d/1-PwRa10MkAPWmAkXqJTsSfXoydmqxAyK/preview"/> */}
      <div className="container education__container">
        <div className="education__area">
          <h5>
            <MdOutlineSettingsSystemDaydream />
            Operating Systems
          </h5>

          <Stack direction="row" spacing={2} alignContent="center">
            {DataEducation.OS.map((item) => (
              <EducationItem
                key={item.id}
                logo={iconObj[item.icon]}
                data={item}
              />
            ))}
          </Stack>
        </div>
        <div className="education__area">
          <h5>
            <AiOutlineCloudSync />
            Cloud Technology
          </h5>
          <Stack direction="row" spacing={2} alignContent="center">
            {DataEducation.Cloud.map((item) => (
              <EducationItem
                key={item.id}
                logo={iconObj[item.icon]}
                data={item}
              />
            ))}
          </Stack>
        </div>
        <div className="education__area">
          <h5>
            <FaServer />
            IT Infrastructure
          </h5>
          <Stack direction="row" spacing={2} alignContent="center">
            {DataEducation.Infra.map((item) => (
                <EducationItem key={item.id}logo={iconObj[item.icon]} data={item} />
            ))}
          </Stack>
        </div>
        <div className="education__area">
          <h5>
            <FaCode />
            Programming
          </h5>
          <Stack direction="row" spacing={2} alignContent="center">
            {DataEducation.Code.map((item) => (
                <EducationItem key={item.id}logo={iconObj[item.icon]} data={item} />
            ))}
          </Stack>
        </div>
        <div className="education__area">
          <h5>
            <RiTranslate />
            Languages{" "}
          </h5>
          <Stack direction="row" spacing={2}>
            {DataEducation.Lang.map((item) => (
                <EducationItem key={item.id}logo={iconObj[item.icon]} data={item} />
            ))}
          </Stack>
        </div>
      </div>
    </section>
  );
}
export default Education;
