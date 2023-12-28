import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const GroupCard = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const cardStyle = {
        borderRadius: '0px', // Set other styles as needed
    };


  return (
    <>
    <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card sx={cardStyle}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="/assets/images/card_1.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Go somewhere
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card sx={cardStyle}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="/assets/images/card_2.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Go somewhere
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card sx={cardStyle}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="/assets/images/card_3.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Go somewhere
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    </>
  );
};

export default GroupCard;
