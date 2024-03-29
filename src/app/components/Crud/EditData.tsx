"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  InputLabel,
  Snackbar,
  Breadcrumbs,
  Link,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { AddLocation } from "@mui/icons-material";

interface RowData {
  name?: string;
}

const EditData = ({ page }: { page: RowData }) => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFieldEnabled, setPasswordFieldEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const initialFormData = {
    id: "",
    name: "",
    streetAddress: "",
    password: "",
    confirmPassword: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (page) {
      setFormData({
        ...initialFormData,
        ...page,
      });
    }
  }, [page]);

  const [errors, setErrors] = useState({
    name: "",
    streetAddress: "",
    password: "",
    confirmPassword: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "user Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain only numbers";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (
      !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain at least 8 characters, including at least 1 uppercase letter, 1 number, and 1 special character.";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setMessage("Updated successfully");
      setSuccessMessageOpen(true);
      router.push("/crud/list", { scroll: false });
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    router.push("/crud/list", { scroll: false });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePasswordField = () => {
    setPasswordFieldEnabled(!isPasswordFieldEnabled);
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "15px" }}>
        <Link color="inherit" href={"/crud/list"}>
          List
        </Link>
        <Typography color="textPrimary">Edit</Typography>
      </Breadcrumbs>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        <Grid item xs={9} sm={6} style={{ textAlign: "left" }}>
          <h2>Edit</h2>
        </Grid>
        <Grid
          item
          xs={2}
          sm={6}
          style={{ textAlign: isMobile ? "start" : "right" }}
        ></Grid>
      </Grid>
      <Card variant="outlined">
        <Snackbar
          open={successMessageOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={message}
        />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Typography
                  style={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  1.Account Details
                </Typography>
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Name<span style={{marginLeft:"5px", color: "red" }}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  size="small"
                  placeholder="User Name"
                  style={{
                    margin: "7px 0 20px 0",
                    width: "100%",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <PersonIcon
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputLabel
                    htmlFor="user-name"
                    style={{
                      fontWeight: "bold",
                      color: "#5d596c",
                      fontSize: "15px",
                      flex: "1", 
                    }}
                  >
                    Password<span style={{marginLeft:"5px",  color:  isPasswordFieldEnabled ? "red" : "#fff", }}>*</span>
                  </InputLabel>
                  <ButtonComponent
                    variant="contained"
                    onClick={togglePasswordField}
                    style={{
                      textTransform: "capitalize",
                      padding:"0px",
                      boxShadow: "none",
                      background: "none",
                      color: isPasswordFieldEnabled ? "#58544D" : "#1d8683",
                    }}
                    name={
                      isPasswordFieldEnabled
                        ? "cancel"
                        : "New Password"
                    }
                  ></ButtonComponent>
                </div>

                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%",backgroundColor: isPasswordFieldEnabled ? "#fff" : "#f2f2f2", }}
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
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                  disabled={!isPasswordFieldEnabled}
                />
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Confirm Password<span style={{marginLeft:"5px", color:  isPasswordFieldEnabled ? "red" : "#fff",}}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%", backgroundColor: isPasswordFieldEnabled ? "#fff" : "#f2f2f2",}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {showConfirmPassword ? (
                          <VisibilityOffIcon
                            onClick={toggleConfirmPasswordVisibility}
                            sx={{ cursor: "pointer" }}
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={toggleConfirmPasswordVisibility}
                            sx={{ cursor: "pointer" }}
                          />
                        )}
                      </InputAdornment>
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                  disabled={!isPasswordFieldEnabled}
                />

                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Email<span style={{marginLeft:"5px", color: "red" }}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <EmailIcon
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />
              </form>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              style={{ paddingTop: isMobile ? "0" : "" }}
            >
              <form onSubmit={handleSubmit}>
                <Typography
                  style={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  2.Personal Information
                </Typography>
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Street Address
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <AddLocation
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  City
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <AddLocation
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Pin Code
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Pin Code"
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  error={!!errors.pinCode}
                  helperText={errors.pinCode}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <PersonPinCircleIcon
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />

                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Phone<span style={{marginLeft:"5px", color: "red" }}>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  size="small"
                  style={{ margin: "7px 0 20px 0", width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <PhoneIcon
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
                    sx: { color: "#5d596c", fontSize: "15px" },
                  }}
                />
              </form>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          style={{ margin: "0px 14px 14px 14px", justifyContent: "right" }}
        >
          <ButtonComponent
            variant="contained"
            onClick={handleSubmit}
            style={{
              textTransform: "capitalize",
              padding: "6px 15px",
              boxShadow: "none",
              background: "#1d8683",
            }}
            name="Update"
          ></ButtonComponent>
          <ButtonComponent
            variant="contained"
            onClick={handleCancel}
            style={{
              textTransform: "capitalize",
              padding: "6px 15px",
              boxShadow: "none",
              background: "#58544D",
            }}
            name="Cancel"
          ></ButtonComponent>
        </CardActions>
      </Card>
    </>
  );
};

export default EditData;
