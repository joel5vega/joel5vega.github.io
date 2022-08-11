import React from "react";
import MoreInfo from "./MoreInfo";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import Fletsy from "../../assets/projects/fletsy.gif";
import Dones from "../../assets/projects/testDones.png";
import SIHE from "../../assets/projects/horarios-crear.png";
import AcceptGO from "../../assets/projects/acceptgo.png"
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
    SiSpringsecurity, SiVirtualbox
} from "react-icons/si";

import { FaLinux, FaCentos } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { GrFirewall, GrCodepen } from "react-icons/gr";
let iconObj = {
    linux: <FaLinux />,
    suse: <SiSuse />,
    redhat: <SiRedhat />,
    centos: <FaCentos />,
    ubuntu: <SiUbuntu />,
    azure: <SiMicrosoftazure />,
    aws: <SiAmazonaws />,
    oci: <SiOracle />,
    // gcp: <DiGoogleCloudPlatform />,
    firewall: <GrFirewall />,
    cisco: <SiCisco />,
    mysql: <SiMysql />,
    kubernetes: <SiKubernetes />,
    container: <SiVirtualbox />,
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
    development: <GrCodepen />,
};
const projImg = {
    sihe: <img src={SIHE} className="photo" alt="SIHE" />,
    dones: <img src={Dones} className="photo" alt="Dones" />,
    acceptgo: <img src={AcceptGO} className="photo" alt="AcceptGO" />,
    fletsy: <img src={Fletsy} className="photo" alt="Fletsy" />,
}
const Proyecto = (props) => {
    return (
        <Card variant="outlined" sx={{ display:"flex", flexDirection:"column",alignItems:"center",flexWrap:"wrap",width: 360, background: "var(--fondo)", border: "1px solid var(--color-primary)", borderRadius: "1rem" }}>
            <CardActionArea>
                <div className="proyecto__img">
                    {projImg[props.img]}
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="var(--color-primary)">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="var(--blanco)">
                        {props.description}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <MoreInfo demo={props.link} repo={props.repo} />
                    <Stack direction="row" spacing={1} justifyContent="center">
                        {props.tech.map((item, key) => (
                            <h2 key={key}>{iconObj[item]}</h2>
                        ))}
                    </Stack>
                </Button>
            </CardActions>
        </Card>
    )
}
export default Proyecto;