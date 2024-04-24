"use client";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface IPassword {
  id?: number | string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  showCurrentPassword?: boolean;
  showNewPassword?: boolean;
  showConfirmPassword?: boolean;
}
const PasswordSetting = () => {
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const initialFormData: IPassword = {
    id: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  };

  const [formData, setFormData] = useState<IPassword>(initialFormData);

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    const validateField = (fieldName, value) => {
      if (value.trim() === "") {
        newErrors[fieldName] = "Password is required";
        isValid = false;
      } else if (value.length < 8) {
        newErrors[fieldName] = "Password must be at least 8 characters long";
        isValid = false;
      } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
          value
        )
      ) {
        newErrors[fieldName] =
          "Password must contain at least one lowercase character, one uppercase character, one number, and one symbol";
        isValid = false;
      } else {
        newErrors[fieldName] = "";
      }
    };

    validateField("currentPassword", formData.currentPassword);

    validateField("newPassword", formData.newPassword);

    validateField("confirmPassword", formData.confirmPassword);

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
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
      setFormData({...initialFormData })
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  const handlePasswordVisibility = (field: keyof IPassword) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: !prevFormData[field],
    }));
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
        style={{ paddingLeft: "16px", paddingTop: "16px" }}
        title={"Change Password"}
      />

      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={
                  <span>Current Password<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                   </span>}
                margin="normal"
                type={formData.showCurrentPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                name="currentPassword"
                size="small"
                placeholder="Password"
                value={formData.currentPassword}
                onChange={handleChange}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handlePasswordVisibility("showCurrentPassword")
                        }
                        edge="end"
                      >
                        {formData.showCurrentPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label={
                  <span>New Password<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                   </span>}
                margin="normal"
                type={formData.showNewPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                name="newPassword"
                size="small"
                placeholder="Password"
                value={formData.newPassword}
                onChange={handleChange}
                error={!!errors.newPassword}
                helperText={errors.newPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handlePasswordVisibility("showNewPassword")
                        }
                        edge="end"
                      >
                        {formData.showNewPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label={
                  <span>Confirm Password<span style={{ color: "#d32f2f",marginLeft:"3px" }}>*</span>
                   </span>}
                margin="normal"
                type={formData.showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                name="confirmPassword"
                size="small"
                placeholder="Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handlePasswordVisibility("showConfirmPassword")
                        }
                        edge="end"
                      >
                        {formData.showConfirmPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: isMobile ? 0 : "" }}>
              {/* <Paper> */}
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Password Requirements:"></ListItemText>
                </ListItem>

                <ListItem alignItems="center">
                  <ListItemText primary="Minimum 8 characters long - the more, the better" />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText primary="At least one lowercase character and one uppercase character" />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText primary="At least one number, symbol, or whitespace character" />
                </ListItem>
              </List>
              {/* </Paper> */}
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

export default PasswordSetting;
