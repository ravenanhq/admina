import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const TableWithHover = () => {
  const [data, setData] = useState([
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'User' },
    { name: 'Billy', email: 'billy@example.com', role: 'Manager' },
    { name: 'Carl', email: 'carl@example.com', role: 'User' },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);

  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');

  const [filter, setFilter] = useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
    <Card variant="outlined" sx={{borderRadius:"10px"}}>
      <CardHeader
        title="Table with Hover Style"
        sx={{ bgcolor: '#0057e7', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={() => handleRequestSort('name')}
                  sx={{ cursor: 'pointer' }}
                >
                  Name
                </TableCell>
                <TableCell
                  onClick={() => handleRequestSort('email')}
                  sx={{ cursor: 'pointer' }}
                >
                  Email
                </TableCell>
                <TableCell
                  onClick={() => handleRequestSort('role')}
                  sx={{ cursor: 'pointer' }}
                >
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .sort((a, b) => {
                  const isAsc = order === 'asc';
                  return (a[orderBy] < b[orderBy] ? -1 : 1) * (isAsc ? 1 : -1);
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:hover': { background: '#f5f5f5' } }} // Apply hover style
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
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
      </CardContent>
    </Card>
  );
};

export default TableWithHover;
