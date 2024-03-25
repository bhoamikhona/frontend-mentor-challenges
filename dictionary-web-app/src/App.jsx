import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const getData = async function () {
    try {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/blue"
      );

      console.log("response", response);

      const data = response.data;
      console.log("response.data", data);

      const status = response.status;
      console.log("response.status", status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
