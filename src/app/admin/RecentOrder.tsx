import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import orderData from "../../orders-data.json";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "../../Icons/PencilFill.svg";

const RecentOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderData.slice(0, 4));
  }, []);

  const columns = [
    { field: "order", headerName: "Order#" },
    { field: "companyName", headerName: "Product Name", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => (
        <Button
          size="small"
          style={{
            color: params.value === "FULFILED" ? "#2196f3" : "#ff9800",
            width: "68%",
          }}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "total", headerName: "Total", width: 70 },
    { field: "date", headerName: "Date", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="delete"
            sx={{ "&:hover": { color: "#1b84ff" } }}
          >
            <Edit sx={{ color: "#565656" }} />
            <DeleteIcon sx={{ ml: 1, color: "#565656" }} />
          </IconButton>
        </div>
      ),
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <Card
      style={{
        boxShadow: "0px 1px 2px -2px #000",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <CardContent style={{ padding: "0" }}>
        <DataGrid
          key={Math.random()}
          rows={orders}
          columns={columns}
          getRowId={(row) => row.id}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick={true}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#007BFF",
              fontSize: "12px",
            },
            "& .MuiDataGrid-cellContent": {
              fontSize: "12px",
              color:"#565656"
            },
            "& .MuiDataGrid-virtualScroller": {
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#b0bec5",
                borderRadius: "10px",
                border: "2px solid #f1f1f1",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#78909c",
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RecentOrder;
