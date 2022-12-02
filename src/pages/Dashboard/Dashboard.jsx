import React from "react";
import "./Dashboards.css";
import Home from "../../component/Home/Index";
import Right from "../../component/main_right/Right";
import Index from "../../component/userProfile/Index";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="Dashboards">
        <div>
          <Home />
        </div>
        {/* <Outlet /> */}

        <div className="user_p">
          <Index />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
