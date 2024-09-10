import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  blue,
  deepOrange,
  deepPurple,
  green,
  orange,
  pink,
} from "@mui/material/colors";
import { Card, CardContent, CardHeader } from "@mui/material";
import avatars from "./avatar.json";

const colors = [
  deepOrange[500],
  orange[500],
  deepPurple[500],
  pink[500],
  blue[500],
  green[500],
];

const size = [24, 40, 50, 60, 70];

const getInitials = (name: string) => {
  const nameArray = name.split(" ");
  return nameArray.length > 1
    ? `${nameArray[0][0]}${nameArray[1][0]}`
    : nameArray[0][0];
};

const InitialAvatars = () => {
  return (
    <>
      <CardHeader
        title=" Initial Avatar"
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
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                className="avatarCircle"
                sx={{
                  bgcolor: colors[index % colors.length],
                  width: size[index % size.length],
                  height: size[index % size.length],
                  fontSize: size[index % size.length] / 2.5,
                }}
              >
                {getInitials(avatar.name)}
              </Avatar>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default InitialAvatars;
