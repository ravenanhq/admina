import React from "react";
import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

const ElevatedButton = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title="  Elevated Button"
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
              <ButtonComponent text="Home Button" type={"elevated"} />

              <ButtonComponent text="About Button" type={"elevated"} />

              <ButtonComponent text="Search Button" type={"elevated"} />
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ElevatedButton;
