import React, { useEffect, useState } from "react";
import { Card, CardContent, IconButton, Button, Snackbar, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import productData from "../../../product-data.json";
import DeleteModal from "./DeleteModal";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

const ProductData = () => {
  const [orders, setOrder] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState([]);

  const handleAddProduct = (newProduct) => {
    setOrder((prevOrders) => [...prevOrders, newProduct]);
    setSuccessMessageOpen(true);
    setMessage("Product added successfully!");
    handleCloseAddProductModal();
  };
  
  useEffect(() => {
    setOrder(productData);
  }, []);

  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedRow(null);
  };

  const handleEditSave = (editedData) => {
    setOrder((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === editedData.id ? editedData : order
      );
      return updatedOrders;
    });
    handleEditModalClose();
    setSuccessMessageOpen(true);
    setMessage("Changes saved successfully!");
  };

  const handleDelete = (id: any) => {
    const rowToDelete = orders.find((order) => order.id === id);
    setSelectedRow(rowToDelete);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleDeleteConfirm = () => {
    const updatedOrders = orders.filter((order) => order.id !== selectedRow.id);
    setOrder(updatedOrders);
    handleDeleteModalClose();
    setSuccessMessageOpen(true);
    setMessage("Product deleted successfully!");
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const handleAddProductClick = () => {
    setAddProductModalOpen(true);
  };

  const handleCloseAddProductModal = () => {
    setAddProductModalOpen(false);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 120,
      headerClassName: "no-wrap",
    },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Button
          size="small"
          style={{
            backgroundColor:
            params.value.toLowerCase() === "shipping" ? "#2196f3" : "#ff9800",
            color: "white",
            width: "68%",
          }}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "date", headerName: "Created Date", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Card style={{ boxShadow: "none",background:"none" }}>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={message}
      />
      <CardContent style={{ padding: "0" ,}}>
      <Grid container justifyContent="flex-end" alignItems="center" style={{ marginBottom: "20px" }}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddProductClick}
        >
          Add New Product
        </Button>
      </Grid>
    </Grid>
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
          className="orderDataTable"
          style={{background:"#fff"}}
        />
      </CardContent>

      <EditProductModal
        open={editModalOpen}
        onClose={handleEditModalClose}
        rowData={selectedRow}
        onEdit={handleEditSave}
      />

      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        onDeleteConfirm={handleDeleteConfirm}
        orderId={selectedRow ? selectedRow.name : ""}
      />

      <AddProductModal
        open={isAddProductModalOpen}
        onClose={handleCloseAddProductModal}
        onAddProduct={handleAddProduct}
      />
    </Card>
  );
};

export default ProductData;
