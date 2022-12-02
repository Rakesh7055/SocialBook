import React from "react";
import "./style.css";
import Profile from "../../assets/photo (8).jpg";
import { AiFillHome } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillCompass } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import { BsFillPaletteFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Index = () => {
  const homePage = (e) => {};

  return (
    <div className=" container__left">
      <div className="left">
        <Link className="profile">
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="handle">
            <h4>Romi Singh</h4>
            <p className="text-muted">@romi</p>
          </div>
        </Link>

        <div className="sidebar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` menu_item   ${isActive ? "active" : "inactive"}`
            }
            onClick={homePage}
          >
            <span>
              <i>
                <AiFillHome />
              </i>
            </span>{" "}
            <h3>Home</h3>
          </NavLink>

          <NavLink to={"/Explore"} className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}>
            <span>
              <i>
                <AiFillCompass />
              </i>
            </span>
            <h3>Explore</h3>
          </NavLink>

          <NavLink
            to="/Notification"
            className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}
            id="notification"
          >
            <span>
              <i>
                <BsFillBellFill />
              </i>
              <small className="notification-count">9+</small>
            </span>
            <h3>Notification</h3>
          </NavLink>

          <NavLink
            to="/Messages"
            className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}
            id="messegse-notification"
          >
            <span>
              <i>
                <BsFillEnvelopeFill />
              </i>
              <small className="notification-count">6</small>
            </span>
            <h3>Messages</h3>
          </NavLink>

          <NavLink to="/" className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}>
            <span>
              <i>
                <BsFillBookmarkCheckFill />
              </i>
            </span>
            <h3>Bookmarks</h3>
          </NavLink>

          <NavLink to="/Analytics" className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}>
            <span>
              <i>
                <DiGoogleAnalytics />
              </i>
            </span>
            <h3>Analytics</h3>
          </NavLink>

          <NavLink to="/Theme" className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}>
            <span>
              <i>
                <BsFillPaletteFill />
              </i>
            </span>
            <h3>Theme</h3>
          </NavLink>
          {/* <Theme/> */}

          <NavLink to="/Setting" className={({ isActive }) => {
              return ` menu_item   ${isActive ? "active" : "inactive"}`;
            }}>
            <span>
              <i>
                <AiFillSetting />
              </i>
            </span>
            <h3>Setting</h3>
          </NavLink>
        </div>

        {/* <label htmlFor="Create-post" className='btn btn-primary'>Create Post</label> */}
      </div>
    </div>
  );
};

export default Index;
