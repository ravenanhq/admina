import React, { useState } from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

const ReviewCommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
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
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Leave a Comment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="message"
            label="Your Comment"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonComponent
            variant="contained"
            type="button"
            size="small"
            onClick={handleSubmit}
            style={{
              borderRadius: "10px",
              padding: "8px 10px",
              background: "#1976d2",
            }}
            name="Post Comment"
          ></ButtonComponent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewCommentForm;
