import React from "react";
import { FaEdit } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
import { messege } from "../../Cost";

const Index = () => {
  return (
    <>
      <div className="container__right">
        <div className="right">
          <div className="message_head">
            <h4>Messeages</h4>
            <i>
              <FaEdit />
            </i>
          </div>
          <div className="search_bar">
            <i>
              <BsSearch />
            </i>
            <input
              type="search"
              placeholder="search messages"
              id="message-search"
            />
          </div>
          <div className="heading">
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="message-request">Requests(6)</h6>
          </div>
          <div className="sms">
            {messege.map(({ id, profile_img, user, sms }) => {
              return (
                <>
                  <NavLink
                    key={id}
                    to={`${user}`}
                    className={({ isActive }) => {
                      return `messages ${isActive ? "active" : ""}`;
                    }}
                  >
                    <div className="profile-photo">
                      <img src={profile_img} />
                      <div className="online"></div>
                    </div>
                    <div className="messege-body">
                      <h5>{user}</h5>
                      <p className="text-muted">{sms}</p>
                    </div>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Index;
