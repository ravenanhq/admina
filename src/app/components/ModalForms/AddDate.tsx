import React, { useState } from "react";
import { Button, Popover, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const AddDate = ({ anchorEl, close, onDateSelected }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleSave = () => {
    onDateSelected(selectedDate);
    console.log(selectedDate);
    close();
  };

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={close}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: "10px" }}>
          <Typography
            variant="h6"
            style={{
              color: "#000",
            }}
            className="header"
          >
            Date Picker
          </Typography>
          <div style={{ background: "#fff" }}>
            <label
              htmlFor="datePicker"
              style={{ fontSize: "15px", fontWeight: "400", marginTop: "5px" }}
            >
              Select Date:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ display: "block" }}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
            </LocalizationProvider>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Popover>{" "}
    </>
  );
};

export default AddDate;
