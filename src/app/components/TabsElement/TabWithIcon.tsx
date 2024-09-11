import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography, Divider } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";

const TabWithIcon = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginTop: "10px",
          fontWeight: "600",
          fontSize: "14px",
          color: "#565656",
        }}
      >
        Tab With Icon
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ marginTop: "16px", width: "100%" }} className="iconTab">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            icon={<ModeEditOutlineIcon />}
            iconPosition="start"
            label="Tab1"
            sx={{
              minHeight: "auto",
              fontSize: "12px",
              padding: "6px 31px",
              "&.Mui-selected": {
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            icon={<DeleteIcon />}
            iconPosition="start"
            label="Tab2"
            sx={{
              minHeight: "auto",
              fontSize: "12px",
              padding: "6px 31px",
              "&.Mui-selected": {
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: "5px",
              },
            }}
          />
          <Tab
            icon={<EmailIcon />}
            iconPosition="start"
            label="Tab3"
            sx={{
              minHeight: "auto",
              fontSize: "12px",
              padding: "6px 31px",
              "&.Mui-selected": {
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: "5px",
              },
            }}
          />
        </Tabs>
        <Box sx={{ p: "16px" }}>
          {tabValue === 0 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </div>
          )}
          {tabValue === 1 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor{" "}
            </div>
          )}
          {tabValue === 2 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,{" "}
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TabWithIcon;
