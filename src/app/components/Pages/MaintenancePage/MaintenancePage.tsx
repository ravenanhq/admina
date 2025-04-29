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

const MaintenancePage = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/admin", { scroll: false });
  };

  const MaintanceImage = "/assets/images/maintenance.png";

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
        Pages / Maintenance
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "70vh", sm: "70vh" },
          textAlign: "center",
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
          <CardContent
          sx={{ padding: "0" }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              className="errPage"
            >
              <Grid item
              sx={{paddingBottom: "3px"}}>
                <Image
                  src={MaintanceImage}
                  alt="customer support"
                  width={0}
                  height={0}
                  sizes="(max-width: 600px) 80vw, (max-width: 900px) 60vw, 400px"
                  style={{
                    width: "400px",
                    maxWidth: "400px",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#565656",
              }}
            >
              Maintenance in Progress
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ marginTop: "20px", fontSize: "12px", color: "#565656" }}
            >
              We’re making some improvements to our website. Please check back
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "10px", fontSize: "12px", color: "#565656" }}
            >
              soon. In the meantime, you can return to the home pahe
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", pt: 2 }}>
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

export default MaintenancePage;
