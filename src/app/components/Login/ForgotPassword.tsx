import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Typography,
  CardActions,
  InputAdornment,
  Link,
  Snackbar,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonComponent from "../BaseComponent/Button";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Email is not valid";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(
        "Reset link has been sent to your email. Please check your inbox."
      );
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Card
        variant="outlined"
        style={{ borderRadius: "10px", boxShadow: "0 4px 8px 0 #ccc" }}
      >
        <CardHeader
          title="Forgot Password"
          titleTypographyProps={{ fontSize: "20px", fontWeight: "bold" }}
          sx={{ bgcolor: "#2b9b8e", color: "white", textAlign: "center" }}
        />
        <CardHeader
          title="Logo"
          titleTypographyProps={{
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              size="small"
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </CardContent>

        <CardActions>
          <Grid
            container
            justifyContent="right"
            sx={{ padding: "0 0 16px 16px" }}
          >
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={handleSubmit}
              style={{
                padding: "5px 10px",
                background: "#fc9f66",
              }}
              name="Send"
            ></ButtonComponent>
          </Grid>
        </CardActions>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Link href="/login/" sx={{ color: "#615E5E", textDecoration: "none" }}>
        <Typography
          sx={{
            fontSize: "12px",
            marginTop: "10px",
            justifyContent: "end",
            display: "flex",
          }}
          component="div"
        >
          <ArrowBackIcon sx={{ width: "17px" }} />{" "}
          <div style={{ lineHeight: "25px" }}>Back to login</div>
        </Typography>
      </Link>
    </>
  );
};

export default ForgotPasswordForm;
