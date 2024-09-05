import Dashboard from "../../Icons/dashboard.svg";
import DashboardActive from "../../Icons/dashboard-active.svg";
import Components from "../../Icons/Components.svg";
import DragAndDrop from "../../Icons/drag-and-drop.svg";
import Chart from "../../Icons/chart.svg";
import ChartActive from "../../Icons/chart-active.svg";
import DaraAndDropActive from "../../Icons/drag-and-drop-active.svg";

const iconMap = {
  Dashboard,
  DashboardActive,
  Components,
  DragAndDrop,
  Chart,
  ChartActive,
  DaraAndDropActive
};

export const getIcon = (iconName: string | number) => iconMap[iconName] || null;
