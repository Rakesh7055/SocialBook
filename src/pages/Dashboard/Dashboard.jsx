import React from "react";
import "./Dashboards.css";
import Right from "../../component/main_right/Right";
import Index from "../../component/UserProfile/Index";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "../../firebase";
import Nav from "../../component/nav/Nav";
import UserProfile from "../../component/UserProfile/Index";
import Left_menu from "../../component/Left_menu/Index";
import Messages from "../../component/Messages/Index";
import Middle from "../../component/main_middle/Middle";

const Dashboard = () => {
  const requestPermission = async () => {
    const permission = Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      alert("het");
      const token = await getToken(messaging, {
        vapidKey:
          "BC1NdjOFf-tCjDjpQlCdd1qG6isEu40eFK66d5Xuk89yV_FuPE7u2aCnOXr7hwYl9a8Pw5luwn0NkVMqWJS9TbM",
      });
      console.log("token generated", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  };

  useEffect(() => {
    //req user for notification permission
    requestPermission();
  }, []);
  return (
    <>
      <Nav />
      <div className="container dashboard">
        <div className="left_sidebar">
          <Left_menu />
        </div>
        <div className="feeds_middle">
          <Middle />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
