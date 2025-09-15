import React from "react";

import "./styles.css";

function Notification({ message }: { message: string }) {
  return (
    <div className="notificationContainer" data-cy="notification-message">
      <p>{message}</p>
      <span className="notification"></span>
    </div>
  );
}

export default Notification;
