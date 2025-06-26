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
      <div style={{borderRadius:"0 0 5px 5px"}}>
        <CardHeader
          title=" Rounded Button"
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
                minHeight:"80px"
              }}
            >
              <ButtonComponent  text="Home Button" rounded type="buttonbg"/>

              <ButtonComponent text="About Button" rounded type="buttonbg"/>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RoundedButtonElement;
