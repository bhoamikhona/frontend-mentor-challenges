import React, { useEffect, useState } from "react";
import "./ResultHeader.css";
import { ReactComponent as PlayIcon } from "../../assets/images/icon-play.svg";

function ResultHeader({ data }) {
  const { word, phonetic, phonetics } = data;
  const [soundSrc, setSoundSrc] = useState("");

  useEffect(() => {
    if (phonetics && phonetics.length > 0) {
      const audio =
        phonetics.find((phonetic) => phonetic.audio !== "")?.audio || "";
      setSoundSrc(audio);
    }
  }, [phonetics]);

  const play = (e) => {
    e.preventDefault();
    if (soundSrc) {
      new Audio(soundSrc).play();
    }
  };

  return (
    <div className="result-header">
      <div className="result-header__left">
        <h1 className="result-header__heading h-lg">{word}</h1>
        <span className="result-header__pronounce">{phonetic}</span>
      </div>
      <div className="result-header__right">
        {soundSrc && (
          <button className="play-btn" onClick={play}>
            <PlayIcon className="play-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultHeader;
