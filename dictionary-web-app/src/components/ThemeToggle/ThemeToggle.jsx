import React, { useState } from "react";
import "./ThemeToggle.css";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";

const ThemeToggle = function () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = function () {
    const themeChoice = isDarkMode ? "light" : "dark";
    document.body.setAttribute("theme-choice", themeChoice);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle__container">
      <input
        className="theme-toggle__input"
        type="checkbox"
        id="theme-toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem("theme-choice")}
      />
      <label className="theme-toggle__label" htmlFor="theme-toggle"></label>
      <Moon className="moon-icon" />
    </div>
  );
};

export default ThemeToggle;
