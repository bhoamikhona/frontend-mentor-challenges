import React, { useState, useEffect } from "react";
import "./FontSwitch.css";
import { ReactComponent as DropDownIcon } from "../../assets/images/icon-arrow-down.svg";

function FontSwitch() {
  const fonts = {
    sans: "Sans Serif",
    serif: "Serif",
    mono: "Mono",
  };

  const [currentFont, setCurrentFont] = useState(() => {
    return localStorage.getItem("font") || "sans";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("font", currentFont);
    document.querySelector("body").setAttribute("font-choice", currentFont);
  }, [currentFont]);

  const setFont = function (fontChoice) {
    setCurrentFont(fontChoice);
    setOpen(false);
  };

  const switchFont = function (e) {
    const fontChoice = e.target.value;
    setFont(fontChoice);
  };

  const handleOpen = function () {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__btn b-md" onClick={handleOpen}>
        <div className="dropdown__text">
          <span className="dropdown__selected-text">{fonts[currentFont]}</span>
          <DropDownIcon />
        </div>
      </button>
      {open && (
        <ul className="menu">
          {Object.keys(fonts).map((font) => (
            <li key={font} className="menu-item">
              <button
                onClick={switchFont}
                className={`menu-btn ${font} b-md`}
                value={font}
              >
                {fonts[font]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FontSwitch;
