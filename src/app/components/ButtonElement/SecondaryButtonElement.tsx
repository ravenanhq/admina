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

const SecondaryButtonElement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ borderRadius: "0 0 5px 5px" }}>
      <CardHeader
        title="Secondary Button"
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
              xs: "12px 8px", // mobile
              sm: "16px 12px", // tablet and up
            },
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            sx={{
              alignItems: isMobile ? "stretch" : "center",
              justifyContent: isMobile ? "center" : "flex-start",
              padding: "11px 0",
              minHeight: "80px",
            }}
          >
            <ButtonComponent
              text="Home Button"
              type="secondary"
              fullWidth={isMobile}
            />

            <ButtonComponent
              text="About Button"
              type="secondary"
              rounded
              fullWidth={isMobile}
            />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecondaryButtonElement;

