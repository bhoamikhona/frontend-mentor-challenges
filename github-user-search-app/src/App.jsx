import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import Main from "./components/Main/Main.jsx";
import { useState } from "react";
import moment from "moment";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  return (
    <div className="app">
      <Header />
      <Search
        setIsLoading={setIsLoading}
        setData={setData}
        setUserNotFound={setUserNotFound}
        userNotFound={userNotFound}
      />
      {isLoading && (
        <div className="loading-animation-container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0079ff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            className="loading-animation"
          />
        </div>
      )}

      {!isLoading && !userNotFound && Object.keys(data).length > 0 && (
        <Main
          avatar_url={data.avatar_url}
          bio={data.bio}
          blog={data.blog}
          company={data.company}
          created_at={moment(data.created_at).format("DD MMM YYYY")}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter_username={data.twitter_username}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
