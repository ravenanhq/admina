"use client";
import Notifications from "../components/NotificationDetails/Notifications";
import "../components/NotificationDetails/Notification.css";

const notificationPage = () => {
  return (
    <section>
      <div style={{ paddingTop: 10 }}>
        <Notifications />
      </div>
    </section>
  );
};
export default notificationPage;
