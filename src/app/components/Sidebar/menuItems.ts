import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
  { label: "Dashboard", route: "/admin", icon: DashboardIcon },
  {
    label: "Components",
    icon: GridViewOutlinedIcon,
    submenu: [
      { label: "Forms", route: "/form" },
      { label: "Charts", route: "/chart" },
      { label: "Breadcrumbs", route: "/breadcrumbs" },
      { label: "Search", route: "/search" },
      { label: "Footers", route: "/footer" },
      { label: "Tables", route: "/table" },
      { label: "Buttons", route: "/uielements/buttons" },
      { label: "Alerts", route: "/uielements/alerts" },
      { label: "Tabs", route: "/uielements/tabs" },
      { label: "Modals", route: "/uielements/modals" },
      { label: "General Elements", route: "/uielements/general-elements" },
      { label: "Avatar", route: "/uielements/avatar" },
      { label: "Carousel", route: "/uielements/carousel" },
      { label: "Pagination", route: "/uielements/pagination" },
      { label: "Accordian", route: "/uielements/accordion" },
      { label: "404 Page", route: "/uielements/error-404" },
    ],
  },
  { label: "Drag and Drop", route: "/drag-and-drop", icon: DragIndicatorIcon },
];

export default menuItems;
