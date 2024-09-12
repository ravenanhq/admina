import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../BaseComponent/Button";
import EmailIcon from "../../../Icons/email.svg";
import UserIcon from "../../../Icons/user.svg";
import VisibleIcon from "../../../Icons/password-visible.svg";
import InvisibleIcon from "../../../Icons/password-invisible.svg";

const BasicWithIcon = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    } else {
      newErrors.firstName = "";
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
    <Card variant="outlined" sx={{ borderRadius: "5px", border: "none" }}>
      <CardHeader
        title="Basic With Icon"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
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
            placeholder="Username or Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderCollor: "C0C0C0",
              },
              "& .MuiInputBase-input": {
                fontSize: "12px",
                color: "#565656",
                padding: "9px 14px",
              },
              "& .MuiFormLabel-root": {
                fontSize: "12px",
                color: "#565656",
                letterSpacing: "0.7px",
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
            placeholder="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderCollor: "C0C0C0",
              },
              "& .MuiInputBase-input": {
                fontSize: "12px",
                color: "#565656",
                padding: "9px 14px",
              },
              "& .MuiFormLabel-root": {
                fontSize: "12px",
                color: "#565656",
                letterSpacing: "0.7px",
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
            placeholder="Last Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderCollor: "C0C0C0",
              },
              "& .MuiInputBase-input": {
                fontSize: "12px",
                padding: "9px 14px",
                color: "#565656",
              },
              "& .MuiFormLabel-root": {
                fontSize: "12px",
                color: "#565656",
                letterSpacing: "0.7px",
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
                    <InvisibleIcon
                      onClick={togglePasswordVisibility}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <VisibleIcon
                      onClick={togglePasswordVisibility}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderCollor: "C0C0C0",
              },
              "& .MuiInputBase-input": {
                fontSize: "12px",
                color: "#565656",
                padding: "9px 14px",
              },
              "& .MuiFormLabel-root": {
                fontSize: "12px",
                color: "#565656",
                letterSpacing: "0.7px",
              },
            }}
          />
        </form>
      </CardContent>
      <CardActions
        sx={{ padding: "0 17px 20px 13px", justifyContent: "right" }}
      >
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleSubmit}
          style={{
            textTransform: "capitalize",
            background: "#007BFF",
            padding: "6px 25px 5px",
            margin: "4px 0",
            borderRadius: "0",
          }}
          name="Submit"
        ></ButtonComponent>
      </CardActions>
    </Card>
  );
};
export default BasicWithIcon;
