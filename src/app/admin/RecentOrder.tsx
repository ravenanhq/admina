import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, CardHeader} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import orderData from "../../orders-data.json";

const RecentOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderData.slice(0, 4)); 
  }, []);

  const columns = [
    { field: "order", headerName: "Order#"},
    { field: "companyName", headerName: "Product Name", width:130},
    {
      field: "status",
      headerName: "Status",
      width:100,
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
    { field: "total", headerName: "Total", },
    { field: "date", headerName: "Date",width:120  },
  ];

  return (
    <Card style={{
      boxShadow:"none", 
    width: "100%",
    borderRadius: "10px",
    borderBottom: "3px solid #33bebe",}}>
       <CardHeader
                title="Recent Orders"
                titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
                sx={{ marginTop: "20px" }}
              />
      <CardContent style={{padding:"0"}}>
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
          sx={{border:"none"}}
          />
      </CardContent>

    </Card>
  );
};

export default RecentOrder;
