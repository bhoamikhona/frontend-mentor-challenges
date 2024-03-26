import React from "react";
import "./DisplayResult.css";
import ResultHeader from "../ResultHeader/ResultHeader.jsx";
import ResultBody from "../ResultBody/ResultBody.jsx";
import ResultSource from "../ResultSource/ResultSource.jsx";

function DisplayResult({ data }) {
  return (
    <section className="display-result">
      {data && <ResultHeader data={data} />}

      {data?.meanings &&
        data.meanings.map((content, index) => (
          <ResultBody key={index} {...content} />
        ))}

      {data.sourceUrls && (
        <>
          <hr className="hr" />
          <ResultSource source={data.sourceUrls?.[0]} />
        </>
      )}
    </section>
  );
}

export default DisplayResult;
