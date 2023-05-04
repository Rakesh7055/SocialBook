import React from "react";
import "./right.css";
import Profile from "../../assets/photo (8).jpg";
import UserProfile from "../UserProfile/Index";

const Right = () => {
  return (
    <>
      <div>
        <UserProfile />
        <div className="container__right">
          <div className="friend-request">
            <h4>Requests</h4>
            <div className="request">
              <div className="info">
                <div className="profile-photo">
                  <img src={Profile} />
                </div>
                <div>
                  <h5>Romi singh</h5>
                  <p className="text-muted">5 mutural friends</p>
                </div>
              </div>
              <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn">Decline</button>
              </div>
            </div>
            <div className="request">
              <div className="info">
                <div className="profile-photo">
                  <img src={Profile} />
                </div>
                <div>
                  <h5>Romi singh</h5>
                  <p className="text-muted">5 mutural friends</p>
                </div>
              </div>
              <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn">Decline</button>
              </div>
            </div>
            <div className="request">
              <div className="info">
                <div className="profile-photo">
                  <img src={Profile} />
                </div>
                <div>
                  <h5>Romi singh</h5>
                  <p className="text-muted">5 mutural friends</p>
                </div>
              </div>
              <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn">Decline</button>
              </div>
            </div>
            <div className="request">
              <div className="info">
                <div className="profile-photo">
                  <img src={Profile} />
                </div>
                <div>
                  <h5>Romi singh</h5>
                  <p className="text-muted">5 mutural friends</p>
                </div>
              </div>
              <div className="action">
                <button className="btn btn-primary">Accept</button>
                <button className="btn">Decline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
