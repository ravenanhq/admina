import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Card, CardContent, Typography } from "@mui/material";

export default function SizeAvatars() {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
        }}
      >
        Size Avatar
      </Typography>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "start",
              flexWrap: "wrap",
              padding: "16px 0",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/avatar-2.png"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 40, height: 40 }}
              src="/assets/images/avatar-2.png"
            />
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/avatar-2.png"
              sx={{ width: 50, height: 50 }}
            />
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/avatar-2.png"
              sx={{ width: 60, height: 60 }}
            />
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/avatar-2.png"
              sx={{ width: 70, height: 70 }}
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
