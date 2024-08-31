import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import UploadIcon from "@mui/icons-material/Upload";
import ButtonComponent from "../BaseComponent/Button";

const ButtonWithIcon = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
        Buttons With icons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          color="primary"
          name="Person"
          prefix={<PersonIcon sx={{ marginTop: "-4px" }} />}
          style={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#008cff",
          }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          color="primary"
          name="Home"
          prefix={<HomeIcon sx={{ marginTop: "-4px" }} />}
          style={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#fd3550",
          }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          color="primary"
          name="Download"
          prefix={<DownloadIcon />}
          style={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#212529",
          }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          color="primary"
          name="Comments"
          suffix={<CommentsDisabledIcon />}
          style={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#0dcaf0",
          }}
        ></ButtonComponent>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          color="primary"
          name="Upload"
          prefix={<UploadIcon />}
          style={{
            padding: "7px 30px",
            marginBottom: "10px",
            background: "#ffc107",
          }}
        ></ButtonComponent>
      </Box>
    </>
  );
};

export default ButtonWithIcon;
