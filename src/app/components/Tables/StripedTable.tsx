import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';

const StripedTable = () => {
  const [data, setData] = useState([
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'User' },
    { name: 'Billy', email: 'billy@example.com', role: 'Manager' },
    { name: 'Carl', email: 'carl@example.com', role: 'User' },
  ]);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('name');

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = data.sort((a, b) => {
    if (orderBy === 'name' || orderBy === 'email' || orderBy === 'role') {
      return (a[orderBy] < b[orderBy] ? -1 : 1) * (order === 'asc' ? 1 : -1);
    }
    return 0;
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Striped Table"
        sx={{ bgcolor: '#007BFF', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                {['name', 'email', 'role'].map((column) => (
                  <TableCell
                    key={column}
                    sortDirection={orderBy === column ? order : false}
                    sx={{
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : 'asc'}
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
                  sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
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
