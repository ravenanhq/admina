import React from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const LinearIndeterminateElement = () => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Linear Indeterminate"
                sx={{ bgcolor: '#1D8683', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent sx={{ height: '85px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LinearIndeterminateElement;
