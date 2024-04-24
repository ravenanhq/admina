import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
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
import { useRouter } from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ButtonComponent from "../BaseComponent/Button";

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
    <>
      <Grid container rowSpacing={1} style={{ padding: "0 20px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            background: "#2b9b8e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "15px",
            borderTopLeftRadius: isMobile ? "0" : "10px",
            borderBottomLeftRadius: isMobile ? "0" : "10px",
            boxShadow: "0 4px 8px 0 #ccc",
          }}
        >
          <CardHeader
            title="ADMINA"
            titleTypographyProps={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
            style={{ padding: "7px" }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              textAlign: "center",
              padding: "0 20px",
              color: "#fff",
            }}
            component="div"
          >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </div>
          </Typography>
          <Link
            href="/signup/"
            color="inherit"
            underline="hover"
            style={{ color: "#fff" }}
          >
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              prefix={<LoginIcon />}
              style={{
                padding: "0 13px",
                marginTop: "10px",
                background: "#fc9f66",
              }}
              name="Signup"
            ></ButtonComponent>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            paddingTop: "0",
            background: "#fff",
            borderTopRightRadius: isMobile ? "0" : "10px",
            borderBottomRightRadius: isMobile ? "0" : "10px",
            boxShadow: "0 4px 8px 0 #ccc",
          }}
        >
          <Card
            variant="outlined"
            sx={{ paddingBottom: "10px", border: "none" }}
          >
            <CardContent sx={{ paddingBottom: "0", marginTop: "10px" }}>
              <CardHeader
                title="Login your account"
                titleTypographyProps={{
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              />
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
                  sx={{
                    "& input": {
                      fontSize: "15px",
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
                />
                {credentialsErr && (
                  <p style={{ color: "#d32f2f", fontSize: "14px" }}>
                    {credentialsErr}
                  </p>
                )}
              </form>
            </CardContent>

            <CardActions
              sx={{ display: isMobile ? "block" : "flex", padding: 0 }}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className="loginPage"
                style={{
                  marginBottom: "10px",
                  display: isMobile ? "block" : "flex",
                }}
              >
                <Grid
                  item
                  className="rememberMe"
                  style={{ textAlign: "center" }}
                >
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

                <Grid
                  item
                  className="forgotPassword"
                  style={{ textAlign: "center" }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    <Link
                      href="/forgot-password/"
                      color="inherit"
                      underline="hover"
                      style={{ color: "#000", marginRight: "16px" }}
                    >
                      Forgot password?
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>

            <Grid container justifyContent="center">
            <ButtonComponent
              variant="contained"
              type="submit"
              size="small"
              onClick={handleSubmit}
              prefix={<LoginIcon />}
              style={{
                width: "94%",
                  padding: "0",
                  background: "#fc9f66",
              }}
              name="Login"
            ></ButtonComponent>
              
            </Grid>

            <Divider
              sx={{
                margin: "0 auto",
                marginY: 3,
                width: "98%",
                padding: "0 10px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  padding: "0 10px",
                }}
              >
                or sign in with
              </div>
            </Divider>

            <Grid
              container
              spacing={{ xs: 2 }}
              sx={{
                padding: "0 14px 5px 14px",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <GoogleIcon
                  style={{ fontSize: 25, color: "#e46a76", cursor: "pointer" }}
                />
              </Grid>
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <FacebookIcon
                  style={{ fontSize: 25, color: "#0866ff", cursor: "pointer" }}
                />
              </Grid>
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <TwitterIcon
                  style={{ fontSize: 25, color: "#03c9d7", cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
