import React from "react";
import "./DisplayResult.css";
import ResultHeader from "../ResultHeader/ResultHeader.jsx";
import ResultBody from "../ResultBody/ResultBody.jsx";
import ResultSource from "../ResultSource/ResultSource.jsx";

function DisplayResult({ data }) {
  return (
    <section className="display-result">
      <ResultHeader data={data} />

      {data?.meanings &&
        data.meanings.map((content) => <ResultBody {...content} />)}

      <hr className="hr" />
      <ResultSource source={data?.sourceUrls[0]} />
    </section>
  );
}

export default DisplayResult;
