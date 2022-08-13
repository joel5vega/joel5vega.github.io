import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

//Fotos
import { FcExpand } from "react-icons/fc";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{  background: "var(--color-bg)" }}>
      <CardHeader
        sx={{ color: "var(--color-primary)" }}
        avatar={
          <Avatar sx={{ bgcolor: "var(--color-bg)" }} aria-label="item">
            {props.logo}
          </Avatar>
        }
        action={
          <IconButton onClick={handleExpandClick} aria-label="settings">
            <FcExpand />
          </IconButton>
        }
        title={<h2>{props.title}</h2>}
        // subheader="September 14, 2016"
      />

      {props.photo}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ color: "var(--color-light)" }}>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
