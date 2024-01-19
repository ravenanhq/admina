import React from 'react';
import { Card, CardContent, CardHeader, Box, Container, Typography } from '@mui/material';

const LightFooterElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Light Footer"
                sx={{ bgcolor: '#182667', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box
                    component="footer"
                    sx={{
                        backgroundColor: '#f5f5f5',
                        padding: '20px 0',
                        marginTop: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Container maxWidth="md">
                        <Typography variant="body2" color="textSecondary">
                            &copy; Copyright All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </CardContent>
        </Card>
    );
};
export default LightFooterElement;