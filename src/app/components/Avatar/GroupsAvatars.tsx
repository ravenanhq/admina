import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatars from "./avatar.json";
import { CardHeader } from "@mui/material";

const GroupsAvatars = () => {
  return (
    <>
      <CardHeader
        title="Breadcrumbs With Icons"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
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
