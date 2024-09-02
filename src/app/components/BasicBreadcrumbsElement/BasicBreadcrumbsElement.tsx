import React from 'react';
import { Box, Card, CardContent, CardHeader, Link, Breadcrumbs, Typography } from '@mui/material';  

const BasicBreadcrumbsElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Basic Breadcrumbs"
                sx={{ bgcolor: '#940D4C', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ position: 'relative', display: 'inline-flex', gap: '8px'  }}>
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
                        <Typography color="text.primary">Submenu2</Typography>
                    </Breadcrumbs>
                </Box>
            </CardContent>
        </Card>
    );
};
export default BasicBreadcrumbsElement;