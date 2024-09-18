import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Breadcrumbs,
} from "@mui/material";

const LastActiveBreadcrumbsElement = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Last Active Breadcrumbs"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Box sx={{ position: "relative", display: "inline-flex", gap: "8px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ fontSize: "12px",color:"#747474" }}
            >
              Menu
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ fontSize: "12px",color:"#747474" }}
            >
              Submenu1
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
              aria-current="page"
              sx={{ fontSize: "12px",color:"#565656"}}
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
