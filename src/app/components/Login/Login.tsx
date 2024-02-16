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
} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signIn } from "next-auth/react";

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

    return (
        <>
            <Card variant="outlined">
                <CardHeader title="LOGIN" titleTypographyProps={{ fontSize: '20px', fontWeight: "bold" }} sx={{ bgcolor: '#2e7d32', color: 'white', textAlign: "center" }} />
                <CardHeader title="Logo" titleTypographyProps={{ fontSize: '20px', textAlign: "center", fontWeight: "bold" }} />
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
                            size='small'
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
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            size='small'
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

                <CardActions sx={{display:isMobile ? "block" :"flex"}}>
                    <FormControlLabel
                        control={<Checkbox color="primary" style={{ padding: isMobile ? "4px" : "" }} />}
                        label={
                            <Typography variant="body2">
                                Remember me
                            </Typography>
                        }
                        labelPlacement="start"
                        sx={{
                            fontSize: "14px",
                            width: isMobile ? 'auto' : '190px',
                            whiteSpace: isMobile ? 'nowrap' : 'normal',
                            marginLeft:isMobile ? "10px" : "16px"
                        }}
                    />
                    <Grid container justifyContent={isMobile ? "flex-start" : "flex-end"}>
                        <Button variant="contained" color="success" type="submit" onClick={handleSubmit} size="small" sx={{ width: '100px' }}>
                            Log In
                        </Button>
                    </Grid>
                </CardActions>

                <CardActions sx={{ marginLeft:isMobile ? "10px" : "16px", display:isMobile ? "block" :"flex"}}>
                    <Typography sx={{ fontSize: "14px", width:isMobile ? "100%" : "70%"}}>
                        Forgot your password?
                        <Link href="/forgot-password/" color="inherit" style={{ color: "#311ccf" }}>
                            Click here
                        </Link>
                    </Typography>
                    <Grid container justifyContent={isMobile ? "flex-start" : "flex-end"} style={{margin:isMobile ? "8px 0 0 -1px" : ""}}>
                    <Link href="/signup/" ><Button variant="contained" color="warning" type="submit" size="small" sx={{ width: '100px' }} >
                            Sign Up
                        </Button></Link>
                    </Grid>
                </CardActions>
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
