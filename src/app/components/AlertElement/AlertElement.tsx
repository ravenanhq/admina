import React from 'react';
import { Box, Card, CardContent, CardHeader, Alert, AlertTitle } from '@mui/material';

const AlertElements = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Alerts"
                sx={{ bgcolor: '#AB361D', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        This is a success alert!
                    </Alert>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert!
                    </Alert>
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        This is an info alert!
                    </Alert>
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert!
                    </Alert>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AlertElements;
