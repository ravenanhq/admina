import React from 'react';
import { Box, Button, Card, CardContent, CardHeader } from '@mui/material';

const ButtonsElements = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Buttons"
                sx={{ bgcolor: '#008744', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
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
                </Box>
            </CardContent>
        </Card>
    );
};

export default ButtonsElements;
