import React from "react";
import "./style.css";
import Nav from "../../component/nav/Nav";
import Middle from "../../component/main_middle/Middle";
import Left_menu from "../Left_menu/Index";
import Right from "../../component/main_right/Right";
import { Outlet } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Nav />
      <div className="container grid">
        <div className="left__">
          <Left_menu />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Index;
