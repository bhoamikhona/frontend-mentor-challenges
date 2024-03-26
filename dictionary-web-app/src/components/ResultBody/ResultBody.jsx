import React from "react";
import "./ResultBody.css";

function ResultBody({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="result-body">
      <div className="result-body__heading-container h-md">
        <h2 className="result-body__heading">{partOfSpeech}</h2>
        <hr className="hr" />
      </div>
      <div className="result-body__list-container">
        <h3 className="result-body__sub-heading h-sm">Meaning</h3>
        <ul className="result-body__list">
          {definitions.map((def) => (
            <li className="result-body__list-item">{def.definition}</li>
          ))}
        </ul>
      </div>
      {synonyms?.length > 0 && (
        <div className="result-body__synonym-container">
          <h3 className="result-body__sub-heading">Synonyms</h3>
          <div className="result-body__synonym-wrapper">
            {synonyms.map((syn) => (
              <span className="result-body__synonym h-sm">
                {syn}
                {synonyms.length > 1 &&
                  synonyms.indexOf(syn) !== synonyms.length - 1 && (
                    <span>,</span>
                  )}
              </span>
            ))}
            {/* <span className="result-body__synonym h-sm">
              electronic keyboard
            </span> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultBody;
