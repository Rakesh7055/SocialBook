import React from "react";
import { Notification } from "../../Cost";
import "./style.css";

const Index = () => {
  return (
    <>
      <div className=" notification_container">
        <div className="notification_popup">
          <h2>Noticication</h2>
          {Notification.map(({ id, profile_img, user, activity, time }) => {
            return (
              <div>
                <div key={id} className="profile-photo userNotification_img">
                  <img src={profile_img} alt="" />
                </div>
                <div className="notification_body">
                  <b>{user} </b> {activity} <br />
                  <small className="text-muted"> {time}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
