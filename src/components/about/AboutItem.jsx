import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

//Fotos
import China from "../../assets/photos/china.png";
import Susi from "../../assets/photos/susi.png";
import Canaan from "../../assets/photos/canaan.png";
import XA from "../../assets/photos/xa.png";
import TWMS from "../../assets/photos/xa-2016.png";
// import Bethel from "../../assets/photos/bethel.png";
import {FcExpand} from "react-icons/fc";

let photoObj = {
    china: "../../assets/photos/china.png",
    susi: <img src={Susi} className="photo" />,
    xa: <img src={XA} className="photo" />,
    twms: <img src={TWMS} className="photo" />,
    cnn: <img src={Canaan} className="photo" />
  };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, background:"var(--color-bg)"}}>
      <CardHeader sx={{color:"var(--color-primary)"}}
        avatar={
          <Avatar sx={{ bgcolor: "var(--color-bg)" }} aria-label="recipe">
            {props.logo}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={<h2>{props.title}</h2>}
        // subheader="September 14, 2016"
      />
    
     {props.photo}
      <CardActions disableSpacing>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <FcExpand/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent  sx={{color:"var(--color-light)"}}>
          <Typography paragraph>
           {props.description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
