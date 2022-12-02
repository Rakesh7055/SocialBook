import React from "react";
import "./nav.css";
import { BsSearch } from "react-icons/bs";
import profile from "../../assets/photo (8).jpg";

const nav = () => {
  const searchItem = () => {};
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

        <div className="create">
          <label htmlFor="Create post" className="btn btn-primary">
            Create
          </label>
          <div className="profile-photo">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default nav;
