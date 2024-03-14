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

  return (
    <Card variant="outlined">
      <CardHeader
        title="Navbar"
        sx={{ bgcolor: "#008744", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Basic Navbar
            </Typography>
            <Box>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Drawer Navbar
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <List>
            {["Home", "About", "Services", "Contact"].map((text) => (
              <ListItem key={text} onClick={toggleDrawer}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <AppBar
          position="static"
          style={{ marginBottom: "20px", background: "#6c757d" }}
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
                <Typography variant="h6" component="div">
                  Navbar
                </Typography>
                <Box
                  sx={{
                    marginLeft: "10px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    About
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Services
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Contact
                  </Button>
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
                        <IconButton edge="end" sx={{ color: "#fff" }}>
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
                    "& input": { padding: "8px", color: "#fff" },
                    "& fieldset": { borderColor: "#fff", borderRadius: "20px" },
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
                background: "#6c757d",
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
                  "& input": { padding: "8px", color: "#fff" },
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
          style={{ marginBottom: "20px", background: "#fd3550" }}
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
                <Typography variant="h6" component="div">
                  Navbar
                </Typography>
                <Box
                  sx={{
                    marginLeft: "10px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    About
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Services
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      minWidth: isTablet ? "55px" : "",
                      fontSize: isTablet ? "12px" : "",
                    }}
                  >
                    Contact
                  </Button>
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
                      prefix={<LockIcon style={{ marginTop: "-4px" }} />}
                      style={{
                        padding: "7px 20px",
                        marginBottom: "10px",
                        background: "#fff",
                        color: "#000",
                        minWidth: isTablet ? "80px" : "64px",
                        marginTop: isTablet ? "-5px" : "",
                      }}
                      name="Login"
                    ></ButtonComponent>
                    <ButtonComponent
                      variant="contained"
                      type="submit"
                      size="small"
                      prefix={<PersonIcon style={{ marginTop: "-4px" }} />}
                      style={{
                        padding: "7px 20px",
                        marginBottom: "10px",
                        background: "#008cff",
                        marginLeft: "10px",
                        minWidth: isTablet ? "115px" : "64px",
                        marginTop: isTablet ? "-5px" : "",
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
                background: "#fd3550",
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
