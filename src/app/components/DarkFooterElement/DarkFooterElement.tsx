import React from 'react';
import { Card, CardContent, CardHeader, Box, Container, Typography } from '@mui/material';

const DarkFooterElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Dark Footer"
                sx={{ bgcolor: '#E44D26', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box
                    component="footer"
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '20px 0',
                        marginTop: 'auto',
                    }}
                >
                    <Container maxWidth="md">
                        <Typography variant="body2" align="center">
                            &copy; Copyright All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </CardContent>
        </Card>
    );
};
export default DarkFooterElement;