import React from "react";
import Stack from "@mui/material/Stack";
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FcExpand } from "react-icons/fc";
import { styled } from "@mui/material/styles";
import { FaLinux, FaWhatsapp, FaServer ,FaChessBishop} from "react-icons/fa";
import { GiArchiveResearch,GiTeacher ,GiThink,GiArtificialIntelligence} from "react-icons/gi";
import { FiPenTool } from "react-icons/fi";
import { FcDocument } from "react-icons/fc";
import {RiFlowChart, RiDashboardLine,RiGuideFill } from "react-icons/ri";
import {
  SiApachekafka,
  SiOracle,
  SiTwilio,
  SiZapier,
  SiGoogleanalytics,
  SiReact,
  SiGooglesheets,
  SiServerfault,
  SiMysql,
  SiGnubash
} from "react-icons/si";
import { DiRedhat } from "react-icons/di";
const techObj = {
  Linux: <FaLinux />,
  Kafka: <SiApachekafka />,
  Bash: <SiGnubash />,
  Oracle: <SiOracle />,
  Server: <FaServer />,
  Twilio: <SiTwilio />,
  Zapier: <SiZapier />,
  "Google Analytics": <SiGoogleanalytics />,
  React: <SiReact />,
  "Google Sheets": <SiGooglesheets />,
  "Server Fault": <SiServerfault />,
  MySQL: <SiMysql />,
  "RedHat": <DiRedhat />,
  "Archive Research": <GiArchiveResearch />,
  "Pen Tool": <FiPenTool />,
  Document: <FcDocument />,
  Dashboard: <RiDashboardLine />,
  Whatsapp: <FaWhatsapp />,
  Automation: <RiFlowChart />,
  Chess: <FaChessBishop />,
  Analysis:<GiArtificialIntelligence />,
  Logic:<GiThink />,
  Teach:<GiTeacher />,
  Train:<ModelTrainingIcon />,
  Lead:<RiGuideFill />,
};
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: "black",
  color: "white",
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FcExpand sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0,0, .05)",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0,0,0, .125)",
  backgroundColor: "black"
}));

function ExperienceItem(props) {
  return (
    <div className="experience__item">
      <h2>
        <a href={props.link} target="_blank" rel="noreferrer">
          <img className="logo" src={props.logo} alt="" />
        </a>
      </h2>
      <h3>{props.date}</h3>
      <Stack direction="row" spacing={2}>
        {props.tech.map((technology, index) => (
          <h3 key={index}>{techObj[technology]}</h3>
        ))}
      </Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<FcExpand />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.description.map((description, index) => (
              <li key={index} className="text-light">
                {description}
              </li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExperienceItem;
