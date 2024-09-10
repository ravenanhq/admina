import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { CardHeader } from "@mui/material";

const PullUpGroupAvatar = () => {
  return (
    <>
      <CardHeader
        title="Pullup Avatar"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
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
