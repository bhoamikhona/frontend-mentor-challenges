import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;
