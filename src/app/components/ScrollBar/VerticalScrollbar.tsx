import React from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

const VerticalScrollBar = () => {
  return (
    <Grid container spacing={3} className="scrollable-container">
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Vertical Scrollbar
            </Typography>
            <div className="vertical-scroll scrollable-content scrollable">
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Vertical Image Scrollbar
            </Typography>
            <div className="vertical-scroll scrollable-content scrollable">
              <CardMedia
                sx={{ height: 200 }}
                image="/assets/images/card_1.jpg"
                title="green iguana"
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VerticalScrollBar;
