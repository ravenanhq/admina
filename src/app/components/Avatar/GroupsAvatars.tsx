import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { CardHeader, Typography } from "@mui/material";

const GroupsAvatars = () => {
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "12px", color: "#747474", marginLeft: "25px" }}
      >
        Default
      </Typography>
      <AvatarGroup
        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        total={4251}
        sx={{ justifyContent: "start" }}
      >
        {avatars.map((avatar, index) => (
          <Avatar key={index} alt={avatar.name} src={avatar.image} />
        ))}
      </AvatarGroup>
    </>
  );
};

export default GroupsAvatars;
