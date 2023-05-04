import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Profile from "../../assets/photo (8).jpg";
import { MdVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Index = () => {
  const { profile_img, user } = useParams();
  console.log(user);
  const [msg, setMsg] = useState();
  const ref = useRef(null);

  let inboxMessage = "";
  const message = (e) => {
    inboxMessage = e.target.value;
  };

  const send = (e) => {
    setMsg(inboxMessage);
    ref.current.value = "";
  };

  return (
    <>
      <div className="userContainer">
        <div className="messageHead">
          <div className="profile-photo user_img">
            <img src={Profile} alt={Profile} />
            <div className="online show_online"></div>
          </div>
          <div className="messege-body msg_persion">
            <h3>{user}</h3>
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
          <div className="inbox">{msg ? <p>{msg}</p> : null}</div>

          <div className="sendMessage">
            <button className="more bg">+</button>
            <input
              ref={ref}
              type="text"
              name="msg"
              className="search__bar input_bar"
              onChange={message}
            />
            <button className="bg" onClick={send}>
              <IoIosArrowDropupCircle className="ioio" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
