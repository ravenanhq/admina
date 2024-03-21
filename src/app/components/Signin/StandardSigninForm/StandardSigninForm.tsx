import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";
import ButtonComponent from "../../BaseComponent/Button";

const StandardSigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
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
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Standard Form With Validation"
        titleTypographyProps={{ fontSize: "16px" }}
        sx={{ bgcolor: "#e44d26", color: "white" }}
      />
      <CardHeader
        title="Login"
        titleTypographyProps={{ fontSize: "16px", textAlign: "center" }}
      />
      <CardContent style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            size="small"
            placeholder="Username or Email"
            InputLabelProps={{
              shrink: true,
              sx: {
                fontSize: 18,
                fontWeight: "bold",
              },
            }}
            style={{
              maxWidth: isMobile ? "100%" : "52%",
              margin: "0 auto",
              marginTop: isMobile ? "10px" : "15px",
            }}
          ></TextField>
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            size="small"
            placeholder="Password"
            style={{
              maxWidth: isMobile ? "100%" : "52%",
              margin: "0 auto",
              marginTop: isMobile ? "10px" : "15px",
            }}
          />
        </form>
      </CardContent>
      <Grid container justifyContent="center">
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleSubmit}
          prefix={<LoginIcon />}
          style={{
            width: "50%",
            background: "#e44d26",
            padding: "0",
          }}
          name="Log In"
        ></ButtonComponent>
      </Grid>
      <Divider sx={{ margin: "0 auto", marginY: 2, width: "50%" }} />

      <Grid container justifyContent="center">
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleSubmit}
          prefix={<PersonAddAltIcon />}
          style={{
            width: "50%",
            padding: "0",
            background: "#2e7d32",
            marginBottom: "10px",
          }}
          name="Sign Up"
        ></ButtonComponent>
      </Grid>
    </Card>
  );
};

export default StandardSigninForm;
