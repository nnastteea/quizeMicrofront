import React from "react";

import hostAppText from "../../constant/text";

import "./styles.css";

function Notification() {
  return (
    <div className="notificationContainer">
      <p>{hostAppText.notification.notificationMessage}</p>
      <span className="notification"></span>
    </div>
  );
}

export default Notification;
