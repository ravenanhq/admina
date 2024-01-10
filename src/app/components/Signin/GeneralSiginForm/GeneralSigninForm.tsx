import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, TextField, Button, InputAdornment, FormControlLabel, Checkbox, Grid, Link, Typography } from '@mui/material';

const GeneralSigninForm = () => {
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
      <CardHeader title="General Signin Form With Validation"  titleTypographyProps={{ fontSize: '16px'}} sx={{ bgcolor: '#1d8683', color: 'white' }}/>
      <CardHeader title="Login"  titleTypographyProps={{ fontSize: '16px' , textAlign:"center" }}/>
      <CardContent style={{ textAlign: 'center' }}>
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
            placeholder="Username or Email"
            label="Username or Email"
            style={{ maxWidth: '52%', margin: '0 auto', marginTop:"15px" }}
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
            label="password"
            style={{ maxWidth: '52%', margin: '0 auto',marginTop:"15px" }}
          />
   
        </form>
      </CardContent>
      <Grid container justifyContent="center">
          <Button variant="contained"  type="submit" onClick={handleSubmit} size="small" sx={{ width: '50%',padding:"7px 0",background:"#1d8683"}}>
            Log In
          </Button>
        </Grid>

      <CardActions sx={{justifyContent:"center"}}>
      <Typography  sx={{fontSize:"14px"}}>
          Not Registered?
          <Link href="#" color="inherit" style={{color:"#1d8683"}}>
            Create an account
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default GeneralSigninForm;
