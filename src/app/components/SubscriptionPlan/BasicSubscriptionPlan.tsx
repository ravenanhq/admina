import React, { useEffect, useState } from "react";
import {
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

const BasicSubscriptionPlan = () => {
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
                    border: "1px solid",
                    borderColor: plan.bgColor,
                    padding: "20px 0 0 0",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: plan.bgColor,
                      color: "#fff",
                      fontSize: "20px",
                      textAlign: "center",
                      margin: "0 auto",
                      width: "90px",
                      height: "90px",
                      lineHeight: "90px",
                      borderRadius: "45px",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      padding: "8px",
                      backgroundColor: plan.bgColor,
                      color: "#fff",
                      textAlign: "center",
                      textTransform: "uppercase",
                      marginTop: "15px",
                      fontSize: isMobile ? "25px" : isTab ? "20px" : "25px",
                    }}
                  >
                    {plan.plan}
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
                              padding: "15px 0px 7px 0px",
                              textAlign: "center",
                            }}
                          >
                            {feature.name}
                          </Typography>
                        )
                    )}
                  </div>
                  <div key={plan.id} style={{ textAlign: "center" }}>
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      onClick={() => handleBuyNow(plan.plan)}
                      style={{
                        backgroundColor: plan.bgColor,
                        color: "#fff",
                        width: "100%",
                        padding: isTab ? "4px 0" : "10px 0",
                        opacity: 0.8,
                        borderRadius: "0",
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

export default BasicSubscriptionPlan;
