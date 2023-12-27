"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavbarContext } from "@/contexts/NavbarContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import TableIcon from "@mui/icons-material/TableChart";
import ParkIcon from "@mui/icons-material/Park";
import BarChartIcon from '@mui/icons-material/BarChart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Link, Typography, useMediaQuery } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar: React.FC = () => {
  const { open } = useNavbarContext();
  const menuItems = [
    { label: "Dashboard", route: "/admin" },
    { label: "Forms", route: "/form" },
    { label: "Tables", route: "/table" },
    { label: "UI Elements", route: "/uielements" },
    { label: "Charts", route: "/chart" },
    { label: "Spinners", route: "/loader" },
  ];
  const isMobile = useMediaQuery("(max-width:1023px)");
  return (
    <>
      {!isMobile ? (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h6">Admina</Typography>
          </DrawerHeader>
          <Divider />
          <List>
            {menuItems.map(
              (menuItem) => (
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
                      </ListItemIcon>
                      <ListItemText
                        primary={menuItem.label}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
      ) : null}
    </>
  );
};

export default Sidebar;
