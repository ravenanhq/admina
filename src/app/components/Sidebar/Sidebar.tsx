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
import { Link, Typography, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { usePathname } from "next/navigation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const pathName = usePathname();
  const showHeader = !["/login", "/signup", "/forgot-password"].includes(
    pathName
  );

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
    {
      label: "Kanban Boards",
      submenu: [
        { label: "Simple", route: "/kanban-board/simple" },
        { label: "With Collapse", route: "/kanban-board/with-collapse" },
        { label: "With Swimlane", route: "/kanban-board/with-swimlane" },
      ],
    },
  ];

  const isMobile = useMediaQuery("(max-width:1023px)");
  const [showEcommerceSubMenu, setShowEcommerceSubMenu] = React.useState(false);
  const [showComponentsSubMenu, setShowComponentsSubMenu] =
    React.useState(false);
  const [showKanbanBoardSubMenu, setShowKanbanBoardSubMenu] =
    React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleEcommerceClick = () => {
    setShowEcommerceSubMenu(!showEcommerceSubMenu);
    setShowComponentsSubMenu(false);
    setShowKanbanBoardSubMenu(false);
    setOpen(true);
  };

  const handleSubMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  const handleComponentsClick = () => {
    setShowComponentsSubMenu(!showComponentsSubMenu);
    setShowEcommerceSubMenu(false);
    setShowKanbanBoardSubMenu(false);
    setOpen(true);
  };

  const handleKanbanBoardClick = () => {
    setShowKanbanBoardSubMenu(!showKanbanBoardSubMenu);
    setShowEcommerceSubMenu(false);
    setShowComponentsSubMenu(false);
  };

  const handleComponentsSubMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  const handleMenuHide = () => {
    setOpen(false);
    setShowComponentsSubMenu(false);
    setShowEcommerceSubMenu(false);
  };

  const handleMenuOpen = () => {
    setOpen(true);
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

    const isKanbanBoardSubMenuOpen = menuItems
      .find((item) => item.label === "Kanban Boards")
      ?.submenu?.some((submenu) => submenu.route === pathName);

    setShowKanbanBoardSubMenu(!!isKanbanBoardSubMenuOpen);
  }, [pathName]);

  return (
    <>
      {!isMobile && showHeader ? (
        <Drawer
          variant="permanent"
          open={open}
          onClose={handleDrawerToggle}
          className="sidebarDrawer"
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
                style={{
                  fontSize: "24px",
                  marginLeft: "15px",
                  paddingTop: "0px",
                  color: "#007bff",
                  marginTop: "-3px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "1px",
              }}
              className="headerLogo"
            >
              Admina
            </ListItemText>
            <div style={{ cursor: "pointer" }}>
              {open ? (
                <KeyboardArrowLeftIcon
                  onClick={handleMenuHide}
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "25px",
                    position: "relative",
                    right: "-18px",
                    fontSize: "20px",
                  }}
                />
              ) : (
                <KeyboardArrowRightIcon
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "25px",
                    position: "relative",
                    left: "14px",
                    fontSize: "20px",
                  }}
                  onClick={handleMenuOpen}
                />
              )}
            </div>
          </DrawerHeader>
          <Divider />
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
                  style={{ textDecoration: "none" }}
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
                      } else if (menuItem.label === "Kanban Boards") {
                        handleKanbanBoardClick();
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
                      {menuItem.label === "CRUD Component" ? (
                        <ListAltIcon />
                      ) : (
                        ""
                      )}
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
                      {menuItem.label === "Calendar" ? (
                        <CalendarMonthIcon />
                      ) : (
                        ""
                      )}
                      {menuItem.label === "Kanban Boards" ? (
                        <ViewKanbanIcon />
                      ) : (
                        ""
                      )}
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
                        showEcommerceSubMenu ? (
                          <ExpandLess
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
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
                          <ExpandLess
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
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
                      {menuItem.label === "Kanban Boards" ? (
                        showKanbanBoardSubMenu ? (
                          <ExpandLess
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{
                              display: !open ? "none" : "visiable",
                            }}
                          />
                        )
                      ) : null}
                    </ListItemIcon>
                  </ListItemButton>
                </Link>

                {menuItem.label === "Components" && (
                  <Collapse
                    in={showComponentsSubMenu}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menuItem.submenu.map((subMenuItem) => (
                        <React.Fragment key={subMenuItem.label}>
                          <ListItem
                            key={subMenuItem.label}
                            disablePadding
                            className={
                              subMenuItem.route === pathName ? "activemenu" : ""
                            }
                            sx={{
                              display: "block",
                              background:
                                subMenuItem.route === pathName ? "#f4f4f5" : "",
                            }}
                          >
                            <Link
                              href={subMenuItem.route}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
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
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {/* Your icon rendering code */}
                                  {subMenuItem.label === "Forms" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Charts" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Cards" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Spinners" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Breadcrumbs" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Search" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Signin" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Footers" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Tables" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Buttons" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Alerts" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Tabs" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Modals" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Slider" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Timeline" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Navbar" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "General Elements" ? (
                                    <RadioButtonUncheckedIcon
                                      style={{ fontSize: "14px" }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {subMenuItem.label === "Date Picker" ? (
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
                            <ListItem sx={{ textAlign: "center" }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "18px",
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

                {menuItem.label === "Ecommerce" && (
                  <Collapse
                    in={showEcommerceSubMenu}
                    timeout="auto"
                    unmountOnExit
                  >
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
                                  marginLeft: "5px",
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

                {/* Nested List for Kanban Board Submenu */}
                {menuItem.label === "Kanban Boards" && (
                  <Collapse
                    in={showKanbanBoardSubMenu}
                    timeout="auto"
                    unmountOnExit
                  >
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
                                {subMenuItem.label === "Simple" ? (
                                  <RadioButtonUncheckedIcon
                                    style={{ fontSize: "14px" }}
                                  />
                                ) : (
                                  ""
                                )}
                                {subMenuItem.label === "With Collapse" ? (
                                  <RadioButtonUncheckedIcon
                                    style={{ fontSize: "14px" }}
                                  />
                                ) : (
                                  ""
                                )}
                                {subMenuItem.label === "With Swimlane" ? (
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
        </Drawer>
      ) : null}
    </>
  );
};

export default Sidebar;
