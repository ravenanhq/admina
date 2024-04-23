import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BillingSetting = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const initialFormData = {
    id: "",
    companyName: "",
    taxId: "",
    streetAddress: "",
    city: "",
    email: "",
    vatNumber: "",
    pinCode: "",
    phone: "",
    gender: "",
    state: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    companyName: "",
    taxId: "",
    streetAddress: "",
    city: "",
    email: "",
    vatNumber: "",
    pinCode: "",
    phone: "",
    gender: "",
    state: "",
    country: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

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
      setFormData({ ... initialFormData })
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <Card variant="outlined" style={{ borderRadius: "12px" }}>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Added Successfully"
      />
      <CardHeader
        style={{ paddingLeft: "16px", paddingTop: "16px", paddingBottom: 0 }}
        title="Billing Address"
        titleTypographyProps={{ fontSize: "20px" }}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                error={!!errors.companyName}
                helperText={errors.companyName}
                size="small"
                
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
              <TextField
                fullWidth
                margin="normal"
                label={
                  <span>Billing Email<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                   </span>}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Tax ID"
                type="text"
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                error={!!errors.taxId}
                helperText={errors.taxId}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
              <TextField
                fullWidth
                margin="normal"
                label="VAT Number"
                type="text"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleChange}
                error={!!errors.vatNumber}
                helperText={errors.vatNumber}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label={
                  <span>Phone<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                   </span>}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
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
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
              <TextField
                fullWidth
                margin="normal"
                label="State"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={!!errors.state}
                helperText={errors.state}
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={formData.country}
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  renderValue={(value) => `${value}`}
                >
                  <MenuItem value="">
                    <em>Select Country</em>
                  </MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
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
            </Grid>
          </Grid>
        </form>
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
  );
};

export default BillingSetting;
