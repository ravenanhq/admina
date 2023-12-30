import React from 'react';
import { Box, Card, CardContent, CardHeader, CircularProgress } from '@mui/material';

const CircularIndeterminateElement = () => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Circular Indeterminate"
                sx={{ bgcolor: '#6D3C93', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <CircularProgress />
                </Box>
            </CardContent>
        </Card>
    );
};

export default CircularIndeterminateElement;
