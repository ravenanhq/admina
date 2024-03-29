import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';

const DateAndTimePicker = () => {
    return (
      <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#1d8683",
          color: "white",
        }}
        className="header"
      >
        Date and Time Picker 
      </Typography>
      <div style={{ background: "#fff", padding: "20px" }} >
        <label
          htmlFor="datePicker"
          style={{ fontSize: "15px", fontWeight: "600" }}
        >
          Select Date and Time:
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker sx={{ display: "block" }} />
        </LocalizationProvider>
      </div>
    </>
      );
}
 export default DateAndTimePicker;