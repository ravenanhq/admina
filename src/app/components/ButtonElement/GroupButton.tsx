import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";

const GroupButton = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title=" Group Button"
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
              <ButtonGroup
                variant="outlined"
                aria-label="text success group"
              >
                <Button>Home Button</Button>
                <Button>About Button</Button>
              </ButtonGroup>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GroupButton;
