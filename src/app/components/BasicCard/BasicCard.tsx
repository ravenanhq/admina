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


const BasicCard = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card>
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
            <Card>
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
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ height: 300 }}
                    image="/assets/images/card_3.jpg"
                    title="green iguana"
                />
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    </>
  );
};

export default BasicCard;
