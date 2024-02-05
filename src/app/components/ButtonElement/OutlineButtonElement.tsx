import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

const OutlineButtonElement = () => {
    return (
        <>
        <Typography variant="h6" gutterBottom sx={{marginTop: "20px"}}>Outline Buttons</Typography>
        <Divider sx={{ margin:"0 auto",marginY: 2 ,}} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px',  }}>
            <Button variant="outlined" color="primary">
                Primary Button
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary Button
            </Button>
            <Button variant="outlined" color="success">
                Success
            </Button>
            <Button variant="outlined" color="warning">
                Warning
            </Button>
            <Button variant="outlined" color="info">
                Info
            </Button>
            <Button variant="outlined" color="primary" disabled>
                Disabled
            </Button>
        </Box></>
    );
};

export default OutlineButtonElement;
