import React, { useEffect, useState } from "react";
import {
  Button,
  Snackbar,
  Grid,
  Card,
  Typography,
  Divider,
} from "@mui/material";
import subscriptionPlan from "../../../subscription-plan.json";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const SubscriptionPlanCard = () => {
  const [rows, setRows] = useState([]);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [message, setMessage] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setRows(subscriptionPlan);
  }, []);

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleBuyNow = (planName) => {
    setMessage(`You clicked Buy Now for ${planName}`);
    setSuccessMessageOpen(true);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            {rows.map((plan) => (
              <Grid item key={plan.id} xs={12} sm={3} md={3}>
                <Card
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    padding: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      padding: isMobile ? "8px" : isTab ? "" : "8px",
                      color: "#000",
                      textTransform: "uppercase",
                      fontSize: isMobile ? "30px" : isTab ? "20px" : "32px",
                    }}
                  >
                    {plan.plan}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: plan.price,
                      padding: isMobile ? "8px" : isTab ? "" : "8px",
                      color: "#000",
                      fontSize: "25px",
                      position: "absolute",
                      marginTop: isMobile ? "30px" : isTab ? "13px" : "20px",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: plan.price,
                      color: "#000",
                      fontSize: isMobile ? "70px" : isTab ? "40px" : "60px",
                      display: "inline-block",
                      opacity: 0.1,
                    }}
                  >
                    {plan.price}
                  </Typography>

                  <Divider
                    sx={{
                      color: "#000",
                      margin: "0 25px 10px 10px",
                      padding: "0 10px",
                    }}
                  />
                  <div style={{ height: "240px" }}>
                    {plan.features.map(
                      (feature) =>
                        feature.included && (
                          <Typography
                            key={feature.name}
                            color="#000"
                            sx={{
                              padding: "15px 0px 7px 10px",
                            }}
                          >
                            {feature.name}
                          </Typography>
                        )
                    )}
                  </div>
                  <div
                    key={plan.id}
                    style={{ textAlign: "center", padding: "15px 0" }}
                  >
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      onClick={() => handleBuyNow(plan.plan)}
                      style={{
                        backgroundColor: plan.bgColor,
                        color: "#fff",
                        width: isMobile ? "50%" : isTab ? "100%" : "50%",
                        padding: isTab ? "4px 0" : "10px 0",
                        opacity: 0.8,
                        border: "1px solid",
                        borderColor: plan.bgColor,
                      }}
                      name="Buy Now"
                    ></ButtonComponent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={message}
      />
    </div>
  );
};

export default SubscriptionPlanCard;
