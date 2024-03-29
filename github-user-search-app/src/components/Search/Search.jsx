// import React, { useState } from "react";
// import "./Search.css";
// import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
// import axios from "axios";

// function Search({ setData, setIsLoading, setUserNotFound }) {
//   const [error, setError] = useState(false);
//   const [user, setUser] = useState("bhoamikhona");

//   const handleSubmit = async function (e) {
//     e.preventDefault();

//     try {
//       setIsLoading(true);
//       const data = await axios.get(`https://api.github.com/users/${user}`);
//       const userData = await data.json();
//       console.log(data);

//       setError(false);
//       setUserNotFound(false);
//       setData(userData);
//     } catch (error) {
//       setUserNotFound(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className="search-form">
//       <div className="search-icon-container">
//         <SearchIcon className="search-icon" />
//       </div>
//       <label htmlFor="search" className="search-label">
//         Search
//       </label>
//       <input
//         value={user}
//         onChange={(e) => setUser(e.target.value)}
//         type="text"
//         className="search-input"
//         id="search"
//         placeholder="Search GitHub username..."
//         autoComplete="off"
//         spellCheck="off"
//       />
//       <span className={`search-error ${!error && "hidden"}`}>No results</span>
//       <button onClick={handleSubmit} className="search-btn">
//         Search
//       </button>
//     </form>
//   );
// }

// export default Search;

import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import axios from "axios";

function Search({ setData, setIsLoading, userNotFound, setUserNotFound }) {
  const [user, setUser] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://api.github.com/users/${user}`);

      // Handle the case when user is not found
      if (data.message === "Not Found") {
        setUserNotFound(true);
        setIsLoading(false);
        return;
      }

      setData(data);
      setUserNotFound(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUserNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-icon-container">
        <SearchIcon className="search-icon" />
      </div>
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        className="search-input"
        id="search"
        placeholder="Search GitHub username..."
        autoComplete="off"
        spellCheck="off"
      />
      <span className={`search-error ${userNotFound ? "" : "hidden"} `}>
        No results
      </span>
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default Search;
