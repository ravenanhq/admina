import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReviewCommentForm from "./ReviewCommentForm";

const ProductDetailTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const TabPanel = ({ children, index, value }) => {
    return (
      <div hidden={value !== index}>
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  return (
    <>
      <Card
        style={{ display: "block", marginTop: "20px", border: "1px solid #ccc" }}
      >
        <CardContent style={{ flex: 1, marginLeft:isMobile ? "0px" : "20px"}} >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            sx={{ marginBottom: "10px", fontSize: "12px" }}
            classes={{ scroller: "tabScroller" }}
            style={{ overflow: "visible" }}
          >
            <Tab
              label="Description"
              className={currentTab === 0 ? "activeTab" : ""}
            />
            <Tab
              label="Specificatoin"
              className={currentTab === 1 ? "activeTab" : ""}
            />
            <Tab
              label="Reviews"
              className={currentTab === 2 ? "activeTab" : ""}
            />
          </Tabs>

          <TabPanel value={currentTab} index={0}>
            <Typography variant="body1" color="textPrimary">
              Raw denim you probably haven't heard of them jean shorts Austin.
              Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              Mustache cliche tempor, williamsburg carles vegan helvetica.
              Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
              sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
              placeat salvia cillum iphone. Seitan aliquip quis cardigan
              american apparel, butcher voluptate nisi.
            </Typography>
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <CardContent style={{ padding: "0" }}>
              <table
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                }}
              >
                <tbody>
                  <tr>
                    <th style={{ width: "70%", textAlign: "left" }}>Modal#</th>
                    <td>Mod-01</td>
                  </tr>
                  <tr>
                    <th style={{ width: "70%", textAlign: "left" }}>Color</th>
                    <td>Red</td>
                  </tr>
                  <tr>
                    <th style={{ width: "70%", textAlign: "left" }}>Deliver</th>
                    <td>USA</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            <Grid container>
              <Grid item xs={12} sm={12} md={4} lg={8} xl={4}>
                <Typography variant="body1" gutterBottom>
                  Raw denim you probably haven't heard of them jean shorts Austin
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={4} lg={6} xl={4} justifyContent="flex-end">
                <Typography variant="body2" align="left" color="#089aff">
                  -By John
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReviewCommentForm></ReviewCommentForm>
              </Grid>
            </Grid>
          </TabPanel>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetailTabs;
