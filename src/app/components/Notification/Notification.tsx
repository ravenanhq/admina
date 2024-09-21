import { Badge, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationButton = () => {

  return (
    <>
      <IconButton
        color="inherit"
        sx={{ color: "rgba(0,0,0,.5)" }}
      >
        <Badge
          badgeContent="12"
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              background: "#CE0000",
              padding: "0",
            },
          }}
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default NotificationButton;
