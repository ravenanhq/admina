"use client";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  IconButton,
  Input,
  InputAdornment,
  LinearProgress,
} from "@mui/material";
import notificationData from "../../../notifications.json";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridColumnMenu,
  GridColumnMenuProps,
} from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import DeleteModal from "../Crud/Deletemodal";

function CustomColumnMenu(props: GridColumnMenuProps) {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        columnMenuColumnsItem: null,
      }}
    />
  );
}

const Notifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setData(notificationData);
  }, []);

  const columns = [
    {
      field: "type",
      headerName: "Events",
      width: 150,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Badge
            color="info"
            variant={params.row.status === "unread" ? "dot" : "standard"}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {params.value}
          </Badge>
        </div>
      ),
    },
    { field: "header", headerName: "Title", width: 250 },
    { field: "subheading", headerName: "Detail", minWidth: 250 },
    {
      field: "time",
      headerName: "Date",
      width: 250,
      type: "date",
      valueGetter: (params) => new Date(params.value),
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {formatDateTime(params.value)}
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="delete"
            sx={{ "&:hover": { color: "#1b84ff" } }}
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
      filterable: false,
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  const formatDateTime = (dateTimeStr) => {
    const dateTime = new Date(dateTimeStr);
    const day = dateTime.getDate().toString().padStart(2, "0");
    const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    let hours = dateTime.getHours();
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
  };

  const handleDelete = (id) => {
    const rowToDelete = data.find((item) => item.id === id);
    setSelectedRow(rowToDelete);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleDeleteConfirm = () => {
    const updatedOrders = data.filter((item) => item.id !== selectedRow.id);

    setData(updatedOrders);
    setSuccessMessage("Deleted successfully!");
    setOpenSnackbar(true);
    handleDeleteModalClose();
  };

  const handleRowClick = (row) => {
    if (row.status === "unread") {
      const updatedRows = data.map((r) =>
        r.id === row.id ? { ...r, status: "read" } : r
      );
      setData(updatedRows);
    }
  };

  const getRowClassName = (params) => {
    return params.row.status === "unread" ? "unread-row" : "";
  };

  const filteredRows = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Box sx={{ flexGrow: 1, display: "block" }}>
      <h2 style={{ paddingTop: 30 }}>Notifications</h2>
      <div style={{ paddingTop: 10 }}>
        <div style={{ paddingBottom: 20, textAlign: "end" }}>
          <Input
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            gridTemplateColumns: "10fr",
            alignItems: "flex-start",
            columnGap: "1rem",
            display: "grid",
            marginTop: "1px",
            overflow: "hidden",
            rowGap: "1rem",
          }}
          className="notificationDataTable"
        >
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            filterMode="client"
            onRowClick={(params) => handleRowClick(params.row)}
            getRowClassName={getRowClassName}
            slots={{
              columnMenu: CustomColumnMenu,
              loadingOverlay: LinearProgress,
            }}
          />
        </div>
      </div>
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
      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </Box>
  );
};

export default Notifications;
