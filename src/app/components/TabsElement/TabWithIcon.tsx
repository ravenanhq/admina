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
              color: "#565656",
              "& .MuiTab-root": {
                color: "#565656",
              },
              "&.Mui-selected": {
                backgroundColor: "#007BFF",
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
              color: "#565656",
              "& .MuiButtonBase-root": {
                color: "#565656",
              },
              "&.Mui-selected": {
                backgroundColor: "#007BFF",
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
              color: "#565656",
              "& .MuiButtonBase-root": {
                color: "#565656",
              },
              "&.Mui-selected": {
                backgroundColor: "#007BFF",
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
              Ut vehicula nunc et ullamcorper imperdiet. Suspendisse ut libero
              maximus, hendrerit sem ut, interdum lorem. Nunc finibus eros at
              quam laoreet, vel sollicitudin nisl pharetra. Donec lorem ex,
              finibus in metus ut, pretium blandit odio. Fusce congue, ipsum id
              tempus ultrices, mauris lorem auctor sem, non dignissim elit lorem
              quis quam. Praesent scelerisque lectus pharetra laoreet auctor.
              Nullam malesuada neque nec urna sodales pellentesque.
            </div>
          )}
          {tabValue === 1 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Integer ut ultricies elit, sit amet sollicitudin arcu. Maecenas at
              nunc turpis. Cras id nunc augue. Vestibulum quis magna lorem. Nam
              massa tellus, sodales id mollis non, pulvinar at dolor. Mauris
              vitae metus sed massa egestas faucibus non sed ante. Phasellus
              rhoncus feugiat sagittis. Quisque molestie sagittis erat sit amet
              sagittis. Maecenas posuere velit eu felis dapibus mattis. Mauris
              dictum elit in mauris scelerisque, ut posuere justo viverra. Nunc
              ut molestie turpis. Proin commodo metus a sapien porttitor
              venenatis.
            </div>
          )}
          {tabValue === 2 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Sed in accumsan mi, et sodales erat. Fusce ultrices sapien id sem
              volutpat porttitor. Nullam porttitor faucibus metus vitae
              interdum. Quisque feugiat gravida massa, ut congue justo vulputate
              vitae. Ut sed leo sed turpis porttitor interdum ac vitae ex. Sed
              posuere, sapien quis ornare luctus, sapien ipsum tincidunt eros,
              nec vulputate libero est at mauris. In et dapibus libero, in
              auctor lorem. Curabitur vel tincidunt dolor. Nam placerat
              scelerisque arcu, fermentum ultrices massa euismod non. Vestibulum
              vitae ante lacinia, blandit purus eget, rhoncus lorem.
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TabWithIcon;
