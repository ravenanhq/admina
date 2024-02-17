import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Grid,
  Typography,
  CardActions,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signIn } from "next-auth/react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useRouter } from "next/navigation";

const LoginForm = () => {
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
        setErrors({ email: res.error, password: res.error });
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
    <>
      <Card variant="outlined" sx={{paddingBottom:"10px"}}>
        <CardHeader
          title="LOGIN"
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
        <CardContent sx={{paddingBottom:"0"}}>
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
            />
          </form>
        </CardContent>
        <CardActions sx={{ display: 'flex', padding: 0 }}>
      <Grid container alignItems="center" justifyContent="space-between" className="loginPage">
        <Grid item className="rememberMe">
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={<Typography variant="body2">Remember me</Typography>}
            labelPlacement="start"
            sx={{
              fontSize: "14px",
              whiteSpace: isMobile ? "nowrap" : "normal",
            }}
          />
        </Grid>
        <Grid item className="forgotPassword">
          <Typography sx={{ fontSize: "14px" }}>
            <Link
              href="/forgot-password/"
              color="inherit"
              underline="hover"
              style={{ color: "#000" ,marginRight:"16px"}}
            >
              Forgot password?
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </CardActions>
        

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            size="small"
            startIcon={<LoginIcon />}
            sx={{ width: "50%", padding: "7px 0", background: "#e44d26" }}
          >
            Log In
          </Button>
        </Grid>
        <Divider sx={{ margin: "0 auto", marginY: 2, width: "50%",padding:"0 10px" }} />

        <Grid container justifyContent="center">
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSignUpClick}
              size="small"
              startIcon={<PersonAddAltIcon />}
              sx={{ width: "50%", padding: "7px 0", marginBottom: "10px" }}
            >
              Sign Up
            </Button>
        </Grid>
      </Card>
      <Typography sx={{ fontSize: "12px", marginTop: "10px" }} component="div">
        <div>Here are the Demo Credentials:</div>
        <div>Username: demo@gmail.com</div>
        <div>Password: demo123</div>
      </Typography>
    </>
  );
};

export default LoginForm;
