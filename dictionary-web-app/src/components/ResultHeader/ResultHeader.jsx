import React from "react";
import "./ResultHeader.css";
import { ReactComponent as PlayIcon } from "../../assets/images/icon-play.svg";

function ResultHeader({ data }) {
  const { word, phonetic } = data;
  return (
    <div className="result-header">
      <div className="result-header__left">
        <h1 className="result-header__heading h-lg">{word}</h1>
        <span className="result-header__pronounce">{phonetic}</span>
      </div>
      <div className="result-header__right">
        {word && (
          <button className="play-btn">
            <PlayIcon className="play-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultHeader;
