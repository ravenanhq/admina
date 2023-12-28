import React from 'react';
import { Card, CardContent, CardHeader, Link, Breadcrumbs, Typography } from '@mui/material';

const CollapsedBreadcrumbsElement = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title="Collapsed Breadcrumbs"
                sx={{ bgcolor: '#182667', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                        Menu
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Submenu1
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Submenu2
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Submenu3
                    </Link>
                    <Typography color="text.primary">Submenu</Typography>
                </Breadcrumbs>
            </CardContent>
        </Card>
    );
};
export default CollapsedBreadcrumbsElement;