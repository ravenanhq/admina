import React from 'react';
import { Box, Card, CardContent, CardHeader, CircularProgress } from '@mui/material';

const CircularColorElement = () => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Circular Color"
                sx={{ bgcolor: '#0D9440', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <CircularProgress color='secondary' />
                    <CircularProgress color='success' />
                    <CircularProgress color='error' />
                    <CircularProgress color='warning' />
                    <CircularProgress color='info' />
                </Box>
            </CardContent>
        </Card>
    );
};

export default CircularColorElement;
