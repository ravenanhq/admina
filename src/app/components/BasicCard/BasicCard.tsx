import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComponent
                variant="contained"
                type="button"
                style={{
                  borderRadius: "10px",
                  background: "#1976d2",
                  padding: "5px 15px",
                }}
                name="Go somewhere"
              ></ButtonComponent>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComponent
                variant="text"
                type="button"
                style={{ fontSize: "13px" }}
                size="small"
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
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ height: 300 }}
              image="/assets/images/card_3.jpg"
              title="green iguana"
            />
            <CardActions>
              <ButtonComponent
                variant="text"
                type="button"
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
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BasicCard;
