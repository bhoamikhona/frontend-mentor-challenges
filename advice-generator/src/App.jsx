import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNum, setAdviceNum] = useState(0);

  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setAdviceNum(data.slip.id);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <span className="advice-num">advice #{adviceNum}</span>
        <p className="advice-message">{advice}</p>
        <picture>
          <source
            media="(max-width: 37.5em)"
            srcset="./images/pattern-divider-mobile.svg"
          />
          <img
            src="./images/pattern-divider-desktop.svg"
            alt="divider"
            role="presentation"
            className="divider"
          />
        </picture>
        <button className="btn" onClick={getAdvice}>
          <img src="./images/icon-dice.svg" alt="dice" />
        </button>
      </div>
      <div class="attribution">
        <p>
          Challenge by{" "}
          <a
            className="attribution--link"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="attribution--link"
            href="https://www.frontendmentor.io/profile/bhoamikhona"
            target="_blank"
          >
            Bhoami K Khona
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
