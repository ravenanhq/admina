import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  IconButton,
  Checkbox,
} from "@mui/material";
import orderData from "../../orders-data.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const RecentOrder = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  useEffect(() => {
    setOrders(orderData);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card
      style={{
        boxShadow: "0px 1px 2px -2px #000",
        width: "100%",
        borderRadius: "5px",
      }}
    >
      <CardContent style={{ padding: "0" }}>
        <TableContainer
          sx={{
            maxHeight: 440,
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: "10px",
            },
            "& .MuiDataGrid-cellContent": {
              fontSize: "12px",
              color:"#565656"
            },
            "& .MuiTableCell-root": {
              color:"#565656"
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#b0bec5",
              borderRadius: "10px",
              border: "2px solid #f1f1f1",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#78909c",
            },
          }}
        >
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="recent orders table"
          >
            <TableHead>
              <TableRow sx={{ height: "36px" }}>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  <Checkbox />
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Order#
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "#007BFF",
                    fontSize: "12px",
                    padding: "6px 10px",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow key={order.id} sx={{ height: "36px" }}>
                    {" "}
                    {/* Adjust row height */}
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      <Checkbox />
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      {order.order}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      {order.companyName}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      <Button
                        size="small"
                        style={{
                          color: "#428A45",
                          width: "100%",
                          fontSize: "12px",
                          textTransform: "capitalize",
                        }}
                      >
                        {order.status}
                      </Button>
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      {order.total}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", padding: "8px" }}>
                      {order.date}
                    </TableCell>
                    <TableCell sx={{ padding: "8px" }}>
                      <IconButton
                        aria-label="edit"
                        sx={{ "&:hover": { color: "#1b84ff" } }}
                      >
                        <EditIcon sx={{ color: "#565656" }} />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        sx={{ "&:hover": { color: "#1b84ff" } }}
                      >
                        <DeleteIcon sx={{ color: "#565656" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4, 8, 12]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

export default RecentOrder;
