import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import ButtonComponent from "./ButtonComponent";

const RoundedButtonElement = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title=" Rounded Button"
          sx={{ bgcolor: "#1976d2", color: "white" }}
          titleTypographyProps={{ fontSize: "14px" }}
        />
        <Card>
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
                justifyContent: "normal",
                padding: "11px 0",
                minHeight:"80px"
              }}
            >
              <ButtonComponent text="Home Button" rounded />

              <ButtonComponent text="About Button" rounded/>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RoundedButtonElement;
