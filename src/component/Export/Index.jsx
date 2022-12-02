import React, { useState } from "react";
// import Ram_setu from '../../assets/Ram_Setu_2022_Full_Hindi_Movie-(Pagalmovies.autos).mp4'
import "./style.css";
import Reactpip from "react-picture-in-picture";
import Profile from "../../assets/photo (8).jpg";

const Index = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="containerss">
        <div className="video_section">
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
          <Reactpip isActive={active} className="video_v">
            <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
          </Reactpip>
        </div>
        <div className="channel_section">
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
        </div>
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
