import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ExportElement from "./ExportElement";
import ImportElement from "./ImportElement";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import dataTable from "../../../data-table.json";
import ExportSelectedData from "./ExportSelectedData";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DataTable = () => {
  const [orders, setOrders] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setOrders(dataTable);
  }, []);

  const handleImport = (importedData) => {
    setOrders(importedData);
    setSuccessMessage("Data imported successfully!");
    setOpenSnackbar(true);
  };

  const handleSelectionChange = (selection) => {
    setSuccessMessage("Data exported successfully!");
    setSelectedRows(selection);
  };

  const handleExportSuccess = (message) => {
    setSuccessMessage(message);
    setOpenSnackbar(true);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
  ];

  return (
    <Card style={{ border: '0px', boxShadow: "none", padding: 0 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} style={{ textAlign: "left" }}>
          <ImportElement onImport={handleImport} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign:isMobile ? "start" : "right" }}>
          <ExportElement dataToExport={orders} onExportSuccess={handleExportSuccess}/>
          <ExportSelectedData
            dataToExport={orders}
            selectedRows={selectedRows}
            onExportSuccess={handleExportSuccess}
          />
        </Grid>
      </Grid>

      <CardContent style={{ padding: "16px 0" }}>
        <DataGrid
          rows={orders}
          columns={columns}
          getRowId={(row) => row.sno}
          checkboxSelection
          autoHeight
          onRowSelectionModelChange={(selection) => handleSelectionChange(selection)}
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message={successMessage}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setOpenSnackbar(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </CardContent>
    </Card>
  );
};

export default DataTable;
