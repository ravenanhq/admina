import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Breadcrumbs,
  Typography,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomSeparatorBreadcrumbsElement = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{ fontSize: "12px" }}
    >
      Menu
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{ fontSize: "12px" }}
    >
      Submenu1
    </Link>,
    <Typography key="3" color="text.primary" sx={{ fontSize: "12px" }}>
      Submenu2
    </Typography>,
  ];

  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Custom Separator Breadcrumbs"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
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
