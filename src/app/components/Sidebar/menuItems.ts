import { getIcon } from "@/app/utils/Icons";

const menuItems = [
  {
    label: "Dashboard",
    route: "/admin",
    icon: getIcon("Dashboard"),
    activeIcon: getIcon("DashboardActive"),
  },
  {
    label: "UI Elements",
    icon: getIcon("Components"),
    activeIcon: getIcon("ChartActive"),
    submenu: [
      { label: "Breadcrumbs", route: "/uielements/breadcrumbs" },
      { label: "Search", route: "/uielements/search" },
      { label: "Footers", route: "/uielements/footer" },
      { label: "Tables", route: "/table" },
      { label: "Buttons", route: "/uielements/buttons" },
      { label: "Alerts", route: "/uielements/alerts" },
      { label: "Tabs", route: "/uielements/tabs" },
      { label: "Navbar", route: "/uielements/navbar" },
      { label: "Modals", route: "/uielements/modals" },
      { label: "General Elements", route: "/uielements/general-elements" },
      { label: "Avatar", route: "/uielements/avatar" },
      { label: "Carousel", route: "/uielements/carousel" },
      { label: "Pagination", route: "/uielements/pagination" },
      { label: "Accordions", route: "/uielements/accordion" },
    ],
  },
  {
    label: "Pages",
    icon: getIcon("Page"),
    activeIcon: getIcon("PageActive"),
    submenu: [
      { label: "404 Page", route: "/pages/404-page" },
      { label: "Maintenance Page", route: "/pages/maintenance" },
      { label: "Search Result Page", route: "/pages/searchresult" },
    ],
  },
  {
    label: "Charts",
    route: "/chart",
    icon: getIcon("Chart"),
    activeIcon: getIcon("ChartActive"),
  },
  { label: "Tables", 
    route: "/tables", 
    icon: getIcon("Tables"),
    activeIcon: getIcon("TablesActive") 
  },
  {
    label: "Forms",
    route: "/form",
    icon: getIcon("Form"),
    activeIcon: getIcon("FormActive"),
  },
  {
    label: "Drag and Drop",
    route: "/drag-and-drop",
    icon: getIcon("DragAndDrop"),
    activeIcon: getIcon("DragAndDropActive"),
  },
];

export default menuItems;
