import React, { useCallback } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import menuItems from "./menuItems";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

nprogress.configure({ showSpinner: false, minimum: 0.1 });

interface SidebarMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathName: string;
  openSubMenus: any;
  setOpenSubMenus: any;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  open,
  setOpen,
  pathName,
  openSubMenus,
  setOpenSubMenus,
}) => {
  const handleMenuClick = useCallback(
    (label: string) => {
      setOpenSubMenus((prevOpenSubMenus) => {
        const newOpenSubMenus = { ...prevOpenSubMenus };
        for (const key in newOpenSubMenus) {
          if (key !== label) {
            newOpenSubMenus[key] = false;
          }
        }
        newOpenSubMenus[label] = !prevOpenSubMenus[label];
        return newOpenSubMenus;
      });
      setOpen(true);
    },
    [setOpen]
  );

  const handleSubMenuItemClick = useCallback((label: string) => {
    nprogress.start();
    setTimeout(() => {
      nprogress.done();
    }, 500);
  }, []);

  const renderSubMenu = (submenu: any[], parentLabel: string) => (
    <Collapse in={openSubMenus[parentLabel]} timeout="auto">
      <List component="div" disablePadding>
        {submenu.map((subMenuItem) => {
          const isActive = subMenuItem.route === pathName;

          return (
            <Link
              key={subMenuItem.label}
              href={subMenuItem.route}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => handleSubMenuItemClick(subMenuItem.label)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    marginLeft: "5px",
                  }}
                >
                  {isActive ? (
                    <CircleIcon
                      style={{ fontSize: "14px", color: "#007BFF" }}
                    />
                  ) : (
                    <CircleIcon
                      style={{ fontSize: "14px", color: "#D9D9D9" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={subMenuItem.label}
                  primaryTypographyProps={{
                    color: isActive ? "#007BFF" : "#565656",
                    fontSize: "14px",
                  }}
                />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Collapse>
  );

  return (
    <List
      sx={{
        paddingTop: "0px",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      {menuItems.map((menuItem) => {
        const isActive =
          menuItem.route === pathName ||
          (menuItem.submenu &&
            menuItem.submenu.some((submenu) => submenu.route === pathName));

        return (
          <div key={menuItem.label} style={{ display: "block" }}>
            <Link
              href={menuItem.route || "#"}
              className={isActive ? "activeMenu" : "sideMenuLink"}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  if (menuItem.submenu) {
                    handleMenuClick(menuItem.label);
                  } else {
                    nprogress.start();
                    setTimeout(() => {
                      nprogress.done();
                    }, 500);
                  }
                }}
                className="parentMenu"
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: isActive ? "#007BFF" : "#747474",
                  }}
                >
                  {isActive ? <menuItem.activeIcon /> : <menuItem.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={menuItem.label}
                  primaryTypographyProps={{
                    color: isActive ? "#007BFF" : "#747474",
                    fontSize: "14px",
                    display: open ? "block" : "none",
                  }}
                />
                {menuItem.submenu && (
                  <ListItemIcon
                    sx={{ minWidth: 0, ml: "auto", justifyContent: "center" }}
                  >
                    {openSubMenus[menuItem.label] ? (
                      <ExpandLess
                        sx={{ display: !open ? "none" : "visible" }}
                      />
                    ) : (
                      <ExpandMore
                        sx={{ display: !open ? "none" : "visible" }}
                      />
                    )}
                  </ListItemIcon>
                )}
              </ListItemButton>
            </Link>
            {menuItem.submenu &&
              renderSubMenu(menuItem.submenu, menuItem.label)}
          </div>
        );
      })}
    </List>
  );
};

export default SidebarMenu;
