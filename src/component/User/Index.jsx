import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import "./style.css";
import Profile from "../../assets/photo (8).jpg";
import { MdVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Index = () => {
  // const { profile_img, user = "" } = useParams;
  // console.log(user);
  const [msg, setMsg] = useState("");
  const [state, setState] = useState(false);

  const message = (e) => {
    const dm = e.target.value;
    setMsg(dm);
  };

  return (
    <>
      <div className="userContainer">
        <div className="messageHead">
          <div className="profile-photo">
            <img src={Profile} />
            <div className="online"></div>
          </div>
          <div className="messege-body msg_persion">
            <h3>Romi singh</h3>
            <h6>Online</h6>
          </div>
          <div className="icons">
            <i>
              <MdVideoCall />
            </i>
            <i>
              <MdAddCall />
            </i>
            <i>
              <AiTwotoneSound />
            </i>
            <i>
              <MdAddPhotoAlternate />
            </i>
          </div>
        </div>
        <div className="messagebody">
          <div className="inbox">
            <p>{msg}</p>
          </div>
          <div className="sendMessage">
            <span className="more">+</span>
            <input
              type="text"
              className="search__bar input_bar"
              onChange={message}
            />
            <button className="more bg">
              <IoIosArrowDropupCircle className="ioio" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
