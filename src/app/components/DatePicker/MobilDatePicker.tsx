import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Typography from "@mui/material/Typography";

const MobilDatePicker = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#940d4c",
          color: "white",
        }}
      >
        Mobile View Date Picker
      </Typography>
      <div style={{ background: "#fff", padding: "20px",display:"flex",flexDirection:"column"}}>
        <label
          htmlFor="datePicker"
          style={{ fontSize: "15px", fontWeight: "600" }}
        >
          Select Date:
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker />
        </LocalizationProvider>
      </div>
    </>
  );
};
export default MobilDatePicker;
