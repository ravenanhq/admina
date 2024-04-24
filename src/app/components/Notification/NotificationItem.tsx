import {
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

enum NotificationStatus {
  unRead = "unread",
  read = "read",
}

const NotificationItem = ({
  notification,
  handleItemClick,
  handleItemClose,
}) => {
  const calculateTimeDifference = (previousTime: Date): string => {
    if (!previousTime) {
      return "";
    }
    const currentTime = new Date();
    const difference = Math.round(
      (currentTime.getTime() - previousTime.getTime()) / (1000 * 60)
    );

    if (difference < 60) {
      return `${difference} min ago`;
    } else {
      return `${Math.round(difference / 60)} hr ago`;
    }
  };

  return (
    <ListItem
      key={notification.id}
      button
      divider
      style={{ justifyContent: "space-between" }}
    >
      <Avatar style={{ marginRight: "8px" }}>
        {notification.image ? (
          <img
            src={notification.image}
            alt="Notification Icon"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <NotificationsActiveIcon />
        )}
      </Avatar>
      <div className="flex" onClick={() => handleItemClick(notification.id)}>
        <ListItemText
          primary={
            <>
              <Typography
                variant="body1"
                component="span"
                style={{ display: "inline" }}
              >
                {notification.header}
              </Typography>
              {notification.status === NotificationStatus.unRead && (
                <Typography
                  variant="body2"
                  color="primary"
                  style={{ marginLeft: "4px", display: "inline" }}
                >
                  New
                </Typography>
              )}
            </>
          }
          secondary={notification.subheading}
        />
        <Typography
          variant="body2"
          display="block"
          sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "10px" }}
        >
          {notification.time &&
            calculateTimeDifference(new Date(notification.time))}
        </Typography>
      </div>
      <IconButton
        edge="end"
        aria-label="close"
        onClick={() => handleItemClose(notification.id)}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default NotificationItem;
