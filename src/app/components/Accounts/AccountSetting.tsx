import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RefreshIcon from "@mui/icons-material/Refresh";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const AccountSettings = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const initialFormData = {
    id: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    email: "",
    role: "",
    pinCode: "",
    phone: "",
    gender: "",
    state: "",
    country: "",
    language: "",
    currency: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    email: "",
    role: null,
    pinCode: "",
    phone: "",
    gender: "",
    state: "",
    country: "",
    language: "",
    currency: "",
    fileType: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    } else {
      newErrors.firstName = "";
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
      setFormData({ ...initialFormData });
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  const [uploadedImage, setUploadedImage] = useState(
    "/assets/images/avatar-1.png"
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setUploadedImage(result);
        };
        reader.readAsDataURL(file);
        setErrors({ ...errors, fileType: "" });
      } else {
        setErrors({
          ...errors,
          fileType: "Please upload a JPEG or PNG image.",
        });
        setUploadedImage("/assets/images/avatar-1.png");
      }
    }
  };

  const handleResetImage = () => {
    setUploadedImage("/assets/images/avatar-1.png");
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
        title="Profile Details"
        titleTypographyProps={{ fontSize: "20px" }}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} sm={6} md={2}>
              <Avatar
                src={uploadedImage}
                alt="user-avatar"
                sx={{ width: 100, height: 100, margin: "auto" }}
                variant="rounded"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              style={{
                marginTop: isMobile ? "1rem" : "",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <label htmlFor="upload" style={{ marginBottom: "0.5rem" }}>
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<UploadFileIcon />}
                  style={{ marginRight: "0.5rem" }}
                >
                  Upload
                </Button>
                <input
                  type="file"
                  id="upload"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </label>
              <Button
                variant="outlined"
                onClick={handleResetImage}
                startIcon={<RefreshIcon />}
              >
                Reset
              </Button>
              <Typography
                variant="body2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                Allowed JPG, or PNG.
              </Typography>
              {errors.fileType && (
                <Typography variant="body2" style={{ color: "#d32f2f" }}>
                  {errors.fileType}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Divider style={{ marginTop: "1rem" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label={
                  <span>
                    First Name<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                  </span>
                }
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
              <TextField
                fullWidth
                margin="normal"
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
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
                <span>Email<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
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
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
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

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={formData.language}
                  label="Language"
                  name="language"
                  onChange={handleChange}
                  renderValue={(value) => `${value}`}
                >
                  <MenuItem value="">
                    <em>Select Language</em>
                  </MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                  <MenuItem value="Malayalam">Malayalam</MenuItem>
                  <MenuItem value="Hindi">Hindi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                <InputLabel id="demo-simple-select-error-label">
                  Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={formData.currency}
                  label="Currency"
                  name="currency"
                  onChange={handleChange}
                  renderValue={(value) => `${value}`}
                >
                  <MenuItem value="">
                    <em>Select Currency</em>
                  </MenuItem>
                  <MenuItem value="Rubee">Rubee</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="Euro">Euro</MenuItem>
                </Select>
              </FormControl>
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

export default AccountSettings;
