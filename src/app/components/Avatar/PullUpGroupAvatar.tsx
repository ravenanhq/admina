import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { Typography } from "@mui/material";

const PullUpGroupAvatar = () => {
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
