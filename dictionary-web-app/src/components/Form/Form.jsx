import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";

function Form() {
  const [word, setWord] = useState("keyboard");
  const [error, setError] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);

  const getData = async function () {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      console.log("response", response);

      const data = response.data;
      console.log("response.data", data);

      const status = response.status;
      console.log("response.status", status);

      setError(false);
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

  useEffect(() => {
    getData();
  }, []);

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
    </form>
  );
}

export default Form;
