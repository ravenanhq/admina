import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Breadcrumbs,
  Typography,
} from "@mui/material";

const CollapsedBreadcrumbsElement = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Collapsed Breadcrumbs"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
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
          <Link
            underline="hover"
            color="inherit"
            sx={{ fontSize: "12px", color: "#565656", cursor: "pointer" }}
          >
            Submenu2
          </Link>
          <Link
            underline="hover"
            color="inherit"
            sx={{ fontSize: "12px", color: "#565656", cursor: "pointer" }}
          >
            Submenu3
          </Link>
          <Typography sx={{ fontSize: "12px" }} color="text.primary">
            Submenu
          </Typography>
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
};
export default CollapsedBreadcrumbsElement;
