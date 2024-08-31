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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckboxModalForm from "./CheckboxModalForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import ContactDetailsForm from "./ContactDetailsForm";
import { ResourceOption } from "./data";
import ComplexModalForm from "./ComplexModalForm";

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
    dateOfBirth: "",
    resources: {},
  });

  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    phone: "",
    pinCode: "",
    dateOfBirth: "",
  });

  const [resetState, setResetState] = React.useState(false);
  const [resetComment, setResetComment] = React.useState(false);

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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
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

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must contain only numbers";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    const pinCodePattern = /^[0-9]{6}$/;

    if (formData.pinCode.trim() === "") {
      newErrors.pinCode = "Pin code is required";
      isValid = false;
    } else if (!pinCodePattern.test(formData.pinCode.trim())) {
      newErrors.pinCode = "Invalid pin code. It should be a 6-digit number";
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

  const handleSelectionChange = (type, selection) => {
    setFormData({
      ...formData,
      [type]: selection,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
      dateOfBirth: "",
      resources: {},
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      phone: "",
      pinCode: "",
      dateOfBirth: "",
    });
    setResetState(true);
    setResetComment(true);
  };

  React.useEffect(() => {
    if (resetState) {
      setResetState(false);
    }
  }, [resetState]);

  React.useEffect(() => {
    if (resetComment) {
      setResetComment(false);
    }
  }, [resetComment]);

  const handleClose = () => {
    close();
    handleClear();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="modal-modal-title">
            Register Form
            <IconButton
              aria-label="close"
              onClick={handleClose}
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
              <PersonalDetailsForm
                formData={formData}
                handleChange={handleChange}
                errors={errors}
                isMobile={isMobile}
              />

              <ContactDetailsForm
                formData={formData}
                handleChange={handleChange}
                errors={errors}
                isMobile={isMobile}
              />
              <CheckboxModalForm
                options={ResourceOption}
                handleSelectionChange={handleSelectionChange}
                resetState={resetState}
              />
              <ComplexModalForm resetComment={resetComment} />
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
