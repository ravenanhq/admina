import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Divider, Typography } from "@mui/material";

const BasicTab = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "600", fontSize: "14px", color: "#565656" }}
      >
        Basic Tab
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ marginTop: "16px", width: "100%" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            "& .MuiTab-root": {
              color: "#565656",
              paddingBottom: "0",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#007BFF",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTouchRipple-root": {
              borderBottom: "2px solid #565656",
              width: "50%",
              left: "22px",
            },
            "& .Mui-selected .MuiTouchRipple-root": {
              color: "#007BFF",
              borderBottom: "2px solid #007BFF",
            },
          }}
        >
          <Tab label="Tab 1" sx={{ fontSize: "12px" }} />
          <Tab label="Tab 2" sx={{ fontSize: "12px" }} />
          <Tab label="Tab 3" sx={{ fontSize: "12px" }} />
        </Tabs>
        <Box sx={{ p: "16px" }}>
          {tabValue === 0 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Etiam nec diam a dui pellentesque feugiat sed et mi. Morbi
              suscipit sodales lectus, quis varius ipsum pharetra ut. Etiam
              finibus pulvinar ultrices. Donec id magna venenatis, egestas magna
              sit amet, volutpat diam. Duis lacus odio, blandit sed condimentum
              eget, efficitur id lacus. Ut velit neque, vestibulum non efficitur
              vitae, sollicitudin at nibh. Etiam tincidunt tincidunt venenatis.
              Nullam ac quam sed augue dapibus interdum sit amet in velit.
              Aenean tempus sit amet lacus eu volutpat. Mauris ornare mattis
              nulla in varius. Vestibulum et ex eu nunc venenatis pellentesque.
              Donec sit amet ligula et orci porttitor tempor. Donec at nunc
              dapibus, pretium lacus at, malesuada erat. Aliquam consectetur
              pellentesque mi eu semper. Etiam non nulla non velit varius
              efficitur.
            </div>
          )}
          {tabValue === 1 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              In condimentum ipsum id fermentum fermentum. Curabitur a
              condimentum diam. Aenean nisi nisl, placerat pharetra quam ut,
              egestas pellentesque orci. Duis nulla enim, pellentesque vitae
              vulputate non, consequat at nisl. Pellentesque fermentum turpis
              orci, non luctus mauris commodo ac. Donec molestie arcu rutrum
              libero malesuada volutpat ac quis nunc. Donec malesuada, turpis
              vel semper elementum, erat nulla blandit nibh, et sagittis dui
              turpis lobortis quam.
            </div>
          )}
          {tabValue === 2 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Curabitur at felis a nunc facilisis interdum at id nisi.
              Suspendisse ut leo ut justo venenatis maximus nec vitae nulla. Sed
              vitae orci ut elit ultricies lobortis non at odio. Suspendisse ut
              pharetra nulla, non aliquam lorem. Nulla rutrum tincidunt laoreet.
              Proin lacus tortor, tincidunt quis fermentum at, fringilla quis
              velit. In eget pretium enim.
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default BasicTab;
