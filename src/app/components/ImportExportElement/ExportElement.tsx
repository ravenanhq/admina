import React from "react";
import Papa from "papaparse";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const ExportElement = ({ dataToExport, onExportSuccess }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const exportData = () => {
    const csvData = Papa.unparse(dataToExport, {
      header: true,
    });

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.csv";
    link.click();
    onExportSuccess("Data exported successfully!");
  };

  return (
    <ButtonComponent
      variant="contained"
      onClick={exportData}
      style={{
        margin: isMobile ? "15px 0 0 0" : "0 0 0 8px",
        textTransform: "capitalize",
        background: "#ed6c02",
        padding: "5px 20px",
      }}
      name="Export Data"
    ></ButtonComponent>
  );
};

export default ExportElement;
