import React, { useState } from "react";
import {
  TextField,
  FormControl,
  MenuItem,
  Select,
  CardActions,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import { labelOption } from "./EventData";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"

const AddTask = ({
  onClose,
  onSave,
  selectedDate
}) => {
  const [formData, setFormData] = useState({
    title: "",
    label: "",
    start: selectedDate ? selectedDate.toISOString().substr(0, 10) : "",
    end: selectedDate ? selectedDate.toISOString().substr(0, 10) : "",
  });

  const [errors, setErrors] = useState({
    title: "",
    label: "",
    start: "",
    end:""
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleConfirmClick = () => {
    if (validateForm()) {
      onSave(
        formData.title,
        formData.label,
        formData.start,
        formData.end
      );
      setFormData({ title: "", label: "", start: "", end: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.title.trim() === "") {
      newErrors.title = "Task is required";
      isValid = false;
    } else {
      newErrors.title = "";
    }

    if (formData.label.trim() === "") {
      newErrors.label = "Status is required";
      isValid = false;
    } else {
      newErrors.label = "";
    }



    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="h5"
        sx={{
          margin: "20px 0 0 10px",
          letterSpacing: "2px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        Add Event
      </Typography>
      <CloseIcon
        onClick={onClose}
        style={{
          position: "relative",
          top: "21px",
          left: "-12px",
          cursor: "pointer",
          color: "#555",
        }}
      />
    </div>

    <Divider sx={{ margin: "10px 0" }} />
    <Box
      sx={{
        width: isMobile ? "100%" : 350,
        padding: "10px 20px",
        color: "#555",
      }}
      role="presentation"
    >
      <form>
        <div style={{ display: "flex", marginBottom: "10px" }}></div>
        <FormControl
          style={{
            display: "flex",
            marginTop: "0",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="title" style={{ marginTop: "5px" }}>
            Title
          </label>
          <TextField
            name="title"
            value={formData.title || ""}
            fullWidth
            placeholder="Title"
            onChange={handleChange}
            margin="normal"
            error={!!errors.title}
            helperText={errors.title}
            inputProps={{
              style: { padding: "13px", fontSize: "16px" },
            }}
            style={{ marginTop: "10px" ,color:"#000"}}
          />
        </FormControl>
        <FormControl fullWidth error={!!errors.label}>
          <label htmlFor="status" style={{ marginBottom: "10px" }}>
            Label
          </label>
          <Select
            value={formData.label || ""}
            name="label"
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Select Label</em>
            </MenuItem>
            {labelOption.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
          {errors.label && (
            <span
              style={{
                color: "#d32f2f",
                fontSize: "12px",
                margin: "4px 13px",
              }}
            >
              {errors.label}
            </span>
          )}
        </FormControl>
        <FormControl
          style={{
            display: "flex",
            marginTop: "0",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="start" style={{ marginTop: "5px" }}>
            Start Date
          </label>
          <TextField
            name="start"
            type="date"
            value={formData.start}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputProps={{
              style: { padding: "13px", fontSize: "16px" },
            }}
            style={{ marginTop: "10px" }}
          />
        </FormControl>
        <FormControl
          style={{
            display: "flex",
            marginTop: "0",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="end" style={{ marginTop: "5px" }}>
            End Date
          </label>
          <TextField
            name="end"
            type="date"
            value={formData.end}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputProps={{
              style: { padding: "13px", fontSize: "16px" },
            }}
            style={{ marginTop: "10px" }}
          />
        </FormControl>

        <CardActions>
          <ButtonComponent
            variant="contained"
            type="button"
            onClick={handleConfirmClick}
            style={{
              background: "#1976d2",
              padding: "5px 15px",
            }}
            name="Save"
          ></ButtonComponent>
       
        </CardActions>
      </form>
    </Box>
  </div>
  );
};

export default AddTask;