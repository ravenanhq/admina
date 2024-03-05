import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

const HorizontalCard = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              sx={{ width: 200 }}
              image="/assets/images/card_1.jpg"
              title="green iguana"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit consectetur eros at varius.
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonComponent
                  variant="contained"
                  type="button"
                  size="small"
                  style={{
                    borderRadius: "10px",
                    background: "#1976d2",
                    padding: "5px 15px",
                  }}
                  name="Go somewhere"
                ></ButtonComponent>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              sx={{ width: 200 }}
              image="/assets/images/card_2.jpg"
              title="green iguana"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit consectetur eros at varius.
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonComponent
                  variant="text"
                  type="button"
                  size="small"
                  style={{ fontSize: "13px" }}
                  name="Share"
                ></ButtonComponent>
                <ButtonComponent
                  variant="text"
                  type="button"
                  size="small"
                  style={{ fontSize: "13px" }}
                  name="Learn more"
                ></ButtonComponent>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HorizontalCard;
