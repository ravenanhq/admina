import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandableTable = () => {
  const data = [
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'User' },
    { name: 'Billy', email: 'billy@example.com', role: 'Manager' },
    { name: 'Carl', email: 'carl@example.com', role: 'User' },
  ];

  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((item) => item !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <Card variant="outlined" sx={{borderRadius:"10px"}}>
      <CardHeader
        title="Expandable Table"
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
                <React.Fragment key={index}>
                  <TableRow onClick={() => handleRowClick(index)} style={{ cursor: 'pointer' }}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                  {expandedRows.includes(index) && (
                    <TableRow>
                      <TableCell colSpan={3}>
                        <Accordion expanded={true}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                          >
                            <Typography>Additional Information</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              This is additional information for {row.name}.
                              You can customize the content here.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ExpandableTable;
