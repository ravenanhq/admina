import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { CardHeader, Tooltip } from "@mui/material";

const ToolTipGroupAvatar = () => {
  return (
    <>
      <CardHeader
        title="Pullup with Tooltip"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <AvatarGroup className="avatar-group" sx={{ justifyContent: "start" }}>
        {avatars.map((avatar, index) => (
          <Tooltip
            key={index}
            title={avatar.name}
            placement="top"
            enterTouchDelay={0}
            leaveTouchDelay={3000}
          >
            <Avatar
              key={index}
              alt={avatar.name}
              src={avatar.image}
              className="avatar"
            />
          </Tooltip>
        ))}
      </AvatarGroup>
    </>
  );
};

export default ToolTipGroupAvatar;
