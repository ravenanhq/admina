"use client";
import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Box,
  IconButton,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";
import NotificationButton from "../Notification/Notification";
import ProfileMenu from "../Profile/ProfileMenu";
import CloseIcon from "@mui/icons-material/Close";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  borderBottom: "1px solid #ccc",
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathName = usePathname();
  const showHeader = !["/login", "/signup", "/forgot-password"].includes(
    pathName
  );

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isMobile = useMediaQuery("(max-width:1023px)");

  return (
    <>
      {showHeader && (
        <AppBar
          position="fixed"
          open={sidebarOpen}
          sx={{ background: "rgba(255, 255, 255, 1)", zIndex: "1000" }}
        >
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  style={{ backgroundColor: "black" }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : null}

            {/* Box for the search input with icon, aligned to the left */}
            {isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  left: "10px",
                  position: "relative",
                  border: "none",
                }}
              >
                {!searchOpen && (
                  <IconButton onClick={toggleSearch}>
                    <SearchIcon
                      sx={{
                        color: "rgba(0,0,0,.5)",
                        transition: "transform 0.3s",
                      }}
                      style={{ transform: open ? "scale(0)" : "scale(1)" }}
                    />
                  </IconButton>
                )}
                {searchOpen && (
                  <TextField
                    autoFocus={open}
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "rgba(0,0,0,.5)" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          {searchOpen && (
                            <IconButton onClick={handleClose}>
                              <CloseIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                      style: {
                        borderRadius: "20px",
                        backgroundColor: "#FFF",
                        transition: "width 0.3s",
                      },
                    }}
                    sx={{
                      width: searchOpen ? "80vw" : 0,
                      marginLeft: 1,
                      overflow: "hidden",
                      transition: "width 0.3s",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Ensures no border is shown
                        },
                      },
                    }}
                    onBlur={() => setSearchOpen(false)} // Close the text box on blur
                  />
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  left: "235px",
                  position: "relative",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Ctrl + K"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          sx={{
                            color: "rgba(0,0,0,.5)",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </InputAdornment>
                    ),
                    style: { borderRadius: "8px", backgroundColor: "#fff" },
                  }}
                  inputProps={{
                    style: { padding: "6px 0", fontSize: "14px" }, // Reducing padding and font size
                  }}
                  sx={{ width: 200, marginLeft: 1 }}
                />
              </Box>
            )}

            {/* Box for the rest of the icons, aligned to the right */}
            {!searchOpen && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <NotificationButton />

                <IconButton color="inherit" sx={{ color: "rgba(0,0,0,.5)" }}>
                  <Badge badgeContent={2} color="error">
                    <MailOutlineIcon />
                  </Badge>
                </IconButton>

                <IconButton color="inherit" sx={{ color: "rgba(0,0,0,.5)" }}>
                  <SettingsOutlinedIcon />
                </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
