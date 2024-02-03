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
import { Link, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import TableIcon from "@mui/icons-material/TableChart";
import ParkIcon from "@mui/icons-material/Park";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import  LoginIcon from "@mui/icons-material/Login";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { usePathname } from "next/navigation";


const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar: React.FC = () => {
  const pathName = usePathname();
  const showHeader = ![
    "/signin"
  ].includes(pathName);

  const { handleDrawerOpen, handleDrawerClose, open } = useNavbarContext();
  const menuItems = [
    { label: "Dashboard", route: "/admin" },
    { label: "Forms", route: "/form" },
    { label: "Tables", route: "/table" },
    { label: "UI Elements", route: "/uielements" },
    { label: "Charts", route: "/chart" },
    { label: "Cards", route: "/card" },
    { label: "Spinners", route: "/loader" },
    { label: "Breadcrumbs", route: "/breadcrumbs" },
    { label: "Search", route: "/search" },
    { label: "Signin" , route: "/signin"},
    { label: "Footers", route: "/footer" },
    {
      label: "Ecommerce",
      submenu: [
        { label: "Products", route: "/ecommerce/products" },
        { label: "Product Details", route: "/ecommerce/product-details" },
        { label: "Add New Product", route: "/ecommerce/add-new-product" },
        { label: "Orders", route: "/ecommerce/order" },
        { label: "Product List", route: "/ecommerce/product-list" },
      ],
    },
    { label: "Import/Export", route: "/import-export-element" }
  ];
  const isMobile = useMediaQuery("(max-width:1023px)");
  const [hover, setHover] = React.useState(false);
  const [showEcommerceSubMenu, setShowEcommerceSubMenu] = React.useState(false);

  const handleMouseEnter = () => {
    if (!open && !isMobile) {
      handleDrawerOpen();
    }
    setHover(true);
  };

  const handleMouseLeave = () => {
    if (open && !isMobile) {
      handleDrawerClose();
    }
    setHover(false);
  };

  const handleEcommerceClick = () => {
    console.log("true")
    setShowEcommerceSubMenu(!showEcommerceSubMenu);
  };

  const handleSubMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <>
      {!isMobile  && showHeader  ? (
        <Drawer
          variant="permanent"
          open={open || hover}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <List
            sx={{
              paddingTop: "0px",
            }}
          >
            <DrawerHeader>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faA}
                  size="lg"
                  style={{ marginLeft: "15px", paddingTop: "0px" }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  opacity: open ? 1 : 0,
                  marginLeft: "1px",
                }}
              >
                Admina
              </ListItemText>
            </DrawerHeader>
            <Divider />
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
                    onClick={menuItem.label === "Ecommerce" ? handleEcommerceClick : undefined}
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
                      {menuItem.label === "Cards" ? <CreditCardIcon /> : ""}
                      {menuItem.label === "Spinners" ? <AutorenewIcon /> : ""}
                      {menuItem.label === "Breadcrumbs" ? (
                        <KeyboardDoubleArrowRightIcon />
                      ) : (
                        ""
                      )}
                      {menuItem.label === "Search" ? <SearchIcon /> : ""}
                      {menuItem.label === "Signin" ? <LoginIcon /> : ""}
                      {menuItem.label === "Footers" ? <VerticalAlignBottomIcon /> : ""}
                      {menuItem.label === "Ecommerce" ? <ShoppingCartCheckoutIcon /> : ""}
                      {menuItem.label === "Import/Export" ? <ImportExportIcon /> : ""}
                    </ListItemIcon>
                    <ListItemText
                      primary={menuItem.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        ml: "auto",
                        justifyContent: "center",
                      }}
                    >
                      {menuItem.label === "Ecommerce" ? (
                        showEcommerceSubMenu ? <ExpandLess /> : <ExpandMore />
                      ) : null}
                    </ListItemIcon>
                  </ListItemButton>
                </Link>
               {/* Nested List for Ecommerce Submenu */}
              {menuItem.label === "Ecommerce" && (
                <Collapse in={showEcommerceSubMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menuItem.submenu.map((subMenuItem) => (
                      <ListItem
                        key={subMenuItem.label}
                        disablePadding
                        sx={{ display: "block", paddingLeft: 4 }}
                      >
                        <Link
                          href={subMenuItem.route}
                          style={{ textDecoration: "none", color: "inherit" }}
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
                              }}
                            >
                              {subMenuItem.label === "Products" ? <KeyboardArrowRightIcon style={{fontSize:"14px"}} /> : "" }
                              {subMenuItem.label === "Product Details" ? <KeyboardArrowRightIcon style={{fontSize:"14px"}}/> : ""}
                              {subMenuItem.label === "Add New Product" ? <KeyboardArrowRightIcon style={{fontSize:"14px"}}/> : ""}
                              {subMenuItem.label === "Orders" ? <KeyboardArrowRightIcon style={{fontSize:"14px"}} /> : ""}
                              {subMenuItem.label === "Product List" ? <KeyboardArrowRightIcon style={{fontSize:"14px"}} /> : ""}
                            </ListItemIcon>
                            <ListItemText primary={subMenuItem.label}  />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : null}
    </>
  );
};

export default Sidebar;
