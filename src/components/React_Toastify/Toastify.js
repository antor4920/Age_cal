import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  function ShowNotification() {
    toast("I am the notification");
  }

  return (
    <div>
      <button onClick={ShowNotification}>show Notification</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
