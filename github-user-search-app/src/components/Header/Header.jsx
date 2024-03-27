import React from "react";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="logo">devfinder</h1>
      </div>
      <div className="header__right">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
