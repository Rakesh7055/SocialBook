import React from "react";
import "./style.css";

const Index = () => {
  const setColor = (colors) => {
    document.documentElement.style.setProperty("--color-primary", colors);
  };

  const setBackground = (e) => {
    let colors = e.target.value;
    if (colors === "white") {
      document.documentElement.style.setProperty(
        "--color-white",
        "hsl(252, 30%, 17%)"
      );
      document.documentElement.style.setProperty("--color-black", "white");
      document.documentElement.style.setProperty("--color-dark", colors);
    } else if (colors === "hsl(252, 30%, 17%)") {
      document.documentElement.style.setProperty("--color-white", "white");
      document.documentElement.style.setProperty("--color-dark", colors);
      document.documentElement.style.setProperty("--color-black", "black");
    }
  };

  return (
    <div className="theme ">
      <div className="theme_section">
        <h1>Customize your view</h1>
        <p>Manage your font size, color and Background</p>
      </div>
      <div className="theme_section">
        <h2>Font-size</h2>
        <div className="font_section">
          <h5>Aa</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="310"
            height="50"
            className="fontSize"
          >
            <line
              x1="10"
              y1="25"
              x2="300"
              y2="25"
              stroke="white"
              stroke-width="4"
            />

            <circle cx="10" cy="25" r="5" fill="white" />
            <circle cx="85" cy="25" r="6" fill="white" />
            <circle cx="160" cy="25" r="7" fill="white" />
            <circle cx="230" cy="25" r="8" fill="white" />
            <circle cx="300" cy="25" r="9" fill="white" />
          </svg>
          <h1>Aa</h1>
        </div>
      </div>
      <div className="theme_section color_section">
        <h2>Color</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="50"
          className="font_section"
        >
          <circle
            cx="40"
            cy="25"
            r="15"
            fill="red"
            onClick={() => setColor("red")}
          />
          <circle
            cx="120"
            cy="25"
            r="15"
            fill="#89890a"
            onClick={() => setColor("#89890a")}
          />
          <circle
            cx="200"
            cy="25"
            r="15"
            fill="green"
            onClick={() => setColor("green")}
          />
          <circle
            cx="280"
            cy="25"
            r="15"
            fill="#05739f"
            onClick={() => setColor("#05739f")}
          />
          <circle
            cx="350"
            cy="25"
            r="15"
            fill="blue"
            onClick={() => setColor("blue")}
          />
        </svg>
      </div>
      <div className="theme_section ">
        <h2>Background</h2>
        <div className="background_section">
          <button className="color_theme" value="white" onClick={setBackground}>
            Light
          </button>
          <button
            className="color_theme"
            value="hsl(252, 30%, 17%"
            onChange={setBackground}
          >
            Dark
          </button>
          <button className="color_theme" onClick={setBackground}>
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
