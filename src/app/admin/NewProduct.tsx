import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import orderData from "../../product-data.json";

const NewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(orderData);
  }, []);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Image"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "price", headerName: "Price" },
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
          rows={products}
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
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default NewProduct;
