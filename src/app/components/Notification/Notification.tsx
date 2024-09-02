import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationList from "./NotficationList";

const NotificationButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        color="inherit"
        sx={{ color: "rgba(0,0,0,.5)" }}
        onClick={handleButtonClick}
      >
        <Badge badgeContent={notificationCount} color="error">
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>

      <NotificationList
        anchorEl={anchorEl}
        handleClose={handleClose}
        onNotificationChange={setNotificationCount}
      />
    </>
  );
};

export default NotificationButton;
