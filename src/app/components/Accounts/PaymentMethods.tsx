import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ButtonComponent from "../BaseComponent/Button";
import BillingCard from "./BillingCard";

const PaymentMethods = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);

  const [cardDetailsArray, setCardDetailsArray] = useState([]);

  const initialFormData = {
    id: 1,
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.cardHolder.trim() === "") {
      newErrors.cardHolder = "Holder name is required";
      isValid = false;
    } else {
      newErrors.cardHolder = "";
    }

    if (formData.cardNumber.trim() === "") {
      newErrors.cardNumber = "Card Number is required";
      isValid = false;
    } else {
      newErrors.cardNumber = "";
    }
    if (formData.expiryDate.trim() === "") {
      newErrors.expiryDate = "Expiry date is required";
      isValid = false;
    } else {
      newErrors.expiryDate = "";
    }
    if (formData.cvv.trim() === "") {
      newErrors.cvv = "CVV Number is required";
      isValid = false;
    } else {
      newErrors.cvv = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === "cardNumber") {
      updatedValue = value.replace(/\D/g, "").substring(0, 16);
      updatedValue = updatedValue.replace(/(.{4})/g, "$1 ").trim();
    }

    if (name === "expiryDate") {
      updatedValue = value.replace(/\D/g, "").substring(0, 4);
      let month = updatedValue.slice(0, 2);
      month = Math.min(parseInt(month), 12);
      if (updatedValue.length > 2) {
        updatedValue = `${month
          .toString()
          .padStart(2, "0")}/${updatedValue.slice(2)}`;
      }
    }

    if (name === "cvv") {
      updatedValue = value.replace(/\D/g, "").substring(0, 3);
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (cardDetailsArray.length < 3) {
        setCardDetailsArray((prevState) => [
          ...prevState,
          { ...formData, id: prevState.length + 1 },
        ]);
        setFormData({
          id: formData.id + 1,
          cardNumber: "",
          cardHolder: "",
          expiryDate: "",
          cvv: "",
        });
        setSuccessMessageOpen(true);
      } else {
        alert("You can only add a maximum of 3 card details.");
      }
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };
  return (
    <Card
      variant="outlined"
      style={{ borderRadius: "12px", marginTop: "20px" }}
    >
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Added Successfully"
      />
      <CardHeader
        style={{ paddingLeft: "16px", paddingTop: "16px", paddingBottom: 0 }}
        title="Payment Methods"
        titleTypographyProps={{ fontSize: "20px" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <span>Card Number<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                       </span>}
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      <span>Card Holder<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                       </span>}
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.cardHolder}
                    helperText={errors.cardHolder}
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label={
                      <span>Expiry Date (MM/YY)<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                       </span>}
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.expiryDate}
                    helperText={
                      errors.expiryDate ? errors.expiryDate : "Format: MM/YY"
                    }
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label={
                      <span>CVV<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                       </span>}
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    variant="outlined"
                    error={!!errors.cvv}
                    helperText={errors.cvv}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sx={{}}>
                  <Box
                    style={{
                      display: "flex",
                      gap: 8,
                      justifyContent: "flex-end",
                      margin: "0px 14px 14px 14px",
                    }}
                  >
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      onClick={handleSubmit}
                      style={{
                        textTransform: "capitalize",
                        background: "#1d8683",
                        padding: "5px 15px",
                      }}
                      name="Submit"
                    ></ButtonComponent>
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      onClick={handleCancel}
                      style={{
                        textTransform: "capitalize",
                        background: "#58544D",
                        padding: "5px 15px",
                      }}
                      name="Cancel"
                    ></ButtonComponent>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            {cardDetailsArray.length > 0 && (
              <Typography variant="body2" sx={{ px: 1, pb: 2 }}>
                My Cards
              </Typography>
            )}
            {cardDetailsArray.map((card, index) => (
              <BillingCard key={index} cardDetails={card} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
