import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const VerticalAndHorizondalScrollbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={3} className="scrollable-container">
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Vertical and Horizontal Scrollbar
            </Typography>
            <div className="vertical-horizontal-scroll scrollable">
              <div className="scroll-content">
                <CardMedia
                  className="scrollImage"
                  sx={{
                    marginTop: "10px",
                    height: 200,
                    width: isMobile ? "auto" : 1000,
                  }}
                  image="/assets/images/card_1.jpg"
                  title="green iguana"
                />
                <Typography variant="body2" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VerticalAndHorizondalScrollbar;
