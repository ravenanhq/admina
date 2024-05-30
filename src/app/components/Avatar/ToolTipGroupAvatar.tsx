import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { Tooltip, Typography } from "@mui/material";

const ToolTipGroupAvatar = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginTop: "10px",
          padding: "10px",
          fontSize: "14px",
          color: "#b7b5be ",
        }}
      >
        Pullup with Tooltip
      </Typography>
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
