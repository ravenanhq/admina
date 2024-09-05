import { AccountCircle } from "@mui/icons-material";
import { Grid, CardContent, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import VisitorsIcon from "../../Icons/visitors.svg";
import ShippingCartIcon from "../../Icons/shipping-cart.svg";
import Image from "next/image";

const CustomerSupport = "/assets/images/customer-support.png";

const DataCard = () => {
  return (
    <Grid container spacing={1.5} justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card
          style={{
            height: "151px",
            borderRadius: "5px",
            background: "#E0EAFC",
            boxShadow: "0px 1px 2px -2px #000",
          }}
        >
          <CardContent
            sx={{
              display: "block",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="subtitle1" sx={{ color: "#007BFF" }}>
                Welcome Back
              </Typography>
              <Typography sx={{ color: "#007BFF", fontSize: "12px" }}>
                User!
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "row-reverse",
                top: "-19px",
                right: "-19px",
              }}
            >
              <Image
                src={CustomerSupport}
                alt="customer support"
                width="163"
                height="108"
              />
            </div>
          </CardContent>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              px: 2,
              color: "#565656",
              lineHeight: 1.5,
              position: "relative",
              top: "-70px",
            }}
          >
            by Admina
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card
          style={{
            height: "151px",
            boxShadow: "0px 1px 2px -2px #000",
            borderRadius: "5px",
            background: "#fff",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AccountCircle
              fontSize="large"
              sx={{ color: "#007BFF", width: "40px", height: "40px" }}
            />
            <div>
              <Typography variant="subtitle1" sx={{ color: "#007BFF" }}>
                500
              </Typography>
              <Typography sx={{ color: "#007BFF", fontSize: "12px" }}>
                User
              </Typography>
            </div>
          </CardContent>
          <Typography
            sx={{
              fontSize: "12px",
              px: 2,
              color: "#565656",
              lineHeight: 2,
              mt: 1,
            }}
          >
            Lorem Ipsum is simply dummy texLorem Ipsum is simply
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card
          style={{
            height: "151px",
            boxShadow: "0px 1px 2px -2px #000",
            borderRadius: "5px",
            background: "#fff",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ShippingCartIcon
              fontSize="large"
              sx={{ color: "#007BFF", width: "40px", height: "40px" }}
            />
            <div>
              <Typography variant="subtitle1" sx={{ color: "#007BFF" }}>
                200
              </Typography>
              <Typography sx={{ color: "#007BFF", fontSize: "12px" }}>
                Shopping Cards
              </Typography>
            </div>
          </CardContent>
          <Typography
            sx={{
              fontSize: "12px",
              px: 2,
              color: "#565656",
              lineHeight: 2,
              mt: 1,
            }}
          >
            Lorem Ipsum is simply dummy texLorem Ipsum is simply
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card
          style={{
            height: "151px",
            boxShadow: "0px 1px 2px -2px #000",
            borderRadius: "5px",
            background: "#fff",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <VisitorsIcon
              name="visitors"
              style={{ color: "#007BFF", width: "40px", height: "40px" }}
            />
            <div>
              <Typography variant="subtitle1" sx={{ color: "#007BFF" }}>
                1000
              </Typography>
              <Typography sx={{ color: "#007BFF", fontSize: "12px" }}>
                Visitors
              </Typography>
            </div>
          </CardContent>
          <Typography
            sx={{
              fontSize: "12px",
              px: 2,
              color: "#565656",
              lineHeight: 2,
              mt: 1,
            }}
          >
            Lorem Ipsum is simply dummy texLorem Ipsum is simply
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DataCard;
