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
  TextField,
  Typography,
} from "@mui/material";

const TableWithSearch = () => {
  const [data, setData] = useState([
    { name: "John", email: "john@example.com", role: "Admin" },
    { name: "Jane", email: "jane@example.com", role: "User" },
    { name: "Billy", email: "billy@example.com", role: "Manager" },
    { name: "Carl", email: "carl@example.com", role: "User" },
    { name: "David", email: "david@example.com", role: "Manager" },
    { name: "Laurent", email: "Laurent@example.com", role: "Admin" },
  ]);

  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data
    .filter((row) => {
      return (
        row.name.toLowerCase().includes(filter.toLowerCase()) ||
        row.email.toLowerCase().includes(filter.toLowerCase()) ||
        row.role.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .sort((a, b) => {
      const isAsc = order === "asc";
      if (a[orderBy] < b[orderBy]) return isAsc ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return isAsc ? 1 : -1;
      return 0;
    });

  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Table with Search"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />

      <CardContent sx={{ padding: "0 16px 16px" }}>
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1,
              justifyContent: "end",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", color: "#565656", mt: 0.5 }}
            >
              Search:
            </Typography>
            <TextField
              margin="normal"
              id="name"
              name="search"
              variant="outlined"
              placeholder="Search"
              onChange={handleFilterChange}
              value={filter}
              size="small"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#C0C0C0",
                },
                "& .MuiInputBase-input": {
                  fontSize: "12px",
                  color: "#565656",
                  padding: "9px 14px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: "12px",
                  color: "#565656",
                  letterSpacing: "0.7px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#c0c0cc0",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#c0c0c0",
                    borderWidth: "1px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#c0c0c0",
                    borderWidth: "1px",
                  },
                },
              }}
            />
          </Box>

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
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                      color: "#747474",
                    }}
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
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                      color: "#747474",
                    }}
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
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                      color: "#747474",
                    }}
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
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#747474" }}>{row.name}</TableCell>
                    <TableCell sx={{ color: "#747474" }}>{row.email}</TableCell>
                    <TableCell sx={{ color: "#747474" }}>{row.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TableWithSearch;
