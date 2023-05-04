import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Profile from "../../assets/photo (8).jpg";
import { useState } from "react";
import { FaRoad } from "react-icons/fa";

const UserProfile = () => {
  return (
    <>
      <h2 className="profile_detail">Profile</h2>
      <div className=" contaienr profile_container">
        <div className="user-profile">
          <img src={Profile} alt="Profile" className="profile-image" />
          <h2>Romi Bisht</h2>
          <h5>@Romi</h5>
          <p className="caption">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="button-group">
            <div className="profileBtn">
              <button className="userbtn">+</button>
              <label htmlFor="">Add story</label>
            </div>
            <div className="profileBtn">
              <button className=" userbtn">
                <FaRoad />
              </button>
              <label htmlFor="">Edit Profile</label>
            </div>
            <div className="profileBtn">
              <button className=" userbtn">:</button>
              <label htmlFor="">More</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//   const [edit, setEdit] = useState("");
//   const [state, setState] = useState({
//     profile: "",
//     user: "",
//     userName: "",
//     caption: "",
//   });

//   const submit = () => {};
//   return (
//     <>
//       <div className=" contaienr profile_container">
//         <div className="profile-photo user-photo">
//           <img src={state.profile} alt="profile" />
//         </div>
//         {/* <button className="editButton" onClick={(e) => setEdit(e.target)}>
//           edit
//         </button>
//         {edit ? (
//           <form action="#" onSubmit={submit} className="edit">
//             <input
//               type="flie"
//               className="editProfile"
//               name="file"
//               onChange={(e) => setState.profile(e.target.files[0])}
//             />
//             <input
//               type="text"
//               placeholder="User name"
//               className="editInput"
//               name="user"
//               onChange={(e) => setState.user(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="User"
//               className="editInput"
//               name="userName"
//               onChange={(e) => setState.userName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Caption"
//               className="editInput"
//               name="caption"
//               onChange={(e) => setState.caption(e.target.value)}
//             />
//           </form>
//         ) : null} */}
//         <div className="user_card">
//           <h2>{state.user}</h2>
//           <h6>{state.userName}</h6>
//           <p>{state.caption}</p>
//         </div>
//         <hr />
//         <div className="info">
//           <div className="following">
//             <h2>343</h2>
//             <h5>following</h5>
//           </div>
//           <div className="followers">
//             <h2>343</h2>
//             <h5>followers</h5>
//           </div>
//         </div>
//         <Link className="active">My Profile</Link>
//       </div>
//     </>
//   );
// };

export default UserProfile;
