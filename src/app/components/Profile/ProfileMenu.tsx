import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "../../../Icons/avatar-header.svg";
import { ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { signOut } from "next-auth/react";
import Logout from "@mui/icons-material/Logout";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = async () => {
    await signOut();
    handleClose();
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,

              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            "& .MuiButtonBase-root": {
              fontSize: "14px",
              color: "#565656",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "14px",
              color: "#565656",
            },
            "& .MuiListItemIcon-root": {
              minWidth: "20px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleSignout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileMenu;
