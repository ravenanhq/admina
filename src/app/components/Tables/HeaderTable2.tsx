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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const HeaderTable2 = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const data = [
    {
      name: "John",
      position: "UI UX Designer",
      office: "Chennai",
      age: "30",
      date: "2008/11/20",
      salary: "$162,700",
      email: "john@example.com",
    },
    {
      name: "Jane",
      position: "Java Developer",
      office: "Madurai",
      age: "34",
      date: "2008/10/20",
      salary: "$167,400",
      email: "jane@example.com",
    },
    {
      name: "Billy",
      position: "Quality Analyst",
      office: "Coimbatore",
      age: "37",
      date: "2008/10/20",
      salary: "$168,600",
      email: "billy@example.com",
    },
    {
      name: "Carl",
      position: "FullStack Developer",
      office: "Chennai",
      age: "26",
      date: "2008/12/20",
      salary: "$170,500",
      email: "carl@example.com",
    },
  ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Header Table 2"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ border: "1px solid #e0e0e0" }}>
            <TableHead>
              <TableRow className="headertable2" sx={{ bgcolor: "#007BFF" }}>
                {[
                  "name",
                  "position",
                  "office",
                  "age",
                  "date",
                  "salary",
                  "email",
                ].map((column) => (
                  <TableCell
                    key={column}
                    sx={{
                      border: "1px solid #e0e0e0",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      onClick={createSortHandler(column)}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(data, getComparator(order, orderBy)).map(
                (row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#F5F7FA" : "white", // Striped effect
                    }}
                  >
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.position}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.office}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.age}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.date}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.salary}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #e0e0e0" }}>
                      {row.email}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default HeaderTable2;
