import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  TextField,
  FormControl,
  FormLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const SectionModalForm = ({ open, close }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    phone: "",
    pinCode: "",
  });

  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    phone: "",
    pinCode: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street address is required";
      isValid = false;
    } else {
      newErrors.streetAddress = "";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
      isValid = false;
    } else {
      newErrors.city = "";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    if (formData.pinCode.trim() === "") {
      newErrors.pinCode = "Pin code is required";
      isValid = false;
    } else {
      newErrors.pinCode = "";
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

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      phone: "",
      pinCode: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      phone: "",
      pinCode: "",
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog open={open} onClose={close}>
          <DialogTitle id="modal-modal-title">
            Register Form
            <IconButton
              aria-label="close"
              onClick={close}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 1 }}>
              <Typography
                id="modal-modal-description"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  paddingBottom: "25px",
                }}
              >
                Personal Details
              </Typography>
              <Grid
                container
                spacing={2}
                style={{ marginLeft: "0", paddingRight: "10px" }}
              >
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <Grid
                    item
                    sm={12}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        First Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:John"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        Last Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:Doe"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        Email
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:john@example.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "20px 0 0px 0",
                    }}
                  >
                    Contact Details
                  </Typography>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        Street Address
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:Richmond Hill"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        error={!!errors.streetAddress}
                        helperText={errors.streetAddress}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        City
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:Queensland"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={!!errors.city}
                        helperText={errors.city}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        Pin Code
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:4820"
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        error={!!errors.pinCode}
                        helperText={errors.pinCode}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{ flexDirection: isMobile ? "column" : "row" }}
                    >
                      <FormLabel
                        sx={{
                          marginRight: "10px",
                          flexShrink: 0,
                          minWidth: "100px",
                          fontSize: "14px",
                        }}
                      >
                        Phone
                      </FormLabel>
                      <TextField
                        fullWidth
                        placeholder="ex:(08) 8723 1434"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        size="small"
                        inputProps={{
                          style: { fontSize: "14px", padding: "6.5px , 14px" },
                        }}
                      />
                    </FormControl>
                  </Grid>
                </form>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
    </div>
  );
};

export default SectionModalForm;
