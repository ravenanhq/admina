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
        sx={{
          pt: { xs: 1, sm: 2, md: 3 },
          color: "#007BFF",
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          fontWeight: "bold",
        }}
      >
        Pages / 404 Page
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "70vh", sm: "70vh" },
          textAlign: "center",
          mt: { xs: 2, sm: 3 },
        }}
      >
        <Card
          sx={{
            padding: { xs: "20px", sm: "25px", md: "0" },
            position: "relative",
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
            >
              <Grid item>
                <Image
                  src={ErrImage}
                  alt="customer support"
                  width={0}
                  height={0}
                  sizes="80vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                marginTop: { xs: "10px", sm: "15px", md: "20px" },
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
              sx={{
                marginTop: { xs: "10px", sm: "10px", md: "20px" },
                fontSize: "12px",
                color: "#565656",
              }}
            >
              Oops! We can't find that page.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#565656",
              }}
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
