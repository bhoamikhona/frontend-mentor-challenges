import React from "react";
import "./ThemeToggle.css";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";

const ThemeToggle = function () {
  const setDarkMode = function () {
    document.querySelector("body").setAttribute("theme-choice", "dark");
  };

  const setLightMode = function () {
    document.querySelector("body").setAttribute("theme-choice", "light");
  };

  const toggleTheme = function (e) {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="theme-toggle__container">
      <input
        className="theme-toggle__input"
        type="checkbox"
        id="theme-toggle"
        onChange={toggleTheme}
      />
      <label className="theme-toggle__label" htmlFor="theme-toggle"></label>
      <Moon className="moon-icon" />
    </div>
  );
};
export default ThemeToggle;
