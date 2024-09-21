"use client";
import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import { usePathname } from "next/navigation";
import NotificationButton from "../Notification/Notification";
import ProfileMenu from "../Profile/ProfileMenu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VectorIcon from "../../../Icons/vector.svg";
import MenuListIcon from "../../../Icons/menu-list-icon.svg";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClose = () => {
    setQuery("");
    setSearchOpen(false);
  };

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
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuListIcon />
                </IconButton>
              </>
            ) : null}

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
                    <VectorIcon
                      sx={{
                        color: "#565656",
                        transition: "transform 0.3s",
                      }}
                      style={{
                        transform: sidebarOpen ? "scale(0)" : "scale(1)",
                      }}
                    />
                  </IconButton>
                )}
                {searchOpen && (
                  <TextField
                    autoFocus={sidebarOpen}
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VectorIcon sx={{ color: "#565656" }} />
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
                    inputProps={{
                      style: {
                        padding: "9px 2",
                        fontSize: "12px",
                        color: "#565656",
                      },
                    }}
                    sx={{
                      width: searchOpen ? "80vw" : 0,
                      marginLeft: 1,
                      overflow: "hidden",
                      transition: "width 0.3s",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                      },
                    }}
                    onBlur={handleClose}
                  />
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  left: "297px",
                  position: "relative",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Search"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VectorIcon
                          sx={{
                            color: "#565656",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      </InputAdornment>
                    ),
                    style: { backgroundColor: "#f5f5f5" },
                  }}
                  inputProps={{
                    style: {
                      padding: "9px 2px",
                      fontSize: "12px",
                      color: "#565656",
                    },
                  }}
                  sx={{
                    width: 259,
                    height: 30,
                    ml: "60px",
                    borderRadius: "5px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>
            )}

            {!searchOpen && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ProfileMenu />
              </Box>
            )}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
