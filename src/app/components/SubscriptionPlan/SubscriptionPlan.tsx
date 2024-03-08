import React, { useEffect, useState } from "react";
import { Button, Snackbar, Grid, Card, Typography } from "@mui/material";
import subscriptionPlan from "../../../subscription-plan.json";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SubscriptionPlanTable = () => {
  const [rows, setRows] = useState([]);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [message, setMessage] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <Grid container>
        <Grid item xs={12} md={4} sx={{ padding:isMobile ? "0 0 10px 0" : "0 10px 0 0" }}>
          <Card>
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#36C7E2",
                backgroundImage: "linear-gradient(to right, #008e81, #00cf97)",
                padding: "26px 8px",
                color: "#fff",
                textAlign: "center",
                textTransform:"uppercase"
              }}
            >
              Price Plan
            </Typography>
            {rows[0]?.features.map((feature) => (
              <Typography
                style={{
                  textAlign: "center",
                  padding: "14.8px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {feature.name}
              </Typography>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            {rows.map((plan) => (
              <Grid item key={plan.id} xs={12} md={3}>
                <Card style={{ borderRadius: "0" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: plan.bgColor,
                      padding: "8px",
                      color: "#fff",
                      textAlign: "center",
                      opacity: 0.8,
                      textTransform:"uppercase"
                    }}
                  >
                    {plan.plan}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: plan.bgColor,
                      padding: "8px",
                      color: "#fff",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  {plan.features.map((feature) => (
                    <Typography
                      key={feature.name}
                      color={feature.included ? "#37abac" : "#ee6584"}
                      sx={{
                        textAlign: "center",
                        padding: "15px 0 7px 0",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      {feature.included ? <CheckCircleIcon /> : <CancelIcon />}
                    </Typography>
                  ))}
                </Card>
                <div
                  key={plan.id}
                  style={{ textAlign: "center", padding: "15px 0" }}
                >
                  <Button
                    onClick={() => handleBuyNow(plan.plan)}
                    style={{ backgroundColor: plan.bgColor, color: "#fff" }}
                  >
                    Buy Now
                  </Button>
                </div>
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

export default SubscriptionPlanTable;
