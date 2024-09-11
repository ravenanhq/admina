import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function SizeAvatars() {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title="Size Avatar"
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
                className="avatarCircle"
              />
              <Avatar
                alt="Remy Sharp"
                src="/assets/images/avatar-2.png"
                sx={{ width: 50, height: 50 }}
                className="avatarCircle"
              />
              <Avatar
                alt="Remy Sharp"
                src="/assets/images/avatar-2.png"
                sx={{ width: 60, height: 60 }}
                className="avatarCircle"
              />
              <Avatar
                alt="Remy Sharp"
                src="/assets/images/avatar-2.png"
                sx={{ width: 70, height: 70 }}
                className="avatarCircle"
              />
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
