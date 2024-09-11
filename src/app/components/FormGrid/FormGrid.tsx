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
  Typography,
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
          <Typography
            variant="h2"
            sx={{
              py: 1,
              fontSize: "14px",
              fontWeight: "600",
              color: "#747477",
              letterSpacing: "0.9px",
            }}
          >
            Form Grid
          </Typography>
        </Grid>
      </Grid>
      <Card variant="outlined" style={{ borderRadius: "5px", border: "none" }}>
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
                />

                <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                  <InputLabel
                    id="demo-simple-select-error-label"
                    sx={{
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    }}
                  >
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
                    sx={{
                      "& .MuiFormLabel-root": {
                        fontSize: "12px",
                        color: "#565656",
                        letterSpacing: "0.7px",
                      },
                    }}
                  >
                    <MenuItem
                      value=""
                      sx={{ fontSize: "12px", color: "#565656" }}
                    >
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      value="Admin"
                      sx={{ fontSize: "12px", color: "#565656" }}
                    >
                      Admin
                    </MenuItem>
                    <MenuItem
                      value="User"
                      sx={{ fontSize: "12px", color: "#565656" }}
                    >
                      User
                    </MenuItem>
                    <MenuItem
                      value="Moderate"
                      sx={{ fontSize: "12px", color: "#565656" }}
                    >
                      Moderate
                    </MenuItem>
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderCollor: "C0C0C0",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      color: "#565656",
                      padding: "9px 14px",
                    },
                    "& .MuiFormLabel-root": {
                      fontSize: "12px",
                      color: "#565656",
                      letterSpacing: "0.7px",
                    },
                  }}
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
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ fontSize: "12px", color: "#565656" }}
                  >
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
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "#747474",
                            "&.Mui-checked": {
                              color: "#747474",
                            },
                          }}
                        />
                      }
                      label="Female"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "12px",
                          color: "#565656",
                        },
                      }}
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "#747474",
                            "&.Mui-checked": {
                              color: "#747474",
                            },
                          }}
                        />
                      }
                      label="Male"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "12px",
                          color: "#565656",
                        },
                      }}
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "#747474",
                            "&.Mui-checked": {
                              color: "#747474",
                            },
                          }}
                        />
                      }
                      label="Other"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "12px",
                          color: "#565656",
                        },
                      }}
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
              background: "#007BFF",
              padding: "5px 25px",
              borderRadius: "0",
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
              background: "#75B8FF",
              padding: "5px 25px",
              borderRadius: "0",
            }}
            name="Cancel"
          ></ButtonComponent>
        </CardActions>
      </Card>
    </>
  );
};

export default FormGrid;
