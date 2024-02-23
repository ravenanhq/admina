import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import orderData from "../../product-data.json";

const NewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(orderData);
  }, []);

  const columns = [
    { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} alt="Image" style={{ width: '70px', height: '70px' }} /> },
    { field: "name", headerName: "Name", width: 130 },
    { field: "price", headerName: "Price", },
  ];

  return (
    <Card style={{
      boxShadow: "none",
      width: "100%",
      borderRadius: "10px",
      borderBottom: "3px solid #33bebe",
    }}>
      <CardHeader
        title="New Product"
        titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
        sx={{ marginTop: "20px" }}
      />
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
          sx={{ border: "none" }}
        />
      </CardContent>

    </Card>
  );
};

export default NewProduct;
