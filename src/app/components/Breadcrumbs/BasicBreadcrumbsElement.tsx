import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Breadcrumbs,
  Typography,
} from "@mui/material";

const BasicBreadcrumbsElement = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Basic Breadcrumbs"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ position: "relative", display: "inline-flex", gap: "8px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              sx={{ fontSize: "12px", color: "#747474", cursor: "pointer" }}
            >
              Menu
            </Link>
            <Link
              underline="hover"
              color="inherit"
              sx={{ fontSize: "12px", color: "#747474", cursor: "pointer" }}
            >
              Submenu1
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontSize: "12px", color: "#565656" }}
            >
              Submenu2
            </Typography>
          </Breadcrumbs>
        </Box>
      </CardContent>
    </Card>
  );
};
export default BasicBreadcrumbsElement;
