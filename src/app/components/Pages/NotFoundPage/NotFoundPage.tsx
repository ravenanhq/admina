import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import ButtonComponent from "../../BaseComponent/Button";
import Image from "next/image";

const NotFoundPage = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/admin", { scroll: false });
  };

  const ErrImage = "/assets/images/404-page.png";

  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Page / 404 Page
      </Typography>
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
            position: "relative",
            overflow: "visible",
            boxShadow: "none",
            background: "none",
          }}
        >
          <CardContent>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              className="errPage"
              style={{ marginTop: "25px" }}
            >
              <Grid item>
                <Image
                  src={ErrImage}
                  alt="customer support"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#565656",
              }}
            >
              404 Error , Sorry Page Not Found
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ marginTop: "20px", fontSize: "12px", color: "#565656" }}
            >
              Oops! We can't find that page.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "10px", fontSize: "12px", color: "#565656" }}
            >
              Don't worry, you can always head back to the homepage.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", p: 0 }}>
            <ButtonComponent
              variant="contained"
              size="large"
              onClick={handleHomeRedirect}
              style={{
                textTransform: "uppercase",
                background: "#007BFF",
                color: "#ffffff",
                padding: "7px 25px 5px",
                borderRadius: "0",
                fontSize: "12px",
              }}
              name="Go Home"
            />
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default NotFoundPage;
