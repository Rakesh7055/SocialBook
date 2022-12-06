import React, { useState, useEffect } from "react";
import "./language.css";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";

const getLocalItems = () => {
  let list = localStorage.getItem("lang");
  if (list) {
    return localStorage.getItem("lang");
  } else {
    return [];
  }
};

const Language = () => {
  const [lan, setLan] = useState(getLocalItems);

  const language = [
    { name: "English", prifix: "en" },
    { name: "Hindi", prifix: "hi" },
  ];
  const navigate = useNavigate();

  const languageHandler = () => {
    i18next.changeLanguage(lan);
    navigate("/loginpage");
  };

  const slectLanguage = (e) => {
    setLan(e.target.name);
  };

  useEffect(() => {
    localStorage.setItem("lang", lan);
  }, [lan]);

  return (
    <>
      <div className="container_main">
        <h1>Please select language?</h1>
        {language.map((item) => (
          <div className="slect">
            <input
              type="checkbox"
              name={item.prifix}
              onChange={slectLanguage}
              checked={lan === item.prifix}
            />
            <h3>{item.name}</h3>
          </div>
        ))}
        <div>
          <button className="btn btn2" onClick={languageHandler}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Language;
