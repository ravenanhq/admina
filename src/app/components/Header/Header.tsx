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

            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              <NotificationButton />

              <IconButton color="inherit" sx={{ color: "rgba(0,0,0,.5)" }}>
                <Badge badgeContent={2} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit" sx={{ color: "rgba(0,0,0,.5)" }}>
                <SettingsIcon />
              </IconButton>

              <IconButton color="inherit" sx={{ color: "rgba(0,0,0,.5)" }}>
                <SearchIcon />
              </IconButton>

              <ProfileMenu />
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
