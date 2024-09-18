import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const ContactDetailsForm = ({ formData, handleChange, errors, isMobile }) => {
  return (
    <div>
      {" "}
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
            paddingTop: "30px",
          }}
        >
          <FormControl
            style={{
              flexDirection: "column",
              width: "100%",
              marginBottom: isMobile ? "10px" : "0",
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
              Street Address
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
              City
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
            display: isMobile ? "block" : "flex",
            justifyContent: "space-between",
            width: "auto",
            marginTop: "10px",
            paddingLeft: "0",
            paddingTop: "5px",
          }}
        >
          <FormControl
            style={{
              flexDirection: "column",
              width: "100%",
              marginBottom: isMobile ? "10px" : "0",
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
              Pin Code
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
              Phone
              <span style={{ color: "#d32f2f", marginLeft: "2px" }}>*</span>
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
      </Grid>
    </div>
  );
};

export default ContactDetailsForm;
