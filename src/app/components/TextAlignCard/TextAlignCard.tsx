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


const TextAlignCard = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    };
    const RightAlignedCard = () => {
        const cardContentStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // Align items to the right
        };
    }

  return (
    <>
    <Grid container spacing={3}>
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
                <CardActions>
                    <Button variant="contained" color="primary">
                        Go somewhere
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card>
                <CardContent sx={cardContentStyle}>
                <Typography gutterBottom variant="h5" component="div">
                    Card title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary">
                    Go somewhere
                </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card>
                <CardContent sx={cardContentStyle}>
                <Typography gutterBottom variant="h5" component="div">
                    Card title
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consectetur eros at varius.
                </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
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

export default TextAlignCard;
