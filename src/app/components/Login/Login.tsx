"use client";
import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  Box,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signIn } from "next-auth/react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { useRouter } from "next/navigation";
import ButtonComponent from "../BaseComponent/Button";
import Image from "next/image";

const Logo = "/assets/images/logo-admina.png";
const LoginImg = "/assets/images/login-right.png";
const googleIcon = "/assets/images/google.svg";
const facebookIcon = "/assets/images/facebook.svg";
const twitterIcon = "/assets/images/twitter.svg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "demo@gmail.com",
    password: "demo123",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [credentialsErr, setCredentialErr] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const res = await signIn("credentials", {
        username: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (res?.error == null) {
        console.log(res.error);
        window.location.href = "/admin";
      } else {
        setCredentialErr("Invalid email or password");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "#DBECFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box textAlign="center" mb={3}>
          <Image src={Logo} alt="Logo"
            width="130"
            height="26"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "400px" }}
        >
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
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              "& input": {
                fontSize: "15px",
                color: "#808080",
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
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              "& input": {
                fontSize: "15px",
                color: "#808080",
              },
            }}
          />
          {credentialsErr && (
            <p style={{ color: "#d32f2f", fontSize: "14px" }}>
              {credentialsErr}
            </p>
          )}

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            sx={{
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={<Typography variant="body2">Remember me</Typography>}
              labelPlacement="start"
              sx={{
                margin: 0,
                fontSize: "14px",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
              }}
            />
            <Link
              href="/forgot-password/"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                fontWeight: 400,
                fontFamily: theme.typography.fontFamily,
                textAlign: "right",
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            gap={2}
            mt={3}
            sx={{
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={handleSubmit}
              prefix={<LoginIcon />}
              style={{ flex: 1, background: "#007BFF", minWidth: isMobile ? "100%" : "auto" }}
              name="Login"
            ></ButtonComponent>
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={handleSignUpClick}
              prefix={<PersonAddAlt1OutlinedIcon />}
              style={{ flex: 1, background: "#AFD7FF", color: "#007BFF", minWidth: isMobile ? "100%" : "auto" }}
              name="Signup"
            ></ButtonComponent>
          </Box>

          <Typography
            variant="body2"
            color="grey"
            textAlign="center"
            sx={{ my: 4 }}
          >
            Or Sign in with
          </Typography>

          <Box display="flex" justifyContent="center" gap={2}>
          <Image src={googleIcon} alt="Logo"
            width="23"
            height="23"
            style={{ cursor: "pointer" }}
            />
            <Image src={facebookIcon} alt="Logo"
            width="23"
            height="23"
            style={{ cursor: "pointer" }}
            />
            <Image src={twitterIcon} alt="Logo"
            width="23"
            height="23"
            style={{ cursor: "pointer" }}
          />
          </Box>
        </form>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: isDesktop ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          component="img"
          src={LoginImg}
          alt="Login image"
          style={{ width: "80%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default LoginForm;
