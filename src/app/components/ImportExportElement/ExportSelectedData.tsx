import React from "react";
import Papa from "papaparse";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const ExportSelectedData = ({
  dataToExport,
  selectedRows,
  onExportSuccess,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery("(max-width:800px)");

  const exportSelectedData = () => {
    if (selectedRows && selectedRows.length > 0) {
      const selectedData = dataToExport.filter((row) =>
        selectedRows.includes(row.sno)
      );

      if (selectedData.length > 0) {
        const csvData = Papa.unparse(selectedData, {
          header: true,
        });

        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "exported_data_selected.csv";
        link.click();
        onExportSuccess("Data exported successfully!");
      } else {
        console.warn("No matching rows found for selected IDs.");
      }
    } else {
      console.warn("No rows selected to export.");
    }
  };

  return (
    <ButtonComponent
      variant="contained"
      onClick={exportSelectedData}
      style={{
        margin: isMobile ? "15px 0 0 4px" : isTab ? "6px 0 0 8px" : "0 0 0 8px",
        textTransform: "capitalize",
        background: "#ed6c02",
        padding: "5px 15px",
      }}
      name="Export Selected Data"
    ></ButtonComponent>
  );
};

export default ExportSelectedData;
