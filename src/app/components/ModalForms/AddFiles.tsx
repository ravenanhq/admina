import React, { useState } from "react";
import { Button, Popover, Box, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const AddFile = ({ anchorEl, close, onFilesSelected }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!validImageTypes.includes(file.type)) {
        setError("Only image files are allowed.");
        return;
      }
      setError(""); // Clear any previous error
      const reader = new FileReader();
      reader.onload = (e) => {
        imagesArray.push(e.target.result);
        if (imagesArray.length === files.length) {
          setSelectedFiles(imagesArray);
          onFilesSelected(imagesArray);
          close();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
      <Box sx={{ padding: "25px" }}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Select Files
        </Typography>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ margin: "10px 0", display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <Button
            variant="outlined"
            component="span"
            startIcon={<AttachFileIcon />}
          >
            Choose Files
          </Button>
        </label>
        {error && (
          <Typography
            color="error"
            variant="body2"
            style={{ marginTop: "10px" }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </Popover>
  );
};

export default AddFile;
