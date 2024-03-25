import React from "react";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import FontSwitch from "../FontSwitch/FontSwitch.jsx";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
          <div className="logo__container">
            <Logo className="logo" />
          </div>
        </div>
        <div className="nav__right">
          <FontSwitch />
          <div className="decorative-vertical-line" role="presentation"></div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
