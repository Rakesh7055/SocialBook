import React, { useState } from "react";
import "./style.css";
import frontimg from "../../assets/frontpage.png";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    user: "",
    userName: "",
  });
  const navigaton = useNavigate();

  let value, name;
  const poetUserData = (e) => {
    value = e.target.value;
    name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  //   const submitData = async (event) => {
  //     event.preventDefault();
  // const { email, password, user, userName } = userData;
  // if (email && password && user && userName) {
  //   const result = fetch(
  //     "https://socialbook-3d6ed-default-rtdb.firebaseio.com/userDataRecords.json",
  //     {
  //       method: "POST",
  //       Headers: {
  //         "content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //         user,
  //         userName,
  //       }),
  //     }
  //   );
  //   if (result) {
  //     setUserData({
  //       email: "",
  //       password: "",
  //       user: "",
  //       userName: "",
  //     });
  //     alert("Data store");
  //   } else {
  //     alert("fill the data");
  //   }
  // } else {
  //   alert("fill the data");
  // }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password,
        userData.user,
        userData.userName
      );
      alert(result.userUID.user);
      navigaton("/");
    } catch (err) {
      alert("error message");
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="containers">
        <div className="loginpage">
          <img className="img1" src={frontimg} alt="" />
          <h3>SignUp</h3>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <input
              className="signup"
              name="email"
              type="text"
              placeholder="Email"
              value={userData.email}
              onChange={poetUserData}
            />
            <input
              className="signup"
              name="password"
              type="password"
              value={userData.password}
              placeholder="password"
              onChange={poetUserData}
            />
            <input
              className="signup"
              name="user"
              type="text"
              value={userData.user}
              placeholder="user"
              onChange={poetUserData}
            />
            <input
              className="signup"
              name="userName"
              type="text"
              value={userData.userName}
              placeholder="username"
              onChange={poetUserData}
            />
            <button className="btn1">SignUp</button>
          </form>
          <footer className="footer">
            Existing user, Login{" "}
            <NavLink to={"/loginpage"}>
              {({ isActive }) => <div>Login</div>}
            </NavLink>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignUp;
