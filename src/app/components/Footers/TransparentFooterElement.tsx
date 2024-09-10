import React from 'react';
import { Card, CardContent, CardHeader, Box, Container, Typography } from '@mui/material';

const TransparentFooterElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Transparent Footer"
                sx={{ bgcolor: '#007BFF', color: 'white' }}
                titleTypographyProps={{ fontSize: '14px' }}
            />
            <CardContent>
                <Box
                    component="footer"
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        padding: '20px 0',
                        marginTop: 'auto',
                    }}
                >
                    <Container maxWidth="md">
                        <Typography variant="subtitle2" align="center" sx={{fontSize:"12px"}}>
                            &copy; Copyright All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </CardContent>
        </Card>
    );
};
export default TransparentFooterElement;