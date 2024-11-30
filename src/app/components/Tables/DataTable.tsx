import React, { useState } from "react";
import { Card, CardHeader, CardContent, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CustomPagination from "./CustomPagination";

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rows = [
    { sno: 1, name: "John", email: "john@example.com", role: "Admin" },
    { sno: 2, name: "Jane", email: "jane@example.com", role: "User" },
    { sno: 3, name: "Billy", email: "billy@example.com", role: "Manager" },
    { sno: 4, name: "Carl", email: "carl@example.com", role: "User" },
    { sno: 5, name: "Billy", email: "billy@example.com", role: "Manager" },
  ];

  const columns = [
    { field: "name", headerName: "Name", width: 110 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "role", headerName: "Role", width: 120 },
  ];

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="DataTable"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />

      <CardContent>
        <DataGrid
          className="boldHeader"
          rows={rows.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          columns={columns}
          getRowId={(row) => row.sno}
          checkboxSelection
          autoPageSize={false}
          disableRowSelectionOnClick={true}
          sx={{
            pt: "10px",
            color: "#747474",
            boxShadow: "3px -1px 10px 2px rgba(0, 0, 0, 0.05)",
            border: "none",
            "& .MuiDataGrid-root": {
              borderRadius: "5px",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: "12px",
              color: "#565656",
            },
            "& .MuiDataGrid-cellContent": {
              fontSize: "12px",
              color: "#747474",
            },
            "& .MuiDataGrid-footerContainer": {
              display: "none",
            },
            "& .MuiDataGrid-row": {
              "&:last-child .MuiDataGrid-cell": {
                border: "none",
              },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            margin: "16px 0 6px",
          }}
        >
          <CustomPagination
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            prevButtonContent="arrow"
            nextButtonContent="arrow"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DataTable;
