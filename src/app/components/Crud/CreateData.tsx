import React, { useState } from "react";
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

const CreateNewData = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const initialFormData = {
    id: "",
    name: "",
    streetAddress: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    name: "",
    streetAddress: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "User Name is required";
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

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "15px" }}>
        <Link color="inherit" href={"/crud/list"}>
          List
        </Link>
        <Typography color="textPrimary">Create</Typography>
      </Breadcrumbs>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        <Grid item xs={9} sm={6} style={{ textAlign: "left" }}>
          <h2>Add New</h2>
        </Grid>
      </Grid>
      <Card
        variant="outlined"
        style={{ boxShadow: "0 0.25rem 1.125rem rgba(75,70,92,.1)" }}
      >
        <Snackbar
          open={successMessageOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Added Successfully"
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
                  User Name
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
                    width: "94%",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <PersonIcon
                        style={{ marginRight: "8px", color: "#5d596c" }}
                      />
                    ),
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
                  Password
                </InputLabel>
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                />
                <InputLabel
                  htmlFor="user-name"
                  style={{
                    fontWeight: "bold",
                    color: "#5d596c",
                    fontSize: "15px",
                  }}
                >
                  Confirm Password
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                  Email
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
                  Phone
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
                  style={{ margin: "7px 0 20px 0", width: "94%" }}
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
          style={{ justifyContent: "flex-end", margin: "0px 14px 14px 14px" }}
        >
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            onClick={handleSubmit}
            style={{
              textTransform: "capitalize",
              padding: "6px 20px",
              boxShadow: "none",
              background: "#1d8683",
              fontSize: "15px",
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
              padding: "6px 20px",
              boxShadow: "none",
              fontSize: "15px",
              background: "#58544D",
            }}
            name="Cancel"
          ></ButtonComponent>
        </CardActions>
      </Card>
    </>
  );
};

export default CreateNewData;
