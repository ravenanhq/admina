import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const List = () => {
  const [data, setData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [filter, setFilter] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("name");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setData(dataTable);
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.email.toLowerCase().includes(filter.toLowerCase()) ||
      row.streetAddress.toLowerCase().includes(filter.toLowerCase()) ||
      row.city.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      row.pinCode.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      row.phone.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });

  const handleDelete = (id) => {
    const rowToDelete = data.find((item) => item.id === id);
    setSelectedRow(rowToDelete);
    setDeleteModalOpen(true);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
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
          marginTop: "15px",
          background: "#fff",
          borderRadius: "7px",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px 0 #ccc",
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
              startAdornment: (
                <div
                  style={{
                    paddingLeft: "8px",
                    paddingBottom: "0",
                  }}
                >
                  <IconButton edge="start">
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
        <div style={{ overflowX: "auto" }}>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "none", padding: "0 23px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    onClick={() => handleRequestSort("name")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Name
                    {orderBy === "name" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleRequestSort("email")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Email
                    {orderBy === "email" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleRequestSort("streetAddress")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Street Address
                    {orderBy === "streetAddress" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleRequestSort("city")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    City
                    {orderBy === "city" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleRequestSort("pinCode")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Pincode
                    {orderBy === "pinCode" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => handleRequestSort("phone")}
                    align="left"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Phone
                    {orderBy === "phone" && (
                      <ArrowDropDownIcon
                        className={order === "desc" ? "asc" : "desc"}
                        sx={{
                          top: "auto",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#757575",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .sort((a, b) => {
                    const isAsc = order === "asc";
                    return (
                      (a[orderBy] < b[orderBy] ? -1 : 1) * (isAsc ? 1 : -1)
                    );
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.name}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.email}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.streetAddress}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.city}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.pinCode}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        {row.phone}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#757575" }}>
                        <Link href={`/crud/edit/${row.id}`}>
                          <IconButton
                            aria-label="edit"
                            sx={{ "&:hover": { color: "#1b84ff" } }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Link>
                        <IconButton
                          aria-label="delete"
                          sx={{ "&:hover": { color: "#1b84ff" } }}
                          onClick={() => handleDelete(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
          />
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
