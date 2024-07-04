import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  FormControl,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonComponent from "../BaseComponent/Button";

const HorizontalFormWithIcon = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else {
      newErrors.password = "";
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
      console.log(formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card variant="outlined" style={{ borderRadius: "10px" }}>
      <CardHeader
        title="Basic Layout with Icon"
        sx={{ bgcolor: "#e44d26", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FormControl
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: "0",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="name" style={{ marginTop: "5px" }}>
              Name <span style={{ color: "#d32f2f" }}>*</span>
            </label>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              size="small"
              placeholder="Name"
              style={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="email" style={{ marginTop: "5px" }}>
              Email <span style={{ color: "#d32f2f" }}>*</span>
            </label>
            <TextField
              fullWidth
              margin="normal"
              id="email"
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
              style={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
              }}
            />
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="password" style={{ marginTop: "5px" }}>
              Password <span style={{ color: "#d32f2f" }}>*</span>
            </label>
            <TextField
              fullWidth
              margin="normal"
              id="password"
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
              style={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
              }}
            />
          </FormControl>
        </form>
      </CardContent>
      <CardActions
        sx={{ padding: "0 17px 17px 13px", justifyContent: "right" }}
      >
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleSubmit}
          style={{
            textTransform: "capitalize",
            background: "#e44d26",
            padding: "5px 15px",
          }}
          name="Submit"
        ></ButtonComponent>
      </CardActions>
    </Card>
  );
};

export default HorizontalFormWithIcon;
