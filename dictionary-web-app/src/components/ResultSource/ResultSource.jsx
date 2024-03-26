import React from "react";
import "./ResultSource.css";
import { ReactComponent as LinkIcon } from "../../assets/images/icon-new-window.svg";

function ResultSource({ source }) {
  return (
    <div className="result-source">
      <a href={source} target="blank" className="result-source__link b-sm">
        <h4 className="result-source__heading">Source</h4>
        <p className="result-source__link-address">{source}</p>
        <LinkIcon />
      </a>
    </div>
  );
}

export default ResultSource;
