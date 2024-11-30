"use client";
import React, { useState } from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  Link,
  Typography,
  Snackbar,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonComponent from "../BaseComponent/Button";

const SignupForm = () => {
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  const initialErrors = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...initialErrors };

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

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
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
      setFormData({ ...initialFormData });
      setSuccessMessage("Successfully Registered");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
    setErrors({ ...initialErrors });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#DBECFF",
            height: {
              xs: "100vh",
              sm: "auto",
              md: "100vh",
            },
            "@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait)": {
              height: "100vh",
            },
            "@media (device-width: 320px) and (device-height: 568px) and (orientation: portrait)": {
              height: "auto",
            },
            "@media (max-width: 568px) and (max-height: 320px) and (orientation: landscape)": {
              height: "auto",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/images/signup-logo.png"
            alt="Signup Illustration"
            style={{ height: "120px", marginBottom: "20px" }}
          />
          <form
            onSubmit={handleSubmit}
            style={{ width: "80%", maxWidth: "400px" }}
          >
            <TextField
              fullWidth
              margin="normal"
              name="email"
              type="email"
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "white", // Sets background color to white
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Optional: change placeholder text color if needed
                  opacity: 1, // Ensures placeholder is fully opaque
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              size="small"
              placeholder="Firstname"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "white", // Sets background color to white
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Optional: change placeholder text color if needed
                  opacity: 1, // Ensures placeholder is fully opaque
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              size="small"
              placeholder="Lastname"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "white", // Sets background color to white
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Optional: change placeholder text color if needed
                  opacity: 1, // Ensures placeholder is fully opaque
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              size="small"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {showPassword ? (
                      <VisibilityOffIcon
                        onClick={togglePasswordVisibility}
                        sx={{ cursor: "pointer" }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={togglePasswordVisibility}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "white", // Sets background color to white
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Optional: change placeholder text color if needed
                  opacity: 1, // Ensures placeholder is fully opaque
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              size="small"
              placeholder="Confirm Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {showPassword ? (
                      <VisibilityOffIcon
                        onClick={togglePasswordVisibility}
                        sx={{ cursor: "pointer" }}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={togglePasswordVisibility}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "white", // Sets background color to white
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Optional: change placeholder text color if needed
                  opacity: 1, // Ensures placeholder is fully opaque
                },
              }}
            />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <ButtonComponent
                  variant="contained"
                  type="submit"
                  size="large"
                  onClick={handleSubmit}
                  color="primary"
                  style={{
                    padding: "5px 10px",
                    width: "100%",
                    borderRadius: 0, // Removes border radius
                    marginTop: "15px",
                  }}
                  name="Submit"
                ></ButtonComponent>
              </Grid>
              <Grid item xs={12} md={6}>
                <ButtonComponent
                  variant="contained"
                  type="button"
                  size="large"
                  onClick={handleCancel}
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    background: "#AFD7FF",
                    borderRadius: 0, // Removes border radius
                    marginTop: "15px",
                    color: "#0000FF",
                  }}
                  name="Cancel"
                ></ButtonComponent>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message={successMessage}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
          <Link
            href="/login/"
            sx={{ color: "#0000FF", textDecoration: "none", marginTop: "10px" }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                justifyContent: "flex-end", // Aligns to the right
                display: "flex",
                alignItems: "center", // Centers vertically for better alignment
              }}
              component="div"
            >
              <ArrowBackIcon sx={{ width: "17px", marginRight: "5px" }} />
              <div style={{ lineHeight: "25px" }}>Back to login</div>
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/images/signup-right-side.svg"
            alt="Signup Illustration"
            style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SignupForm;
