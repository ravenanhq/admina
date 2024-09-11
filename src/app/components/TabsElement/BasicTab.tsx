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
            "& .MuiButtonBase-root": {
              paddingBottom: "0",
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
            "& .MuiTabs-indicator": {
              display: "none",
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.
            </div>
          )}
          {tabValue === 1 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance.
            </div>
          )}
          {tabValue === 2 && (
            <div
              style={{ fontSize: "12px", color: "#565656", lineHeight: "21px" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default BasicTab;
