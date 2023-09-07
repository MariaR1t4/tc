'use client'
import { useState } from "react";


const NotificationButton = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <button
      className={`${
        notificationsEnabled
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-400 hover:bg-gray-500"
      } text-white font-semibold py-2 px-4 rounded focus:outline-none ml-96`}
      onClick={toggleNotifications}
    >
      {notificationsEnabled ? "Ativado" : "Desativado"}
    </button>
  );
};

export default NotificationButton;






