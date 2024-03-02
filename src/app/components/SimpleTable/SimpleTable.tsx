import React from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SimpleTable = () => {
  const data = [
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'User' },
    { name: 'Billy', email: 'billy@example.com', role: 'Manager' },
    { name: 'Carl', email: 'carl@example.com', role: 'User' },
  ];

  return (
    <Card variant="outlined" sx={{borderRadius:"10px"}}>
      <CardHeader
        title="Simple Table"
        sx={{ bgcolor: '#008744', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
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

export default SimpleTable;
