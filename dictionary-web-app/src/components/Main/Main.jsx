import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import NotFound from "../NotFound/NotFound.jsx";
import DisplayResult from "../DisplayResult/DisplayResult.jsx";
import { Triangle } from "react-loader-spinner";

function Main() {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const getData = async function () {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      setError(false);
      setWordNotFound(false);

      setData(response.data[0]);
    } catch (error) {
      setWordNotFound(true);
    } finally {
      setLoading(false);
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

        <button
          onClick={handleSubmit}
          type="submit"
          className="form__submit-btn"
        >
          <SearchIcon className="search-icon" />
        </button>
      </div>
      {error && (
        <span className="error-label h-sm">Whoops, can't be empty...</span>
      )}
      {loading && (
        <div className="loader-container">
          <Triangle
            visible={true}
            height={80}
            width={80}
            color="#a445ed"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            className="loader"
          />
        </div>
      )}
      {!loading && wordNotFound ? (
        <NotFound />
      ) : (
        !loading && <DisplayResult data={data} />
      )}
    </form>
  );
}

export default Main;
