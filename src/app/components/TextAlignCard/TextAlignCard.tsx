import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";

const TextAlignCard = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };
  const RightAlignedCard = () => {
    const cardContentStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end", // Align items to the right
    };
  };

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonComponent
                variant="contained"
                type="button"
                size="small"
                style={{
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
            <CardContent sx={cardContentStyle}>
              <Typography gutterBottom variant="h5" component="div">
                Card title
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <ButtonComponent
                variant="contained"
                type="button"
                size="small"
                style={{
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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "right" }}
              >
                Card title
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "right" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit consectetur eros at varius.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <ButtonComponent
                variant="contained"
                type="button"
                size="small"
                style={{
                  background: "#1976d2",
                  padding: "5px 15px",
                }}
                name="Go somewhere"
              ></ButtonComponent>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default TextAlignCard;
