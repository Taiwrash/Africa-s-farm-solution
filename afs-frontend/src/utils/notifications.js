import { NotificationManager } from "react-notifications";

const notification = (type, msg) => {
  switch (type) {
    case "info":
      NotificationManager.info("Welcome");
      break;
    case "success":
      NotificationManager.success(msg, "Great Job!");
      break;
    case "warning":
      NotificationManager.warning(
        "Warning message",
        "Close after 3000ms",
        3000
      );
      break;
    case "error":
      NotificationManager.error(msg, "Try again!", 5000);
      break;
  }
};

export default notification;
