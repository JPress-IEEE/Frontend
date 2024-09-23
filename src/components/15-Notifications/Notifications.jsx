import React, { useEffect, useState } from "react";
import "./Notifications.css";

// استيراد البيانات من الملف الجديد Notifications.json
import data from "./Notifications.json";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // تحميل البيانات من ملف JSON
    setNotifications(data);
  }, []);

  return (
    <div className="container mt-5 Notifications">
      {notifications.map((notification ) => (
        <div className="content-container " key={notification.id}>
          <img
            className="profile-image-container"
            src={notification.image}
            alt={notification.name}
          />
          <div className="article-snippet">
            <p className="content-block">
              <span className=" highlighted-text-block">
                {notification.name  }
              </span>
              <span className="ml-2 text-block-style">
                {notification.description}
              </span>
            </p>
            <p className="time-posted-text-style">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

