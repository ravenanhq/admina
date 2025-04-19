import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";

const SizeButtonElement = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title=" Button Sizes"
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
                minHeight:"80px",
              }}
            >
              <ButtonComponent text="Large Button" size="large" />

              <ButtonComponent text="Medium Button" size="medium" />
              
              <ButtonComponent text="Small Button" size="small" />
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SizeButtonElement;
