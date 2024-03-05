import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../../BasicUIElements/ButtonComponent";

const OutlinedSigningForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Outlined Signin Form With Validation"
        titleTypographyProps={{ fontSize: "16px" }}
        sx={{ bgcolor: "#008744", color: "white" }}
      />
      <CardHeader
        title="Login"
        titleTypographyProps={{ fontSize: "16px", textAlign: "center" }}
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
            placeholder="Username or Email"
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
        </form>
      </CardContent>

      <CardActions>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              style={{ padding: isMobile ? "4px" : "" }}
            />
          }
          label={<Typography variant="body2">Remember me</Typography>}
          labelPlacement="start"
          sx={{
            fontSize: "14px",
            width: isMobile ? "auto" : "183px",
            whiteSpace: isMobile ? "nowrap" : "normal",
          }}
        />
        <Grid container justifyContent="flex-end">
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            onClick={handleSubmit}
            style={{
              width: "100px",
              borderRadius: "10px",
              background: "#2e7d32",
              padding: "5px 0",
            }}
            name="Log In"
          ></ButtonComponent>
        </Grid>
      </CardActions>

      <CardActions sx={{ marginLeft: "16px" }}>
        <Typography sx={{ fontSize: "14px", width: "60%" }}>
          Forgot your password?
          <Link href="#" color="inherit" style={{ color: "#311ccf" }}>
            Click here
          </Link>
        </Typography>
        <Grid container justifyContent="flex-end">
          <ButtonComponent
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            size="small"
            style={{
              width: "100px",
              borderRadius: "10px",
              background: "#ed6c02",
              padding: "5px 0",
            }}
            name="Sign Up"
          ></ButtonComponent>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default OutlinedSigningForm;
