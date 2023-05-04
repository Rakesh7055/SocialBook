import React from "react";
import "./nav.css";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import profile from "../../assets/photo (8).jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigaton = useNavigate();

  const searchItem = () => {};

  const logOut = (e) => {
    e.preventDefault();
    navigaton("/loginpage");
  };

  const response = {};
  return (
    <nav>
      <div className="container container__nav">
        <h1>SocialBook</h1>

        <div className="search__bar">
          <BsSearch />
          <input
            type="search"
            onChange={searchItem}
            placeholder="search for creators and projects"
          />
        </div>
        <NavLink
          to="/Notification"
          className={({ isActive }) => {
            return ` menu_item nav_menu   ${isActive ? "active" : "inactive"}`;
          }}
          id="notification"
        >
          <span>
            <i>
              <BsFillBellFill />
            </i>
            {/* <small className="notification-count">9+</small> */}
          </span>
        </NavLink>

        <div className="create">
          <label htmlFor="Create post" className="btn btn-primary">
            Create
          </label>
          <label className="btn btn-primary" onClick={logOut}>
            Logout
          </label>
          <div className="profile-photo">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
