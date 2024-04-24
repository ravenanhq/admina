import { Box, Card, CardContent, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const BillingCard = ({ cardDetails }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: { sm: "2rem" },
            }}
          >
            <img
              src={"/assets/images/visa.png"}
              alt="Master Card"
              width={60}
              style={{ marginBottom: "1rem" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginRight: "0.5rem",
                  marginBottom: { xs: "0.5rem", sm: "0" },
                }}
              >
                {cardDetails.cardHolder}
              </Typography>
            </Box>
            <Typography variant="body2">{cardDetails.cardNumber}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", justifyContent: "space-between" },
              textAlign: { xs: "center", sm: "end" },
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <CreditCardIcon />
              <Typography
                variant="body2"
                sx={{ alignSelf: "flex-end", fontSize: "16px" }}
              >
                {cardDetails.cvv}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
              Card expires at {cardDetails.expiryDate}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BillingCard;
