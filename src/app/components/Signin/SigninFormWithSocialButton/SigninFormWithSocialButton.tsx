import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, TextField, Button, InputAdornment, FormControlLabel, Checkbox, Grid, Link, Typography, InputLabel } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const SigninFormWithSocialButton = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      newErrors.password = '';
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
      <CardHeader title="Signin Form with Social Button"  titleTypographyProps={{ fontSize: '16px'}} sx={{ bgcolor: '#0057e7', color: 'white'}}   />
      <CardHeader title="Login"  titleTypographyProps={{ fontSize: '16px' , textAlign:"center"}}    />
      <CardContent>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ fontSize: 18, color: 'gray' }}>
                  <MailOutlineIcon sx={{ width: "15px"}}/>
                </InputAdornment>
              ),
              sx: { fontSize: 12,paddingTop: 1}, 
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                fontSize: 18,
                fontWeight: 'bold', 
              },
            }}
            label = "Email"
          >
         
          </TextField>
      
          <TextField
           variant="standard"
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
                <InputAdornment position="start" sx={{ fontSize: 18, color: 'gray' }}>
                  <VisibilityIcon sx={{ width: "15px"}}/>
                </InputAdornment>
              ),
              sx: { fontSize: 12,paddingTop: 1},
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                fontSize: 18, 
                fontWeight: 'bold', 
              },
            }}
            label = "Password"
          />
   
        </form>
      </CardContent>
    
    
          <Typography sx={{ fontSize: '14px',mr:2, textAlign:"right"}}>
            <Link href="#" color="inherit" style={{textDecoration:"none" }}>
              Forgot your password?
            </Link>
          </Typography>
      
      <CardActions> 
        <Grid container justifyContent="center">
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} size="small" sx={{ width: '35%' ,borderRadius:"20px"}}>
            Log In
          </Button>
        </Grid>
      </CardActions>


      <Typography sx={{ fontSize: '14px',mt:1,textAlign:"center"}}>
              or Sign up using
          </Typography>

      <CardActions sx={{mt:1}}>
        <Grid container justifyContent="center" >
        <Link href="#" color="inherit" style={{textDecoration:"none" }}>
           <FacebookIcon style={{ color: '#1877f2',marginRight:"3px" }}/></Link>
           <Link href="#" color="inherit" style={{textDecoration:"none" }}>
             <TwitterIcon style={{ color: '#1da1f2',marginRight:"3px" }}/></Link>
             <Link href="#" color="inherit" style={{textDecoration:"none" }}> 
              <GoogleIcon style={{ color: '#ea4335' }} /></Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default SigninFormWithSocialButton;
