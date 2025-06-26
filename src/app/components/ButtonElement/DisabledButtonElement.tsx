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

const DisabledButtonElement = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ borderRadius: "0 0 5px 5px" }}>
      <CardHeader
        title="Disabled Button"
        sx={{
          bgcolor: "#007BFF",
          color: "white",
          borderRadius: "5px 5px 0 0",
        }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Card>
        <CardContent>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            sx={{
              alignItems: isMobile ? "stretch" : "center",
              justifyContent: "normal",
              padding: "11px 0",
              minHeight: "80px",
              color: "#565656",
            }}
          >
            <ButtonComponent text="Disabled" disabled fullWidth={isMobile} />

            <ButtonComponent text="Disabled" disabled rounded fullWidth={isMobile} />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisabledButtonElement;
