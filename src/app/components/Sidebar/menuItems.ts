import Dashboard from "../../../Icons/dashboard.svg";
import Components from "../../../Icons/Components.svg";
import DragAndDrop from "../../../Icons/drag-and-drop.svg";

const menuItems = [
  { label: "Dashboard", route: "/admin", icon: Dashboard },
  {
    label: "Components",
    icon: Components,
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
  { label: "Drag and Drop", route: "/drag-and-drop", icon: DragAndDrop },
];

export default menuItems;
