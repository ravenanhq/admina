import React from 'react';
import { Card, CardContent, CardHeader, Link, Breadcrumbs, Typography, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const CustomSeparatorBreadcrumbsElement = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Menu
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Submenu1
        </Link>,
        <Typography key="3" color="text.primary">
            Submenu2
        </Typography>,
    ];

    return (
        <Card variant="outlined">
            <CardHeader
                title="Custom Separator Breadcrumbs"
                sx={{ bgcolor: '#6D3C93', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Breadcrumbs separator="-" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </CardContent>
        </Card>
    );
};
export default CustomSeparatorBreadcrumbsElement;