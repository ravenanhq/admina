import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const HorizontalForm = () => {
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

  return (
    <Card variant="outlined" style={{ borderRadius: "5px", border: "none" }}>
      <CardHeader
        title="Basic Layout"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
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
            <label
              htmlFor="name"
              style={{ marginTop: "5px", fontSize: "12px", color: "#565656" }}
            >
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
              sx={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
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
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="email"
              style={{ marginTop: "5px", fontSize: "12px", color: "#565656" }}
            >
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
              sx={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
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
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="password"
              style={{ marginTop: "5px", fontSize: "12px", color: "#565656" }}
            >
              Password <span style={{ color: "#d32f2f" }}>*</span>
            </label>
            <TextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              size="small"
              placeholder="Password"
              sx={{
                marginTop: isMobile ? "5px" : "0",
                width: isMobile ? "100%" : "80%",
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
            background: "#007BFF",
            padding: "6px 25px 5px",
            borderRadius: "0",
          }}
          name="Submit"
        ></ButtonComponent>
      </CardActions>
    </Card>
  );
};

export default HorizontalForm;
