import React from "react";
import "./DisplayResult.css";
import ResultHeader from "../ResultHeader/ResultHeader.jsx";
import ResultBody from "../ResultBody/ResultBody.jsx";

function DisplayResult({ data }) {
  return (
    <section className="display-result">
      <ResultHeader data={data} />
      <ResultBody data={data} />
    </section>
  );
}

export default DisplayResult;
