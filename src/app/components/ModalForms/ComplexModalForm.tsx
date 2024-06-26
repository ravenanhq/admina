import React from "react";
import { Box, Grid } from "@mui/material";
import LeftSideComponent from "./LeftSideComponent";
import RightSideComponent from "./RightSideComponent";

const ComplexModalForm = ({ resetComment }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [anchorElDate, setAnchorElDate] = React.useState(null);
  const [anchorElFile, setAnchorElFile] = React.useState(null);

  const handlePopoverOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handleRemoveDate = () => {
    setSelectedDate(null);
  };

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  const handleRemoveFile = () => {
    setSelectedFiles([]);
  };

  return (
    <div>
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <LeftSideComponent
            selectedDate={selectedDate}
            handleRemoveDate={handleRemoveDate}
            selectedFiles={selectedFiles}
            handleRemoveFile={handleRemoveFile}
            resetComment={resetComment}
          />
          <RightSideComponent
            anchorElDate={anchorElDate}
            setAnchorElDate={setAnchorElDate}
            anchorElFile={anchorElFile}
            setAnchorElFile={setAnchorElFile}
            handlePopoverOpen={handlePopoverOpen}
            handlePopoverClose={handlePopoverClose}
            handleDateSelected={handleDateSelected}
            handleFilesSelected={handleFilesSelected}
          />
        </Grid>
      </Box>
    </div>
  );
};

export default ComplexModalForm;
