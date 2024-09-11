import { getIcon } from "@/app/utils/Icons";

const menuItems = [
  {
    label: "Dashboard",
    route: "/admin",
    icon: getIcon("Dashboard"),
    activeIcon: getIcon("DashboardActive"),
  },
  {
    label: "Components",
    icon: getIcon("Components"),
    activeIcon: getIcon("ChartActive"),
    submenu: [
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
  {
    label: "Charts",
    route: "/chart",
    icon: getIcon("Chart"),
    activeIcon: getIcon("ChartActive"),
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
    activeIcon: getIcon("DaraAndDropActive"),
  },
];

export default menuItems;
