import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, TextField, Button } from '@mui/material';

const VerticalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    } else {
      newErrors.message = '';
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
    <Card variant="outlined" sx={{borderRadius:"10px"}}>
      <CardHeader title="Basic layout" sx={{ bgcolor: '#008744', color: 'white'}}  titleTypographyProps={{ fontSize: '16px' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            size='small'
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            size='small'
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            size='small'
          />
        </form>
      </CardContent>
      <CardActions sx={{padding:"0 17px 17px 13px"}}>
        <Button variant="contained" color="success" type="submit" onClick={handleSubmit} size="small" style={{borderRadius:"15px"}}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default VerticalForm;
