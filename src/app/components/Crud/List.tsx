import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Link, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import dataTable from "../../../crud-table.json";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./Deletemodal";
import ButtonComponent from "../BaseComponent/Button";

const List = () => {
  const [data, setData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [filter, setFilter] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setData(dataTable);
  }, []);

  const columns = [
    { field: "name", headerName: "User Name", width: 150 },
    { field: "email", headerName: "Email", width: 170 },
    {
      field: "address",
      headerName: "Address",
      cellClassName: "crudCellName",
      width: 200,
      valueGetter: (params) => {
        const { streetAddress, pinCode, city } = params.row;
        return `${streetAddress}, ${pinCode}, ${city}`;
      },
    },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "role", headerName: "Role", width: 100 },
    {
      field: "action",
      headerName: "Action",

      sortable: false,
      renderCell: (params) => (
        <div>
          <Link href={`/crud/edit/${params.row.id}`}>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.email.toLowerCase().includes(filter.toLowerCase()) ||
      row.role.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const handleDelete = (id: any) => {
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

  return (
    <Card
      style={{
        border: "0px",
        boxShadow: "none",
        padding: 0,
        background: "none",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        className="crudComponentList"
      >
        <Grid
          item
          xs={9}
          sm={6}
          style={{ textAlign: "left" }}
          className="crudList"
        >
          <h2>List</h2>
        </Grid>
        <Grid
          item
          xs={2}
          sm={6}
          style={{ textAlign: isMobile ? "start" : "right" }}
        >
          <Link href={"/crud/add"}>
            <ButtonComponent
              variant="contained"
              style={{
                textTransform: "capitalize",
                padding: "4px 10px",
                boxShadow: "none",
                background: "#1d8683",
              }}
              name="Create"
            ></ButtonComponent>
          </Link>
        </Grid>
      </Grid>
      <CardContent
        style={{
          padding: "16px 0",
          border: "1px solid #ccc",
          marginTop: "15px",
          background: "#fff",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            textAlign: isMobile ? "start" : "right",
            maxWidth: "100%",
            margin: isMobile ? "0 0 18px 10px" : "0 0 10px 0px",
          }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            onChange={handleFilterChange}
            value={filter}
            InputProps={{
              endAdornment: (
                <div
                  style={{
                    borderLeft: "1px solid #ccc",
                    paddingLeft: "8px",
                    paddingBottom: "0",
                  }}
                >
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </div>
              ),
            }}
            sx={{
              height: "40px",
              padding: "8px",

              "& input": { padding: "8px" },
            }}
          />
        </Grid>
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(row) => row.id}
          checkboxSelection
          autoHeight
          style={{ border: "none" }}
          className="crudComponent"
          disableRowSelectionOnClick={true}
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
      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </Card>
  );
};

export default List;
