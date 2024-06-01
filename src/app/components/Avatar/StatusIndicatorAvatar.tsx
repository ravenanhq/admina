import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography, CardContent, Card, Tooltip } from "@mui/material";
import avatars from "./avatar.json";

const stringToColor = (string: string): string => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name: string) => {
  const nameParts = name.split(" ");
  const initials =
    nameParts.length === 1
      ? nameParts[0][0]
      : `${nameParts[0][0]}${nameParts[1][0]}`;

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
};

const getStatusColor = (status) => {
  switch (status) {
    case "online":
      return "green";
    case "offline":
      return "gray";
    case "away":
      return "orange";
    case "busy":
      return "#D1051A";
    default:
      return "gray";
  }
};

const StatusIndicatorAvatars = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
        }}
      >
        Status Indicator
      </Typography>
      <Card>
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              padding: "16px 0",
            }}
          >
            {avatars.map((avatar, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <Avatar {...stringAvatar(avatar.name)} />
                <Tooltip
                  title={avatar.status}
                  enterTouchDelay={0}
                  leaveTouchDelay={3000}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      backgroundColor: getStatusColor(avatar.status),
                      border: "2px solid white",
                    }}
                  />
                </Tooltip>
              </div>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default StatusIndicatorAvatars;
