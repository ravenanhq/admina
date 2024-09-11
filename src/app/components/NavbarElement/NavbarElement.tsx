import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CardContent,
  Card,
  CardHeader,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  TextField,
  Grid,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenWithLogin, setIsMenuOpenWithLogin] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMenuWithlogin = () =>
    setIsMenuOpenWithLogin(!isMenuOpenWithLogin);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Home", "About", "Services", "Contact"];
  return (
    <Card variant="outlined">
      <CardHeader
        title="Navbar"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: isMobile ? "space-between" : "flex-start",
              background: "#007BFF",
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontSize: "14px" }}>
              Basic Navbar
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <List sx={{ display: "flex", padding: 0 }}>
                {menuItems.map((text) => (
                  <ListItem
                    key={text}
                    sx={{
                      padding: "0 16px",
                      cursor: "pointer",
                      fontSize: "12px",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "13px",
                        width: 0,
                        height: "2px",
                        backgroundColor: "#fff",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "70%",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "inherit" }}
                      className="hoverEffect"
                    >
                      {text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box sx={{ padding: "30px" }}>
              <List>
                {menuItems.map((text) => (
                  <ListItem button key={text} onClick={handleDrawerToggle}>
                    <Typography variant="body2">{text}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </AppBar>

        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar style={{ background: "#007BFF" }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontSize: "14px" }}>
              Drawer Navbar
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              width: "20%",
            },
          }}
        >
          <List>
            {["Home", "About", "Services", "Contact"].map((text) => (
              <ListItem
                key={text}
                onClick={toggleDrawer}
                sx={{ fontSize: "12px" }}
              >
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center", color: "#565656" }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <AppBar
          position="static"
          style={{ marginBottom: "20px", background: "#007BFF" }}
        >
          <Toolbar>
            <Grid
              container
              rowSpacing={1}
              spacing={5}
              justifyContent="space-between"
            >
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "31px",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "14px" }}
                >
                  Navbar
                </Typography>
                <Box
                  sx={{
                    marginLeft: "10px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <List sx={{ display: "flex", padding: 0 }}>
                    {["Home", "About", "Services", "Contact"].map((text) => (
                      <ListItem
                        key={text}
                        sx={{
                          padding: "0 16px",
                          cursor: "pointer",
                          fontSize: "12px",
                          position: "relative",
                          "&:hover::after": {
                            width: "70%",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "13px",
                            width: 0,
                            height: "2px",
                            backgroundColor: "#fff",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "inherit" }}>
                          {text}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>

              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "0",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenu}
                  sx={{ display: { sm: "none" }, marginTop: "8px" }}
                >
                  <MenuIcon />
                </IconButton>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" sx={{ color: "#565656" }}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    height: "40px",
                    padding: isTablet ? "5px 8px 8px 8px" : "8px",
                    width: "auto",
                    color: "#fff",
                    "& input": {
                      padding: "8px",
                      color: "#fff",
                      fontSize: "12px",
                    },
                    "& fieldset": {
                      borderColor: "#565656",
                      borderRadius: "20px",
                    },
                    "& fieldset:hover": {
                      borderColor: "#fff",
                    },
                    display: { xs: "none", sm: "block" },
                  }}
                />
              </Grid>
            </Grid>
          </Toolbar>
          <Drawer anchor="bottom" open={isMenuOpen} onClose={toggleMenu}>
            <div
              style={{
                width: "100vw",
                maxWidth: "100%",
                background: "#007bff",
                color: "#fff",
                paddingBottom: "20px",
              }}
            >
              {["Home", "About", "Services", "Contact"].map((text, index) => (
                <Button
                  color="inherit"
                  fullWidth
                  key={text}
                  style={{ paddingLeft: "15px", justifyContent: "left" }}
                >
                  {text}
                </Button>
              ))}
              <TextField
                placeholder="Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" sx={{ color: "#fff" }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  height: "40px",
                  padding: "8px",
                  width: "auto",
                  color: "#fff",
                  "& input": {
                    padding: "8px",
                    color: "#fff",
                    fontSize: "12px",
                  },
                  "& fieldset": { borderColor: "#fff", borderRadius: "20px" },
                  "& fieldset:hover": {
                    borderColor: "#fff",
                  },
                }}
              />
            </div>
          </Drawer>
        </AppBar>

        <AppBar
          position="static"
          style={{ marginBottom: "20px", background: "#007BFF" }}
        >
          <Toolbar>
            <Grid
              container
              rowSpacing={1}
              spacing={5}
              justifyContent="space-between"
            >
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "31px",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "14px" }}
                >
                  Navbar
                </Typography>
                <Box
                  sx={{
                    marginLeft: "10px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <List sx={{ display: "flex", padding: 0 }}>
                    {["Home", "About", "Services", "Contact"].map((text) => (
                      <ListItem
                        key={text}
                        sx={{
                          padding: "0 16px",
                          cursor: "pointer",
                          fontSize: "12px",
                          position: "relative",
                          "&:hover::after": {
                            width: "70%",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "13px",
                            width: 0,
                            height: "2px",
                            backgroundColor: "#fff",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "inherit" }}>
                          {text}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>

              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: isMobile
                    ? "flex-end"
                    : isTablet
                    ? "normal"
                    : "flex-end",
                  padding: isMobile ? "0" : isTablet ? "8px 0 0 0" : "0",
                  margin: "15px 0 0 0",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenuWithlogin}
                  sx={{ display: { sm: "none" }, marginTop: "-6px" }}
                >
                  <MenuIcon />
                </IconButton>
                {!isMobile && (
                  <>
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      prefix={
                        <LockIcon
                          style={{
                            marginTop: "-4px",
                            color: "#747474",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      }
                      style={{
                        padding: "5px 30px",
                        marginBottom: "10px",
                        background: "#fff",
                        color: "#565656",
                        minWidth: isTablet ? "80px" : "64px",
                        marginTop: isTablet ? "-5px" : "",
                        textTransform: "uppercase",
                      }}
                      name="Login"
                    ></ButtonComponent>
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      prefix={
                        <PersonIcon
                          style={{
                            marginTop: "-4px",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      }
                      style={{
                        padding: "5px 30px",
                        marginBottom: "10px",
                        background: "#008cff",
                        marginLeft: "10px",
                        minWidth: isTablet ? "115px" : "64px",
                        marginTop: isTablet ? "-5px" : "",
                        textTransform: "uppercase",
                      }}
                      name="Register"
                    ></ButtonComponent>
                  </>
                )}
              </Grid>
            </Grid>
          </Toolbar>
          <Drawer
            anchor="bottom"
            open={isMenuOpenWithLogin}
            onClose={toggleMenuWithlogin}
          >
            <div
              style={{
                width: "100vw",
                maxWidth: "100%",
                background: "#007bff",
                color: "#fff",
                paddingBottom: "10px",
              }}
            >
              {[
                "Home",
                "About",
                "Services",
                "Contact",
                "Login",
                "Register",
              ].map((text) => (
                <Button
                  color="inherit"
                  fullWidth
                  key={text}
                  style={{ justifyContent: "left", paddingLeft: "15px" }}
                >
                  {text}
                </Button>
              ))}
            </div>
          </Drawer>
        </AppBar>
      </CardContent>
    </Card>
  );
};

export default Navbar;
