import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  useMediaQuery,
   useTheme
} from "@mui/material";
import { useEffect, useState } from "react";
import notificationData from "../../../notifications.json";
import NotificationItem from "./NotificationItem";
import MessageIcon from "@mui/icons-material/Message";

enum NotificationStatus {
  unRead = "unread",
  read = "read",
}

const NotificationList = ({ anchorEl, handleClose, onNotificationChange }) => {
  const [notifications, setNotifications] = useState([]);
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setNotifications(notificationData);
    onNotificationChange(notificationData.length);
  }, []);

  const handleItemClose = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    onNotificationChange(notifications.length - 1);
  };

  const open = Boolean(anchorEl);

  const handleViewAllNotifications = () => {
    setShowAllNotifications(true);
  };

  const handleClearAll = () => {
    setNotifications([])
    onNotificationChange(0);
  }

  const handleItemClick = (id: number) => {
    const clickedNotification = notifications.find(
      (notification) => notification.id === id
    );
    if (clickedNotification.status === NotificationStatus.unRead) {
      const updatedNotifications = notifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: NotificationStatus.read }
          : notification
      );
      setNotifications(updatedNotifications);
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List sx={{ padding: "0" }}>
        <ListItem divider sx={{ background: "#1976d2" }}>
          <ListItemText
            primary="Notifications"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 0,
              color: "#fff",
            }}
          ></ListItemText>
          <ListItemIcon sx={{ justifyContent: "end" }}>
            <MessageIcon style={{ color: "#fff" }} />
          </ListItemIcon>
        </ListItem>

        {notifications.length === 0 ? (
          <ListItem divider alignItems="center">
            <ListItemText
              primary="No notifications"
              primaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
        ) : (
          <>
            {showAllNotifications
              ? notifications
                  .slice()
                  .reverse()
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      handleItemClick={handleItemClick}
                      handleItemClose={handleItemClose}
                    />
                  ))
              : notifications
                  .slice(-4)
                  .reverse()
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      handleItemClick={handleItemClick}
                      handleItemClose={handleItemClose}
                    />
                  ))}
           
              <ListItem
                button
                alignItems="center"
              > {!showAllNotifications && notifications.length !== 0 && (
                <ListItemText
                  primary="View All Notifications"
                  onClick={handleViewAllNotifications}
                  primaryTypographyProps={{ align: "center", color: "#1976d2",fontSize: isMobile ? "15px" : "16px"}}
                />
                 )}
                <ListItemText
                primary="Clear All"
                onClick={handleClearAll}
                primaryTypographyProps={{ align: "center", color: "#1976d2",fontSize: isMobile ? "15px" : "16px" }}
              />
              </ListItem>
           
          </>
        )}
      </List>
    </Popover>
  );
};

export default NotificationList;
