import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const PersonalDetailsForm = ({ formData, handleChange, errors, isMobile }) => {
  return (
    <div>
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
        spacing={3}
        style={{ marginLeft: "0", paddingRight: "20px" }}
      >
        <Grid
          item
          sm={12}
          style={{
            display: isMobile ? "block" : "flex",
            justifyContent: "space-between",
            width: "auto",
            paddingLeft: "0",
            paddingTop: "1px",
          }}
        >
          <FormControl
            style={{
              flexDirection: "column",
              width: "100%",
              marginBottom: isMobile ? "10px" : "",
            }}
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
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
          <FormControl
            style={{
              flexDirection: "column",
              width: "100%",
              marginLeft: isMobile ? "0" : "10px",
            }}
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
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
            display: isMobile ? "block" : "flex",
            justifyContent: "space-between",
            width: "auto",
            paddingLeft: "0",
            paddingTop: "5px",
          }}
        >
          <FormControl
            style={{ flexDirection: "column", width: "100%" }}
            className="modalFormControl"
          >
            <FormLabel
              sx={{
                marginRight: "10px",
                flexShrink: 0,
                minWidth: "100px",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Email
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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

          <FormControl
            style={{
              flexDirection: "column",
              marginTop: "10px",
              width: "100%",
              marginLeft: isMobile ? "0" : "10px",
            }}
            className="modalFormControl"
          >
            <FormLabel
              sx={{
                marginRight: "10px",
                flexShrink: 0,
                minWidth: "100px",
                fontSize: "14px",
              }}
            >
              Date of Birth
            </FormLabel>
            <TextField
              fullWidth
              placeholder="ex:01/01/2000"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                style: {
                  fontSize: "14px",
                  padding: "8.5px 14px",
                },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalDetailsForm;
