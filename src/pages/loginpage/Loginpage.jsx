import React, { useState } from "react";
import "./loginpage.css";
import frontimg from "../../assets/frontpage.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Loginpage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [state, setState] = useState({
    user: "",
    pass: "",
    allEntry: "",
    userErr: "",
    passErr: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  function emialValidationError(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(email)) {
      return " ";
    }
    return "invalid email";
  }

  function passwordValidationError(password) {
    if (!password) {
      return "this field can't be empty";
    } else if (!password.match(/[A-Z]/)) {
      return "Must contain uppercase characters";
    } else if (!password.match(/[a-z]/)) {
      return "Must contain small characters";
    } else if (!password.match(/[0-9]/)) {
      return "Must contain a digit";
    } else if (!password.match(/[!@#$&?]/)) {
      return "Must contain special character";
    } else if (password.length < 7) {
      return "Length must be greater than or equal to 7";
    }
    return "";
  }
  function handleError(key, value) {
    let error = "";
    if (key === "user") {
      error = emialValidationError(value);
    } else if (key === "pass") {
      error = passwordValidationError(value);
    }
    return error;
  }
  function inputHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      setState({
        ...state,
        [name]: value,
        [name + "_error"]: handleError(name, value),
      });
    }
  }
  async function handleSubmission(e) {
    e.preventDefault();
    navigate(from, { replace: true });

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((res) => {
        const user = res.user;

        setSubmitButtonDisabled(false);
        // ...
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        alert(error.message);
      });
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="background"></div>
      <div className="containers">
        <div className="loginpage">
          <img className="img1" src={frontimg} alt="" />
          <h3>{i18next.t("login")}</h3>
          <form action="#">
            {/* <label>
              <HiOutlineUserCircle />
            </label> */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={inputHandler}
              required
            />
            {state.userErr && (
              <span className="suggetion">
                <FaCheckCircle />
              </span>
            )}

            {/* <label>
              <CiLock />
            </label> */}
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={inputHandler}
              required
            />
            {state.passErr ? state.passErr : null}
            <button
              className="btn1"
              disabled={submitButtonDisabled}
              onClick={handleSubmission}
            >
              login
            </button>
          </form>
          <footer>
            New user, SignUp{" "}
            <NavLink to={"/SignUp"}>
              {({ isActive }) => <div>Signup</div>}
            </NavLink>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
