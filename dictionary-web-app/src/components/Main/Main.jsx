import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import NotFound from "../NotFound/NotFound.jsx";
import DisplayResult from "../DisplayResult/DisplayResult.jsx";

function Main() {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);

  const [data, setData] = useState([]);

  const getData = async function () {
    try {
      console.log("word", word);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      console.log("response", response.data[0]);

      setError(false);
      setWordNotFound(false);

      setData(() => response.data[0]);
      console.log("data", data);
    } catch (error) {
      console.log(error);
      setWordNotFound(true);
    }
  };

  const handleChange = function (e) {
    setWord(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!word.trim()) {
      setError(true);
    } else {
      setError(false);
      getData();
    }
  };

  return (
    <form className={`form ${error ? "error" : ""}`}>
      <div className="input-control">
        <label className="form__label" htmlFor="word-search">
          Search
        </label>
        <input
          className="form__input"
          id="word-search"
          type="text"
          placeholder="Search for any word..."
          value={word}
          onChange={handleChange}
          autoComplete="off"
        />
        <span>
          <SearchIcon className="search-icon" />
        </span>
        <button
          onClick={handleSubmit}
          type="submit"
          className="form__submit-btn"
        >
          submit
        </button>
      </div>
      {error && (
        <span className="error-label h-sm">Whoops, can't be empty...</span>
      )}

      {wordNotFound ? <NotFound /> : <DisplayResult data={data} />}
    </form>
  );
}

export default Main;
