import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";

const ThemeToggle = function () {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || (storedTheme === null && prefersDarkMode);
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.setAttribute("theme-choice", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = function () {
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
      />
      <label className="theme-toggle__label" htmlFor="theme-toggle"></label>
      <Moon className="moon-icon" />
    </div>
  );
};

export default ThemeToggle;
