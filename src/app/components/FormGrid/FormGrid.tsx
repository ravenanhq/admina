import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const FormGrid = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const initialFormData = {
    id: "",
    name: "",
    streetAddress: "",
    city: "",
    email: "",
    role: "",
    pinCode: "",
    phone: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    name: "",
    streetAddress: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
    gender: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "User Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain only numbers";
      isValid = false;
    } else {
      newErrors.phone = "";
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
      setSuccessMessageOpen(true);
      router.push("/crud/list", { scroll: false });
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "10px" }}
      >
        <Grid item xs={9} sm={6} style={{ textAlign: "left" }}>
          <h2 style={{ fontSize: "20px" }}>Form Grid</h2>
        </Grid>
      </Grid>
      <Card variant="outlined" style={{ borderRadius: "12px" }}>
        <Snackbar
          open={successMessageOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Added Successfully"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label={
                    <span>
                      User Name
                      <span style={{ color: "#d32f2f", marginLeft: "3px" }}>
                        *
                      </span>
                    </span>
                  }
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  size="small"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label={
                    <span>
                      Email{" "}
                      <span style={{ color: "#d32f2f", marginLeft: "3px" }}>
                        *
                      </span>
                    </span>
                  }
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  size="small"
                />

                <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                  <InputLabel id="demo-simple-select-error-label">
                    Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={formData.role}
                    label="Role"
                    name="role"
                    onChange={handleChange}
                    renderValue={(value) => `${value}`}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                    <MenuItem value="Moderate">Moderate</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  margin="normal"
                  label={
                    <span>
                      Phone{" "}
                      <span style={{ color: "#d32f2f", marginLeft: "3px" }}>
                        *
                      </span>
                    </span>
                  }
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  size="small"
                />
              </form>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              style={{ paddingTop: isMobile ? "0" : "" }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress}
                  size="small"
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="City"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  size="small"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Pin Code"
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  error={!!errors.pinCode}
                  helperText={errors.pinCode}
                  size="small"
                />
              </form>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              style={{ paddingTop: isMobile ? "0" : "" }}
            >
              <form onSubmit={handleSubmit}>
                <FormControl
                  style={{ margin: isMobile ? "10px 0 0 4px" : "0 0 0 4px" }}
                >
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{ flexDirection: "row" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          style={{ justifyContent: "flex-end", margin: "0px 14px 14px 14px" }}
        >
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            onClick={handleSubmit}
            style={{
              textTransform: "capitalize",
              background: "#1d8683",
              padding: "5px 15px",
            }}
            name="Submit"
          ></ButtonComponent>
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            onClick={handleCancel}
            style={{
              textTransform: "capitalize",
              background: "#58544D",
              padding: "5px 15px",
            }}
            name="Cancel"
          ></ButtonComponent>
        </CardActions>
      </Card>
    </>
  );
};

export default FormGrid;
