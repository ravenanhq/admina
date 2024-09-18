import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { CardContent, Card, Tooltip, CardHeader } from "@mui/material";
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
    case "presentation":
      return "#C50F1F";
    default:
      return "gray";
  }
};

const StatusIndicatorAvatars = () => {
  return (
    <>
      <div style={{ border: "1px solid #c0c0c0" }}>
        <CardHeader
          title="Status Indicator"
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
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginLeft: index === 0 ? "0" : "14px",
                  }}
                  className="statusAvatar"
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
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor:
                          avatar.status === "presentation"
                            ? getStatusColor(avatar.status)
                            : "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {avatar.status === "presentation" ? (
                        <div
                          style={{
                            width: "8px",
                            height: "2px",
                            backgroundColor: "white",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: getStatusColor(avatar.status),
                          }}
                        />
                      )}
                    </div>
                  </Tooltip>
                </div>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default StatusIndicatorAvatars;
