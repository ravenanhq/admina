import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import ButtonComponent from "../BaseComponent/Button";
import { useRouter } from "next/navigation";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/admin", { scroll: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          padding: "50px",
          maxWidth: "500px",
          boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #ffffff, #e6e9f0)",
          position: "relative",
          overflow: "visible",
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: "100px",
            color: "#ff1744",
            position: "absolute",
            top: "0",
            paddingTop: "15px",
            left: "calc(50% - 50px)",
          }}
        />
        <CardContent>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="errPage"
            style={{ marginTop: "25px" }}
          >
            <Grid item>
              <Typography variant="h2" color="primary" fontWeight="bold">
                4
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" color="secondary" fontWeight="bold">
                0
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" color="primary" fontWeight="bold">
                4
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginTop: "20px", fontStyle: "italic" }}
          >
            Oops! We can't find that page.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: "10px" }}
          >
            Don't worry, you can always head back to the homepage.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", marginTop: "30px" }}>
          <ButtonComponent
            variant="contained"
            size="large"
            onClick={handleHomeRedirect}
            style={{
              textTransform: "capitalize",
              background: "#3f51b5",
              color: "#ffffff",
              padding: "10px 25px",
            }}
            name="Go Home"
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default NotFoundPage;
