import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Breadcrumbs,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

const BreadcrumbsWithIconElement = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "5px" }}>
      <CardHeader
        title="Breadcrumbs With Icons"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              color: "#565656",
              "& .MuiTypography-root": {
                color: "#565656",
              },
            }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Menu
          </Link>
          <Link
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              color: "#565656",
              "& .MuiTypography-root": {
                color: "#565656",
              },
            }}
            color="inherit"
            href="/"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Submenu1
          </Link>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              color: "#747474",
              "& .MuiTypography-root": {
                color: "#747474",
              },
            }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Submenu2
          </Typography>
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
};
export default BreadcrumbsWithIconElement;
