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
      <div style={{ border: "1px solid #EBEBEB" }}>
        <CardHeader
          title=" Group Button"
          sx={{ bgcolor: "#007BFF", color: "white" ,borderRadius: "5px 5px 0 0"}}
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
                <Button sx={{borderRadius:0, textTransform:"none"}}>Home Button</Button>
                <Button sx={{borderRadius:0, textTransform:"none"}}>About Button</Button>
              </ButtonGroup>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GroupButton;
