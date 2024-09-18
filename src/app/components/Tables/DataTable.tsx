import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
    const rows = [
        { sno: 1, name: 'John', email: 'john@example.com', role: 'Admin' },
        { sno: 2, name: 'Jane', email: 'jane@example.com', role: 'User' },
        { sno: 3, name: 'Billy', email: 'billy@example.com', role: 'Manager' },
        { sno: 4, name: 'Carl', email: 'carl@example.com', role: 'User' },
        { sno: 5, name: 'Billy', email: 'billy@example.com', role: 'Manager' },
        { sno: 6, name: 'Carl', email: 'carl@example.com', role: 'User' },
    ];

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'role', headerName: 'Role', width: 100 },
    ];

    return (
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
            <CardHeader
                title="DataTable"
                sx={{ bgcolor: '#007BFF', color: 'white' }}
                titleTypographyProps={{ fontSize: '14px' }}
            />

            <CardContent>
                <DataGrid
                    sx={{ pb: "10px", pt: "10px", color: "#747474" }}
                    className="boldHeader"
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.sno}
                    checkboxSelection
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    disableRowSelectionOnClick={true}
                />
            </CardContent>
        </Card>
    );
};

export default DataTable;
