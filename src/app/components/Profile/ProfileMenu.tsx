import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "../../../Icons/avatar-header.svg";
import { Typography } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  return (
    <React.Fragment>
      <Tooltip title="">
        <IconButton
          color="inherit"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "#565656",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          <Typography variant="subtitle2" sx={{ mx: 1 }}>
            Alice Johnson
          </Typography>
          {open ? <ExpandLessIcon /> : <ExpandMoreSharpIcon />}
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
};

export default ProfileMenu;
