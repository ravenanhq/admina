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
  TextField,
  Typography,
  Box,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import CustomPagination from "./CustomPagination";

const HeaderTable1 = () => {
  const [data, setData] = useState([
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
      salary: "$170.500",
      email: "carl@example.com",
    },
    {
      name: "Sophia",
      position: "Project Manager",
      office: "Chennai",
      age: "40",
      date: "2009/01/15",
      salary: "$200,000",
      email: "sophia@example.com",
    },
    {
      name: "Michael",
      position: "Systems Analyst",
      office: "Bangalore",
      age: "29",
      date: "2010/03/21",
      salary: "$150,200",
      email: "michael@example.com",
    },
    {
      name: "Emily",
      position: "HR Manager",
      office: "Pune",
      age: "35",
      date: "2011/05/12",
      salary: "$180,400",
      email: "emily@example.com",
    },
    {
      name: "David",
      position: "DevOps Engineer",
      office: "Hyderabad",
      age: "31",
      date: "2012/07/22",
      salary: "$190,000",
      email: "david@example.com",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setPage(0);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key].toString().toLowerCase();
      const bValue = b[sortConfig.key].toString().toLowerCase();
      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const from = page * rowsPerPage + 1;
  const to = Math.min((page + 1) * rowsPerPage, filteredData.length);
  const count = filteredData.length;

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Header Table 1"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <TablePagination
            className="headertable-1"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
            sx={{ pl: 0, pr:8 }}
          />

          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
            sx={{ width: "300px" }}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ border: "1px solid #e0e0e0" }}>
            <TableHead>
              <TableRow>
                {[
                  "name",
                  "position",
                  "office",
                  "age",
                  "date",
                  "salary",
                  "email",
                ].map((key) => (
                  <TableCell
                    key={key}
                    sx={{
                      border: "1px solid #e0e0e0",
                      fontWeight: "bold",
                      color: "#747474",
                    }}
                  >
                    <TableSortLabel
                      active={sortConfig.key === key}
                      direction={
                        sortConfig.key === key ? sortConfig.direction : "asc"
                      }
                      onClick={() => handleSort(key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      {/* Capitalize headers */}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F5F7FA" : "white", // Striped effect
                  }}
                >
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.position}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.office}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.age}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.salary}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid #e0e0e0", color: "#747474" }}
                  >
                    {row.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px", color: "#747474",
            }}
          >
            {`Showing ${from} to ${to} of ${count} entries`}
          </Typography>
          {/* Use Custom Pagination */}
          <CustomPagination
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeaderTable1;
