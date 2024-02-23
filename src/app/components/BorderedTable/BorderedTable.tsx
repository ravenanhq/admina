import React from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BorderedTable = () => {
  const data = [
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'User' },
    { name: 'Billy', email: 'billy@example.com', role: 'Manager' },
    { name: 'Carl', email: 'carl@example.com', role: 'User' },
  ];

  return (
    <Card variant="outlined" sx={{borderRadius:"10px"}}>
      <CardHeader
        title="Bordered Table"
        sx={{ bgcolor: '#0057e7', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ border: '1px solid #e0e0e0' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}>Name</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}>Email</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0' }}>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{row.name}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{row.email}</TableCell>
                  <TableCell sx={{ border: '1px solid #e0e0e0' }}>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default BorderedTable;
