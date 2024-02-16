import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Grid,
  CardActions,
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

const SignupForm = () => {
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: ""
  };

  const initialErrors = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: ""
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({ ...initialErrors });
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...initialErrors };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
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

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          title="SIGNUP"
          titleTypographyProps={{ fontSize: "20px", fontWeight: "bold" }}
          sx={{ bgcolor: "#2e7d32", color: "white", textAlign: "center" }}
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
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
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
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              size="small"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              size="small"
              placeholder="Confirm Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </CardContent>

        <CardActions>
          <Grid
            container
            justifyContent="left"
            sx={{ padding: "0 0 16px 10px" }}
          >
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
              size="small"
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={handleCancel}
              sx={{ marginLeft: "10px" }}
            >
              Cancel
            </Button>
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

export default SignupForm;
