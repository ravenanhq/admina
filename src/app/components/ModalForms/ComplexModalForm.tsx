import React from "react";
import {
  Box,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LeftSideComponent from "./LeftSideComponent";
import RightSideComponent from "./RightSideComponent";

const ComplexModalForm = ({ open, close }) => {
  const [selectedMembers, setSelectedMembers] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [anchorElMembers, setAnchorElMembers] = React.useState(null);
  const [anchorElDate, setAnchorElDate] = React.useState(null);
  const [anchorElFile, setAnchorElFile] = React.useState(null);

  const handlePopoverOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handleMembersSelected = (members) => {
    setSelectedMembers(members);
  };

  const handleRemoveMember = (memberToRemove) => {
    setSelectedMembers(
      selectedMembers.filter((member) => member !== memberToRemove)
    );
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
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog open={open} onClose={close}>
          <DialogTitle id="modal-modal-title">
            Complex Form
            <IconButton
              aria-label="close"
              onClick={close}
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
              <Grid container spacing={2}>
                <LeftSideComponent
                  selectedMembers={selectedMembers}
                  handleRemoveMember={handleRemoveMember}
                  selectedDate={selectedDate}
                  handleRemoveDate={handleRemoveDate}
                  selectedFiles={selectedFiles}
                  handleRemoveFile={handleRemoveFile}
                />
                <RightSideComponent
                  anchorElMembers={anchorElMembers}
                  setAnchorElMembers={setAnchorElMembers}
                  anchorElDate={anchorElDate}
                  setAnchorElDate={setAnchorElDate}
                  anchorElFile={anchorElFile}
                  setAnchorElFile={setAnchorElFile}
                  handlePopoverOpen={handlePopoverOpen}
                  handlePopoverClose={handlePopoverClose}
                  handleMembersSelected={handleMembersSelected}
                  handleDateSelected={handleDateSelected}
                  handleFilesSelected={handleFilesSelected}
                />
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </Modal>
    </div>
  );
};

export default ComplexModalForm;
