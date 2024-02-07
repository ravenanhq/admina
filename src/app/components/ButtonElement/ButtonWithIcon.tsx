import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import UploadIcon from "@mui/icons-material/Upload";

const ButtonWithIcon = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
        Buttons With icons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <Button
          variant="contained"
          type="submit"
          size="small"
          startIcon={<PersonIcon />}
          sx={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#008cff",
          }}
        >
          Person
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="small"
          startIcon={<HomeIcon />}
          sx={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#fd3550",
          }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="small"
          startIcon={<DownloadIcon />}
          sx={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#212529",
          }}
        >
          Download
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="small"
          startIcon={<CommentsDisabledIcon />}
          sx={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#0dcaf0",
          }}
        >
          Comments
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="small"
          startIcon={<UploadIcon />}
          sx={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#ffc107",
          }}
        >
          Upload
        </Button>
      </Box>
    </>
  );
};

export default ButtonWithIcon;
