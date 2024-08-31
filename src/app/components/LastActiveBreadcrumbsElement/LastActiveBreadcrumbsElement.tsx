import React from 'react';
import { Box, Card, CardContent, CardHeader, Link, Breadcrumbs } from '@mui/material';

const LastActiveBreadcrumbsElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Last Active Breadcrumbs"
                sx={{ bgcolor: '#008744', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ position: 'relative', display: 'inline-flex', gap: '8px' }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Menu
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                        >
                            Submenu1
                        </Link>
                        <Link
                            underline="hover"
                            color="text.primary"
                            href="/"
                            aria-current="page"
                        >
                            Submenu2
                        </Link>
                    </Breadcrumbs>
                </Box>
            </CardContent>
        </Card>
    );
};
export default LastActiveBreadcrumbsElement;