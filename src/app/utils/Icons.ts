import Dashboard from "../../Icons/dashboard.svg";
import DashboardActive from "../../Icons/dashboard-active.svg";
import Components from "../../Icons/Components.svg";
import DragAndDrop from "../../Icons/drag-and-drop.svg";
import Chart from "../../Icons/chart.svg";
import ChartActive from "../../Icons/chart-active.svg";
import Page from "../../Icons/page.svg";
import PageActive from "../../Icons/page-active.svg";
import DragAndDropActive from "../../Icons/drag-and-drop-active.svg";
import Form from "../../Icons/form.svg";
import FormActive from "../../Icons/form-active.svg";
import Tables from "../../Icons/tables.svg";
import TablesActive from "../../Icons/tables-active.svg";

const iconMap = {
  Dashboard,
  DashboardActive,
  Components,
  DragAndDrop,
  Chart,
  ChartActive,
  Tables,
  TablesActive,
  Page,
  PageActive,
  DragAndDropActive,
  Form,
  FormActive,
};

export const getIcon = (iconName: string | number) => iconMap[iconName] || null;
