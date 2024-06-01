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
import { Divider, Link, Typography, useMediaQuery } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
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
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Header: React.FC = () => {
  const pathName = usePathname();
  const showHeader = !["/login", "/signup", "/forgot-password"].includes(
    pathName
  );

  const { handleDrawerOpen, open } = useNavbarContext();
  const { handleDrawerClose } = useNavbarContext();
  const [state, setState] = React.useState({
    left: false,
  });

  const [showEcommerceSubMenu, setShowEcommerceSubMenu] = React.useState(false);
  const [showComponentsSubMenu, setShowComponentsSubMenu] =
    React.useState(false);

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

  const handleEcommerceClick = () => {
    setShowEcommerceSubMenu(!showEcommerceSubMenu);
    setShowComponentsSubMenu(false);
  };

  const handleSubMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  const handleComponentsClick = () => {
    setShowComponentsSubMenu(!showComponentsSubMenu);
    setShowEcommerceSubMenu(false);
  };

  const handleComponentsSubMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  const menuItems = [
    { label: "Dashboard", route: "/admin" },
    {
      label: "Components",
      submenu: [
        { label: "Forms", route: "/form" },
        { label: "Charts", route: "/chart" },
        { label: "Cards", route: "/card" },
        { label: "Spinners", route: "/loader" },
        { label: "Breadcrumbs", route: "/breadcrumbs" },
        { label: "Search", route: "/search" },
        { label: "Signin", route: "/signin" },
        { label: "Footers", route: "/footer" },
        { label: "Tables", route: "/table" },
        { label: "Buttons", route: "/uielements/buttons" },
        { label: "Alerts", route: "/uielements/alerts" },
        { label: "Tabs", route: "/uielements/tabs" },
        { label: "Modals", route: "/uielements/modals" },
        { label: "Slider", route: "/uielements/slider" },
        { label: "Timeline", route: "/uielements/timeline" },
        { label: "Navbar", route: "/uielements/navbar" },
        { label: "General Elements", route: "/uielements/general-elements" },
        { label: "Date Picker", route: "/uielements/date-picker" },
        { label: "Avatar", route: "/uielements/avatar" },
      ],
    },

    {
      label: "Ecommerce",
      submenu: [
        { label: "Products", route: "/ecommerce/products" },
        { label: "Product Details", route: "/ecommerce/product-details" },
        { label: "Add New Product", route: "/ecommerce/add-new-product" },
        { label: "Orders", route: "/ecommerce/order" },
        { label: "Product List", route: "/ecommerce/product-list" },
        { label: "Wishlist", route: "/ecommerce/wishlist" },
      ],
    },
    { label: "Import/Export", route: "/import-export-element" },
    { label: "CRUD Component", route: "/crud/list" },
    { label: "Subscription Plan", route: "/subscription-plan" },
    { label: "Drag and Drop", route: "/drag-and-drop" },
    { label: "Calendar", route: "/calendar" },
    { label: "Kanban Board", route: "/kanban-board" },
    { label: "Advance Kanban", route: "/advanced-kanban-board" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Add your signout logic here
  const handleSignout = async () => {
    await signOut();
    handleCloseMenu();
  };

  useEffect(() => {
    const isEcommerceSubMenuOpen = menuItems
      .find((item) => item.label === "Ecommerce")
      ?.submenu?.some((submenu) => submenu.route === pathName);

    setShowEcommerceSubMenu(!!isEcommerceSubMenuOpen);

    const isComponentsSubMenuOpen = menuItems
      .find((item) => item.label === "Components")
      ?.submenu?.some((submenu) => submenu.route === pathName);

    setShowComponentsSubMenu(!!isComponentsSubMenuOpen);
  }, [pathName]);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
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
              className={
                menuItem.route === pathName ||
                (menuItem.submenu &&
                  menuItem.submenu.some(
                    (submenu) => submenu.route === pathName
                  ))
                  ? "activeMenu"
                  : "sideMenuLink"
              }
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  if (menuItem.label === "Ecommerce") {
                    handleEcommerceClick();
                  } else if (menuItem.label === "Components") {
                    handleComponentsClick();
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuItem.label === "Dashboard" ? <DashboardIcon /> : ""}
                  {menuItem.label === "Components" ? (
                    <GridViewOutlinedIcon />
                  ) : (
                    ""
                  )}
                  {menuItem.label === "Ecommerce" ? (
                    <ShoppingCartCheckoutIcon />
                  ) : (
                    ""
                  )}
                  {menuItem.label === "Import/Export" ? (
                    <ImportExportIcon />
                  ) : (
                    ""
                  )}
                  {menuItem.label === "CRUD Component" ? <ListAltIcon /> : ""}
                  {menuItem.label === "Subscription Plan" ? (
                    <ThumbUpAltIcon />
                  ) : (
                    ""
                  )}
                  {menuItem.label === "Drag and Drop" ? (
                    <DragIndicatorIcon />
                  ) : (
                    ""
                  )}
                  {menuItem.label === "Calendar" ? <CalendarMonthIcon /> : ""}
                  {menuItem.label === "Kanban Board" ? <ViewKanbanIcon /> : ""}
                  {menuItem.label === "Advance Kanban" ? (
                    <ViewKanbanIcon />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={menuItem.label} sx={{ ml: 2 }} />
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuItem.label === "Ecommerce" ? (
                    showEcommerceSubMenu ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemIcon>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuItem.label === "Components" ? (
                    showComponentsSubMenu ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemIcon>
              </ListItemButton>
            </Link>
            {menuItem.label === "Components" && (
              <Collapse in={showComponentsSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.submenu.map((subMenuItem) => (
                    <React.Fragment key={subMenuItem.label}>
                      <ListItem
                        key={subMenuItem.label}
                        disablePadding
                        sx={{
                          display: "block",
                          background:
                            subMenuItem.route === pathName ? "#f4f4f5" : "",
                        }}
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
                            onClick={() =>
                              handleComponentsSubMenuItemClick(
                                subMenuItem.label
                              )
                            }
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                                justifyContent: "center",
                              }}
                            >
                              {/* Your icon rendering code */}
                              {subMenuItem.label === "Forms" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Charts" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Cards" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Spinners" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Breadcrumbs" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Search" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Signin" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Footers" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Tables" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Buttons" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Alerts" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Tabs" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Modals" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Slider" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Timeline" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Navbar" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "General Elements" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Date Picker" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "15px" }}
                                />
                              ) : (
                                ""
                              )}
                              {subMenuItem.label === "Avatar" ? (
                                <RadioButtonUncheckedIcon
                                  style={{ fontSize: "14px" }}
                                />
                              ) : (
                                ""
                              )}
                            </ListItemIcon>
                            <ListItemText primary={subMenuItem.label} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      {subMenuItem.label === "Tables" && (
                        <ListItem sx={{ paddingLeft: 4 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              paddingLeft: 1,
                              paddingBottom: 1,
                            }}
                          >
                            UI Elements {/* Add your desired title here */}
                          </Typography>
                        </ListItem>
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </Collapse>
            )}

            {/* Nested List for Ecommerce Submenu */}
            {menuItem.label === "Ecommerce" && (
              <Collapse in={showEcommerceSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.submenu.map((subMenuItem) => (
                    <ListItem
                      key={subMenuItem.label}
                      disablePadding
                      sx={{
                        display: "block",
                        background:
                          subMenuItem.route === pathName ? "#f4f4f5" : "",
                      }}
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
                          onClick={() =>
                            handleSubMenuItemClick(subMenuItem.label)
                          }
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {subMenuItem.label === "Products" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                            {subMenuItem.label === "Product Details" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                            {subMenuItem.label === "Add New Product" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                            {subMenuItem.label === "Orders" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                            {subMenuItem.label === "Product List" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                            {subMenuItem.label === "Wishlist" ? (
                              <RadioButtonUncheckedIcon
                                style={{ fontSize: "14px" }}
                              />
                            ) : (
                              ""
                            )}
                          </ListItemIcon>
                          <ListItemText primary={subMenuItem.label} />
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
    </Box>
  );
  const isMobile = useMediaQuery("(max-width:1023px)");
  return (
    <>
      {showHeader && (
        <AppBar
          position="fixed"
          open={open}
          sx={{ background: "rgba(255, 255, 255, 1)", zIndex: "1000" }}
        >
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  style={{ backgroundColor: "black" }}
                  onClick={toggleDrawer(true)}
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
      )}
    </>
  );
};

export default Header;
