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

const HoverButtonElement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ borderRadius: "0 0 5px 5px" }}>
      <CardHeader
        title="Button With Hover"
        sx={{ bgcolor: "#007BFF", color: "white", borderRadius: "5px 5px 0 0" }}
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
              variant="outlined"
              text="Home Button"
              type="hover"
              fullWidth={isMobile}
            />
            <ButtonComponent
              variant="outlined"
              text="About Button"
              type="hover"
              fullWidth={isMobile}
            />
            <ButtonComponent
              variant="outlined"
              text="Search Button"
              type="hover"
              fullWidth={isMobile}
            />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default HoverButtonElement;
