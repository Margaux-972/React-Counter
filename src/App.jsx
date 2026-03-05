import { useState } from "react";
import calculator from "./assets/calc.png";
import plusSign from "./assets/plus.png";
import minusSign from "./assets/minus.png";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <img src={calculator} alt="calc" />
        <h1>React Counter</h1>
      </header>
      <section>
        <div className="button">
          <div className="minus">
            {counter !== 0 && (
              <button onClick={() => setCounter((counter) => counter - 1)}>
                <img src={minusSign} alt="-" />
              </button>
            )}
          </div>
          <p>{counter}</p>
          <div className="plus">
            {counter !== 10 && (
              <button onClick={() => setCounter((counter) => counter + 1)}>
                <img src={plusSign} alt="+" />
              </button>
            )}
          </div>
        </div>
        <button className="reset" onClick={() => setCounter((counter) => 0)}>
          Reset
        </button>
      </section>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Margaux</span>
        </p>
      </footer>
    </>
  );
}

export default App;
