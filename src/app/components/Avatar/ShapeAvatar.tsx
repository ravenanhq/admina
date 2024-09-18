import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Card, CardContent, CardHeader } from "@mui/material";

const ShapesAvatars = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title=" Shapes Avatar"
          sx={{ bgcolor: "#007BFF", color: "white" }}
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
              }}
            >
              <Avatar
                alt="name"
                sx={{
                  background: "#c65c44",
                  borderRadius: "0",
                  width: "50px",
                  height: "50px",
                }}
                src="/assets/images/avatar-12.png"
              ></Avatar>
              <Avatar
                alt="name"
                sx={{
                  background: "#c65c44",
                  borderRadius: "10px",
                  width: "50px",
                  height: "50px",
                }}
                src="/assets/images/avatar-12.png"
              ></Avatar>
              <Avatar
                alt="name"
                sx={{ background: "#c65c44", width: "50px", height: "50px" }}
                src="/assets/images/avatar-12.png"
              ></Avatar>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default ShapesAvatars;
