import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Profile from "../../assets/photo (8).jpg";

const Index = () => {
  return (
    <>
      <div className="profile_container">
        <div className="profile-photo user-photo">
          <img src={Profile} alt="" />
        </div>
        <div className="user_card">
          <h2>Romi singh</h2>
          <h6>@netaji</h6>
          <p>#Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <hr />
        <div className="info">
          <div className="following">
            <h2>343</h2>
            <h5>following</h5>
          </div>
          <div className="followers">
            <h2>343</h2>
            <h5>followers</h5>
          </div>
        </div>
        <Link className="active">My Profile</Link>
      </div>
    </>
  );
};

export default Index;
