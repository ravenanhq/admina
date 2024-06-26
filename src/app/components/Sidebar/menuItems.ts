import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

const menuItems = [
  { label: "Dashboard", route: "/admin", icon: DashboardIcon },
  {
    label: "Components",
    icon: GridViewOutlinedIcon,
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
      { label: "ScrollBar", route: "/uielements/scrollBar" },
      { label: "Carousel", route: "/uielements/carousel" },
      { label: "Pagination", route: "/uielements/pagination" },
    ],
  },
  {
    label: "Ecommerce",
    icon: ShoppingCartCheckoutIcon,
    submenu: [
      { label: "Products", route: "/ecommerce/products" },
      { label: "Product Details", route: "/ecommerce/product-details" },
      { label: "Add New Product", route: "/ecommerce/add-new-product" },
      { label: "Orders", route: "/ecommerce/order" },
      { label: "Product List", route: "/ecommerce/product-list" },
      { label: "Wishlist", route: "/ecommerce/wishlist" },
    ],
  },
  {
    label: "Import/Export",
    route: "/import-export-element",
    icon: ImportExportIcon,
  },
  { label: "CRUD Component", route: "/crud/list", icon: ListAltIcon },
  {
    label: "Subscription Plan",
    route: "/subscription-plan",
    icon: ThumbUpAltIcon,
  },
  { label: "Drag and Drop", route: "/drag-and-drop", icon: DragIndicatorIcon },
  { label: "Calendar", route: "/calendar", icon: CalendarMonthIcon },
  {
    label: "Kanban Boards",
    icon: ViewKanbanIcon,
    submenu: [
      { label: "Simple", route: "/kanban-board/simple" },
      { label: "With Collapse", route: "/kanban-board/with-collapse" },
      { label: "With Swimlane", route: "/kanban-board/with-swimlane" },
    ],
  },
];

export default menuItems;
