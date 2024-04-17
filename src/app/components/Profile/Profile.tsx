import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Card,
  Box,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { TabContext, TabPanel } from "@mui/lab";
import ProfileTimeline from "./ProfileTimeline";
import ContactsIcon from "@mui/icons-material/Contacts";
import ProfileContacts from "./ProfileContacts";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container sx={{ px: 0 }}>
      <Paper>
        <Card className="mb-4">
          <Box>
            <img
              src={"/assets/images/profile-bg.jpg"}
              alt="Banner image"
              style={{
                width: "100%",
                objectFit: "cover",
                height: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <div style={{ marginTop: isDesktop ? "-2rem" : "-4rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: isDesktop ? "row" : "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "1rem",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    border: "5px solid #fff",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginLeft: isDesktop ? "16px" : "",
                  }}
                >
                  <Avatar
                    alt="user image"
                    src="/assets/images/avatar-1.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div style={{}}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ textAlign: isDesktop ? "left" : "center" }}
                  >
                    User
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "16px",
                      }}
                    >
                      <PortraitIcon />
                      <Typography
                        variant="subtitle2"
                        style={{ marginLeft: "4px" }}
                      >
                        Admin
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CalendarMonthIcon />
                      <Typography
                        variant="subtitle2"
                        style={{ marginLeft: "4px" }}
                      >
                        Joined April 2024
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Card>
      </Paper>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs lg={4}>
          <ProfileDetails />
        </Grid>
        <Grid item xs lg={8}>
          <Paper elevation={0} className="card mb-4">
            <TabContext value={value}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs example"
              >
                <Tab
                  icon={<ReorderIcon />}
                  iconPosition="start"
                  label="Timeline"
                  value="0"
                />
                <Tab
                  icon={<ContactsIcon />}
                  iconPosition="start"
                  label="Contacts"
                  value="1"
                />
              </Tabs>
              <TabPanel value="0" sx={{ p: 2 }}>
                <ProfileTimeline />{" "}
              </TabPanel>
              <TabPanel value="1" sx={{ p: 2 }}>
                <ProfileContacts />
              </TabPanel>
            </TabContext>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
