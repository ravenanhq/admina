import React from "react";
import { Button } from "@mui/material";
import Papa from "papaparse";

const ImportElement = ({ onImport }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target.result;

        Papa.parse(result, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (parsedData) => {
            const dataWithIds = parsedData.data.map((row, index) => ({
              sno: index + 1,
              ...row,
            }));
            onImport(dataWithIds);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error.message);
          },
        });
      };

      reader.readAsText(file);
    }
  };

  return (
    <label>
      <Button
        variant="contained"
        component="span"
        style={{
          borderRadius: "10px",
        }}
      >
        Import Data
      </Button>
      <input
        type="file"
        accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </label>
  );
};

export default ImportElement;
