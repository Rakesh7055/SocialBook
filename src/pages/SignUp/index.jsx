import React, { useState } from "react";
import "./style.css";
import frontimg from "../../assets/frontpage.png";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useUserContext } from "../../context/userContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const { logIn } = useUserContext();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    user: "",
    userName: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigaton = useNavigate();

  let value, name;
  const poetUserData = (e) => {
    value = e.target.value;
    name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    logIn(userData.user);
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: userData.user,
        });
        navigaton("/");
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        console.log(error.message);
      });
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
              required
            />
            <input
              className="signup"
              name="password"
              type="password"
              value={userData.password}
              placeholder="password"
              onChange={poetUserData}
              required
            />
            <input
              className="signup"
              name="user"
              type="text"
              value={userData.user}
              placeholder="user"
              onChange={poetUserData}
              required
            />
            <input
              className="signup"
              name="userName"
              type="text"
              value={userData.userName}
              placeholder="username"
              onChange={poetUserData}
              required
            />
            <button className="btn1" disabled={submitButtonDisabled}>
              SignUp
            </button>
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
