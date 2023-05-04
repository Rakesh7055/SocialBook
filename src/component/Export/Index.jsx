import React, { useState } from "react";
// import Ram_setu from '../../assets/Ram_Setu_2022_Full_Hindi_Movie-(Pagalmovies.autos).mp4'
import "./style.css";
import Reactpip from "react-picture-in-picture";
import Profile from "../../assets/photo (8).jpg";

const content = [
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
  {
    url: "https://cdn.arnellebalane.com/videos/original-video.mp4",
    title: "Why Marshall Speakers Are So Expensive?",
    channel: "Tech Burner",
    view: 5.1 + "M",
    time: 2 + "days ago",
  },
];

const Index = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="containerss">
        <h2>Explore</h2>
        <div className="video_section">
          {content.map((item) => (
            <>
              <div className="video_detail">
                <Reactpip isActive={active} className="video_v">
                  <source src={item.url} />
                </Reactpip>
                <div className="video_info">
                  <div className="profile-photo channel_img">
                    <img src={Profile} />
                  </div>
                  <div className="video_heading">
                    <h1>{item.title}</h1>
                    <h5>{item.channel}</h5>
                    <h5>
                      {item.view} <span>.</span> {item.time}
                    </h5>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div className="channel_section">
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-photo">
            <img src={Profile} alt="" />
          </div>
        </div> */}
        {/* <button className='btn' onClick = {() => setActive(!active)}>Toggle Picture in Picture</button> */}
      </div>
      {/* <div className='video'>
      <video onChange={picture} width={200} src={Ram_setu}></video>
      <button onClick={pIp} className='btn'>PictureAndPicture</button>
    </div> */}
    </>
  );
};

export default Index;
