import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

const DatePickerUIElement = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#008744",
          color: "white",
        }}
      >
        Basic Date Picker
      </Typography>

      <div style={{ background: "#fff", padding: "20px" }}>
        <label
          htmlFor="datePicker"
          style={{ fontSize: "15px", fontWeight: "600" }}
        >
          Select Date:
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ display: "block" }} />
        </LocalizationProvider>
      </div>
    </>
  );
};
export default DatePickerUIElement;
