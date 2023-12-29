"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavbarContext } from "@/contexts/NavbarContext";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, Typography, useMediaQuery } from "@mui/material";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import TableIcon from "@mui/icons-material/TableChart";
import ParkIcon from "@mui/icons-material/Park";
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutorenewIcon from '@mui/icons-material/Autorenew';

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
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC = () => {
  const { handleDrawerOpen, open } = useNavbarContext();
  const { handleDrawerClose } = useNavbarContext();
  const handleSignOut = () => {
    console.log("Sign out button clicked");
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, left: open });
      if (open) {
        handleDrawerOpen();
      } else {
        handleDrawerClose();
      }
    };
  const menuItems = [
    { label: "Dashboard", route: "/admin" },
    { label: "Forms", route: "/form" },
    { label: "Tables", route: "/table" },
    { label: "UI Elements", route: "/uielements" },
    { label: "Charts", route: "/chart" },
    { label: "Spinners", route: "/loader" },
    { label: "Search", route: "/search" },
  ];
  const list = () => (
    <Box
      sx={{ width: 250, paddingTop: "70px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((menuItem) => (
          <ListItem
            key={menuItem.label}
            disablePadding
            sx={{ display: "block" }}
          >
            <Link
              href={menuItem.route}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuItem.label === "Dashboard" ? <DashboardIcon /> : ""}
                  {menuItem.label === "Forms" ? <EditIcon /> : ""}
                  {menuItem.label === "Tables" ? <TableIcon /> : ""}
                  {menuItem.label === "UI Elements" ? <ParkIcon /> : ""}
                  {menuItem.label === "Charts" ? <BarChartIcon /> : ""}
                  {menuItem.label === "Spinners" ? <AutorenewIcon /> : ""}
                  {menuItem.label === "Search" ? <SearchIcon /> : ""}
                </ListItemIcon>
                <ListItemText
                  primary={menuItem.label}
                  sx={{ ml: 2 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const isMobile = useMediaQuery("(max-width:1023px)");
  return (
    <AppBar position="fixed" open={open} sx={{ background: 'rgba(255, 255, 255, 0.2)' }}>
      <Toolbar>
        {isMobile ? (
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : null}

        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" sx={{ color: 'rgba(0,0,0,.5)' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" sx={{ color: 'rgba(0,0,0,.5)' }}>
            <Badge badgeContent={2} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" sx={{ color: 'rgba(0,0,0,.5)' }}>
            <SettingsIcon />
          </IconButton>

          <IconButton color="inherit" sx={{ color: 'rgba(0,0,0,.5)' }}>
            <SearchIcon />
          </IconButton>

          <Typography variant="body1" sx={{ marginLeft: 2, color: 'rgba(0,0,0,.5)' }}>
            Welcome, User
          </Typography>
        </Box>

        {isMobile && state.left ? (
          <SwipeableDrawer
            anchor="left"
            open={state.left}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            BackdropProps={{ invisible: true }}
          >
            {list()}
          </SwipeableDrawer>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
