import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ButtonComponent from "./ButtonComponent";

const ElevatedButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ borderRadius: "0 0 5px 5px" }}>
      <CardHeader
        title="Elevated Button"
        sx={{
          bgcolor: "#007BFF",
          color: "white",
          borderRadius: "5px 5px 0 0",
        }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Card>
        <CardContent
          sx={{
            padding: {
              xs: "12px 8px",
              sm: "16px 12px",
            },
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            sx={{
              alignItems: isMobile ? "stretch" : "center",
              justifyContent: isMobile ? "center" : "space-between",
              padding: "11px 0",
              minHeight: "80px",
            }}
          >
            <ButtonComponent
              text="Home Button"
              type="elevated"
              fullWidth={isMobile}
            />

            <ButtonComponent
              text="About Button"
              type="elevated"
              fullWidth={isMobile}
            />

            <ButtonComponent
              text="Search Button"
              type="elevated"
              fullWidth={isMobile}
            />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default ElevatedButton;
