import React from "react";
import { Grid, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ButtonComponent from "../BaseComponent/Button";
import AddMember from "./AddMembers";
import AddDate from "./AddDate";
import AddFile from "./AddFiles";

const RightSideComponent = ({
  anchorElDate,
  setAnchorElDate,
  handlePopoverOpen,
  handlePopoverClose,
  handleDateSelected,
  anchorElFile,
  setAnchorElFile,
  handleFilesSelected,
}) => {
  return (
    <Grid
      item
      md={4}
      style={{
        flexDirection: "column",
        paddingTop: "30px",
      }}
    >
      <Typography
        sx={{ marginBottom: "10px", fontSize: "14px", fontWeight: "bold" }}
      ></Typography>
      <ButtonComponent
        variant="contained"
        type="submit"
        size="small"
        prefix={<QueryBuilderIcon sx={{ marginTop: "0px" }} />}
        style={{
          textTransform: "capitalize",
          background: "#e4e6ea",
          padding: "5px 15px",
          marginBottom: "10px",
          width: "100%",
          color: "#000",
          justifyContent: "start",
        }}
        name="Date"
        onClick={(event) => handlePopoverOpen(event, setAnchorElDate)}
      />
      <AddDate
        anchorEl={anchorElDate}
        close={() => handlePopoverClose(setAnchorElDate)}
        onDateSelected={handleDateSelected}
      />

      <ButtonComponent
        variant="contained"
        type="submit"
        size="small"
        prefix={<AttachFileOutlinedIcon sx={{ marginTop: "-4px" }} />}
        style={{
          textTransform: "capitalize",
          background: "#e4e6ea",
          padding: "5px 15px",
          marginBottom: "10px",
          width: "100%",
          color: "#000",
          justifyContent: "start",
        }}
        name="Attachment"
        onClick={(event) => handlePopoverOpen(event, setAnchorElFile)}
      />
      <AddFile
        anchorEl={anchorElFile}
        close={() => handlePopoverClose(setAnchorElFile)}
        onFilesSelected={handleFilesSelected}
      />
    </Grid>
  );
};

export default RightSideComponent;
