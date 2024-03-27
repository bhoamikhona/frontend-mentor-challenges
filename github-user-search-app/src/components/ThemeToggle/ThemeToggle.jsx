import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";
import { ReactComponent as LightIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as DarkIcon } from "../../assets/icon-moon.svg";

function ThemeToggle() {
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      <span className="toggle-text">{isDarkMode ? "Light" : "Dark"}</span>
      <span className="toggle-icon">
        {isDarkMode ? (
          <LightIcon className="light-icon icon" />
        ) : (
          <DarkIcon className="dark-icon icon" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
