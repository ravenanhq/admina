import React, { useEffect, useState, useCallback } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Link } from "@mui/material";
import menuItems from "./menuItems";

interface SidebarMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathName: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  open,
  setOpen,
  pathName,
}) => {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );

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

  const handleMenuClick = useCallback(
    (label: string) => {
      setOpenSubMenus((prevOpenSubMenus) => ({
        ...prevOpenSubMenus,
        [label]: !prevOpenSubMenus[label],
      }));
      setOpen(true);
    },
    [setOpen]
  );

  const handleSubMenuItemClick = useCallback((label: string) => {
    console.log(`Clicked on ${label}`);
  }, []);

  const renderSubMenu = (submenu: any[], parentLabel: string) => (
    <Collapse in={openSubMenus[parentLabel]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {submenu.map((subMenuItem) => (
          <Link
            key={subMenuItem.label}
            href={subMenuItem.route}
            underline="none"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                background: subMenuItem.route === pathName ? "#f4f4f5" : "",
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
                <RadioButtonUncheckedIcon style={{ fontSize: "14px" }} />
              </ListItemIcon>
              <ListItemText primary={subMenuItem.label} />
            </ListItemButton>
          </Link>
        ))}
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
      {menuItems.map((menuItem) => (
        <div key={menuItem.label} style={{ display: "block" }}>
          <Link
            href={menuItem.route || "#"}
            underline="none"
            className={
              menuItem.route === pathName ||
              (menuItem.submenu &&
                menuItem.submenu.some((submenu) => submenu.route === pathName))
                ? "activeMenu"
                : "sideMenuLink"
            }
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
                }
              }}
              className="parentMenu"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: menuItem.route === pathName ? "#fff" : "",
                }}
              >
                {menuItem.route === pathName ? <menuItem.activeIcon /> : <menuItem.icon />}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.label}
                sx={{ opacity: open ? 1 : 0, fontSize: "12px" }}
              />
              {menuItem.submenu && (
                <ListItemIcon
                  sx={{ minWidth: 0, ml: "auto", justifyContent: "center" }}
                >
                  {openSubMenus[menuItem.label] ? (
                    <ExpandLess sx={{ display: !open ? "none" : "visible" }} />
                  ) : (
                    <ExpandMore sx={{ display: !open ? "none" : "visible" }} />
                  )}
                </ListItemIcon>
              )}
            </ListItemButton>
          </Link>
          {menuItem.submenu && renderSubMenu(menuItem.submenu, menuItem.label)}
        </div>
      ))}
    </List>
  );
};

export default SidebarMenu;
