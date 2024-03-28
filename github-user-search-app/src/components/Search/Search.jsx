import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

function Search() {
  const [error, setError] = useState(false);
  return (
    <form className="search-form">
      <div className="search-icon-container">
        <SearchIcon className="search-icon" />
      </div>
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <input
        type="text"
        className="search-input"
        id="search"
        placeholder="Search GitHub username..."
        autoComplete="off"
        spellCheck="off"
      />
      <span className={`search-error ${!error && "hidden"}`}>No results</span>
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default Search;
