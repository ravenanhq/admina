"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { SwipeableDrawer, useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";
import DrawerHeader from "./DrawerHeader";
import SidebarMenu from "./SidebarMenu";
import menuItems from "./menuItems";
import { useEffect, useState } from "react";

const drawerWidth = 310;

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width:1023px)");
  const [openSubMenus, setOpenSubMenus] = useState<{
    [key: string]: boolean;
  }>({});

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    zIndex: theme.zIndex.drawer + 1,
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: isMobile && !open ? "0px" : `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: isMobile && !open ? "0px" : `calc(${theme.spacing(8)} + 1px)`,
    },
    zIndex: theme.zIndex.drawer + 1,
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

  const showHeader = !["/login", "/signup", "/forgot-password"].includes(
    pathName
  );

  const handleDrawerToggle = () => {
    setOpen(false);
  };

  const handleDraweropenToggle = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      const newOpenSubMenus: { [key: string]: boolean } = {};
      menuItems.forEach((item) => {
        if (item.submenu) {
          newOpenSubMenus[item.label] = item.submenu.some(
            (submenu) => submenu.route === pathName
          );
        }
      });
      setOpenSubMenus(newOpenSubMenus);
    } else {
      setOpenSubMenus({});
    }
  }, [open, pathName]);

  return (
    <>
      {showHeader ? (
        isMobile ? (
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            BackdropProps={{ invisible: true }}
            onOpen={handleDraweropenToggle}
          >
            <Drawer
              variant="permanent"
              open={open}
              onClose={() => setOpen(!open)}
              className="sidebarDrawer"
              role="presentation"
            >
              {!isMobile || open ? (
                <DrawerHeader open={open} setOpen={setOpen} />
              ) : (
                ""
              )}
              <Divider />
              <SidebarMenu
                open={open}
                setOpen={setOpen}
                pathName={pathName}
                openSubMenus={openSubMenus}
                setOpenSubMenus={setOpenSubMenus}
              />
            </Drawer>
          </SwipeableDrawer>
        ) : (
          <Drawer
            variant="permanent"
            open={open}
            onClose={() => setOpen(!open)}
            className="sidebarDrawer"
            role="presentation"
          >
            {!isMobile || open ? (
              <DrawerHeader open={open} setOpen={setOpen} />
            ) : (
              ""
            )}
            <Divider />
            <SidebarMenu
              open={open}
              setOpen={setOpen}
              pathName={pathName}
              openSubMenus={openSubMenus}
              setOpenSubMenus={setOpenSubMenus}
            />
          </Drawer>
        )
      ) : null}
    </>
  );
};

export default Sidebar;
