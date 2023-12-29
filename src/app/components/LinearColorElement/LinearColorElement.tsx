import React from 'react';
import { Stack, Card, CardContent, CardHeader } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const LinearColorElement = () => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Linear Color"
                sx={{ bgcolor: '#737E7C', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Stack spacing={2} sx={{ width: '100%' }}>        
                    <LinearProgress color="secondary" />
                    <LinearProgress color='success' />
                    <LinearProgress color='error' />
                    <LinearProgress color='warning' />
                    <LinearProgress color='info' />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default LinearColorElement;
