import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const BasicFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsUploaded(true);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setIsUploaded(false);
  };

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / 1048576).toFixed(2)} MB`;
  };

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardHeader
        title="Basic File Upload"
        sx={{ bgcolor: "#1d8683", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <Box sx={{ padding: "10px", margin: "20px", border: "2px dotted #ccc" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            flexDirection: "column",
          }}
        >
          {!selectedFile && (
            <label
              htmlFor="basic-file-upload"
              style={{ display: "block", alignSelf: "center" }}
            >
              <input
                accept="*/*"
                style={{ display: "none" }}
                id="basic-file-upload"
                type="file"
                onChange={handleFileChange}
              />
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                style={{ background: "none", boxShadow: "none", color: "#000" }}
              >
                <Typography sx={{ marginLeft: 1 }}>Click to upload</Typography>
              </Button>
            </label>
          )}
          {selectedFile && (
            <Box
              sx={{
                display: "flex",
                marginBottom: 2,
                width: "100%",
                boxShadow: "0 0 3px 3px #eee",
                flexDirection: "column",
                padding: "16px 16px 0 16px",
                alignItems: "center",
                borderRadius: "4px",
              }}
            >
              {selectedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    marginBottom: 2,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    background: "#ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No Preview
                </Typography>
              )}
              <Divider sx={{ width: "100%" }} />
              <div style={{ margin: "10px 0" }}>
                <Typography
                  style={{
                    fontSize: "15px",
                    color: "#444050",
                  }}
                >
                  {selectedFile.name}
                </Typography>
                <Typography
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#444050",
                  }}
                >
                  {formatFileSize(selectedFile.size)}
                </Typography>
              </div>
              <Divider sx={{ width: "100%" }} />
              <Button
                variant="text"
                color="primary"
                component="span"
                onClick={removeFile}
              >
                Remove
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default BasicFileUpload;
