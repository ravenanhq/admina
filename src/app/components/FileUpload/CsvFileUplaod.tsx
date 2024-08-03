import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CsvFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter((file) => file.type === "text/csv");
    const invalidFiles = files.length !== csvFiles.length;

    if (invalidFiles) {
      setError("Please upload only CSV files.");
    } else {
      setError(null);
      setSelectedFiles((prevFiles) => [...prevFiles, ...csvFiles]);
    }
  };

  const removeFile = (fileIndex: number) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / 1048576).toFixed(2)} MB`;
  };

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardHeader
        title="CSV File Upload"
        sx={{ bgcolor: "#0d9440", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <Box sx={{ padding: "10px", margin: "20px", border: "2px dotted #ccc" }}>
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        {selectedFiles.length > 0 && (
          <Grid
            container
            spacing={2}
            sx={{ marginTop: 0, paddingLeft: 2, paddingRight: 2 }}
          >
            {selectedFiles.map((file, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    boxShadow: "0 0 3px 3px #eee",
                    padding: "16px 16px 0 16px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                      CSV
                    </Typography>
                    <Divider sx={{ width: "100%" }} />
                    <div style={{ margin: "10px 0" }}>
                      <Typography
                        style={{
                          fontSize: "13px",
                          lineHeight: "14px",
                          marginBottom: "5px",
                          color: "#5B5A58",
                        }}
                      >
                        {file.name}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#444050",
                        }}
                      >
                        {formatFileSize(file.size)}
                      </Typography>
                    </div>
                    <Divider sx={{ width: "100%" }} />
                    <Button
                      variant="text"
                      color="primary"
                      component="span"
                      onClick={() => removeFile(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="csv-file-upload"
            style={{ display: "block", textAlign: "center" }}
          >
            <input
              accept=".csv"
              style={{ display: "none" }}
              id="csv-file-upload"
              multiple
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
        </Box>
      </Box>
    </Card>
  );
};

export default CsvFileUpload;
