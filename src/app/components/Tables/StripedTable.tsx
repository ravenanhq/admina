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
} from "@mui/material";

const StripedTable = () => {
  const [data, setData] = useState([
    { name: "John", email: "john@example.com", role: "Admin" },
    { name: "Jane", email: "jane@example.com", role: "User" },
    { name: "Billy", email: "billy@example.com", role: "Manager" },
    { name: "Carl", email: "carl@example.com", role: "User" },
  ]);

  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = data.sort((a, b) => {
    if (orderBy === "name" || orderBy === "email" || orderBy === "role") {
      return (a[orderBy] < b[orderBy] ? -1 : 1) * (order === "asc" ? 1 : -1);
    }
    return 0;
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Striped Table"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />

      <CardContent>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "3px -1px 10px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
          }}
        >
          <Table
            sx={{
              width: "100%",
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
                {["name", "email", "role"].map((column) => (
                  <TableCell
                    key={column}
                    sortDirection={orderBy === column ? order : false}
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                      color: "#747474",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : "asc"}
                      onClick={() => handleRequestSort(column)}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit",
                  }}
                >
                  <TableCell sx={{ color: "#747474" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "#747474" }}>{row.email}</TableCell>
                  <TableCell sx={{ color: "#747474" }}>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StripedTable;
