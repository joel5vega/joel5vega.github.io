import React from "react";
import MoreInfo from "./MoreInfo";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Proyecto = (props) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 345,background:"var(--fondo)",border:"1px solid var(--color-primary)" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="var(--color-primary)">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="var(--blanco)">
                        {props.descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <MoreInfo demo={props.link} repo={props.repo} />
                </Button>
            </CardActions>
        </Card>
    )
}
export default Proyecto;