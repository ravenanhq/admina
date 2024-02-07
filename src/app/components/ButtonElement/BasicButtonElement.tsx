import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

const BasicButtonElement = () => {
    return (
        <><Typography variant="h6" gutterBottom sx={{ marginTop: "10px" }}>Basic Buttons</Typography>
        <Divider sx={{ margin: "0 auto", marginY: 2 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="contained" color="secondary">
                Secondary Button
            </Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="contained" color="warning">
                Warning
            </Button>
            <Button variant="contained" color="info">
                Info
            </Button>
            <Button variant="contained" color="primary" disabled>
                Disabled
            </Button>
        </Box></>

    );
};

export default BasicButtonElement;
