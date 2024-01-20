import React, { useEffect, useState } from "react";
import { Card, CardContent, IconButton, Button, Snackbar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import orderData from "../../../orders-data.json";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const ProductOrder = () => {
  const [orders, setOrder] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [message,setMessage] = useState('');

  useEffect(() => {
    setOrder(orderData);
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
    const updatedOrders = orders.filter(
      (order) => order.id !== selectedRow.id
    );
    setOrder(updatedOrders);
    handleDeleteModalClose();
    setSuccessMessageOpen(true);
    setMessage("Order deleted successfully!");
  };

  const handleSnackbarClose = () => {
    setSuccessMessageOpen(false);
  };

  const columns = [
    { field: "order", headerName: "Order#", width: 200 },
    { field: "companyName", headerName: "Company Name", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <Button
          size="small"
          style={{
            backgroundColor:
              params.value === "FULFILED" ? "#2196f3" : "#ff9800",
            color: "white",
            width: "55%",
          }}
        >
          {params.value}
        </Button>
      ),
    },
    { field: "total", headerName: "Total", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
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
    <Card>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={message}
      />
      <CardContent>
        <DataGrid
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
        />
      </CardContent>

      <EditModal
        open={editModalOpen}
        onClose={handleEditModalClose}
        rowData={selectedRow}
        onEdit={handleEditSave}
      />

      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        onDeleteConfirm={handleDeleteConfirm}
        rowData={selectedRow}
        orderId={selectedRow ? selectedRow.order : ''}
      />
    </Card>
  );
};

export default ProductOrder;
