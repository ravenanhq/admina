import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
} from "@mui/material";
import CustomPagination from "./CustomPagination";

const TableWithHover = () => {
  const [data] = useState([
    { name: "John", email: "john@example.com", role: "Admin" },
    { name: "Jane", email: "jane@example.com", role: "User" },
    { name: "Billy", email: "billy@example.com", role: "Manager" },
    { name: "Carl", email: "carl@example.com", role: "User" },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);

  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const [filter, setFilter] = useState("");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.email.toLowerCase().includes(filter.toLowerCase()) ||
      row.role.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Table with Hover Style"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />

      <CardContent sx={{ paddingBottom: "22px" }}>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "3px -1px 10px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
          }}
        >
          <Table
            sx={{
              "& .MuiTableCell-root": {
                padding: "15px",
                fontSize: "12px",
              },
              "& .MuiTableRow-root": {
                "&:last-child .MuiTableCell-root": {
                  borderBottom: "none",
                },
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sortDirection={orderBy === "name" ? order : false}
                  sx={{ fontWeight: "bold", color: "#747474" }}
                >
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sortDirection={orderBy === "email" ? order : false}
                  sx={{ fontWeight: "bold", color: "#747474" }}
                >
                  <TableSortLabel
                    active={orderBy === "email"}
                    direction={orderBy === "email" ? order : "asc"}
                    onClick={() => handleRequestSort("email")}
                  >
                    Email
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sortDirection={orderBy === "role" ? order : false}
                  sx={{ fontWeight: "bold", color: "#747474" }}
                >
                  <TableSortLabel
                    active={orderBy === "role"}
                    direction={orderBy === "role" ? order : "asc"}
                    onClick={() => handleRequestSort("role")}
                  >
                    Role
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .sort((a, b) => {
                  const isAsc = order === "asc";
                  return (a[orderBy] < b[orderBy] ? -1 : 1) * (isAsc ? 1 : -1);
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:hover": { background: "#f5f5f5" } }} // Apply hover style
                  >
                    <TableCell sx={{ color: "#747474" }}>{row.name}</TableCell>
                    <TableCell sx={{ color: "#747474" }}>{row.email}</TableCell>
                    <TableCell sx={{ color: "#747474" }}>{row.role}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "4px" }}>
          <CustomPagination
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            prevButtonContent="arrow"
            nextButtonContent="arrow"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TableWithHover;
