import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { Typography } from "@mui/material";

const PullUpGroupAvatar = () => {
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "12px", color: "#747474" }}
      >
        Pullup Avatar
      </Typography>
      <AvatarGroup className="avatar-group" sx={{ justifyContent: "start" }}>
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            alt={avatar.name}
            src={avatar.image}
            className="avatar"
          />
        ))}
      </AvatarGroup>
    </>
  );
};

export default PullUpGroupAvatar;
