import React from "react";
import "./NotFound.css";
import ConfusedSmiley from "../../assets/images/confused-smiley.png";

function NotFound() {
  return (
    <div className="not-found">
      <div className="emoji-container">
        <img className="emoji" src={ConfusedSmiley} alt="confused smiley" />
      </div>
      <h2 className="not-found__heading h-sm">No Definitions Found</h2>
      <p className="not-found__message">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFound;
