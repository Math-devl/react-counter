import { useState } from "react";

import "./App.css";
import Increment from "./components/Increment";

const App = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <p>React Counter</p>
      </header>
      <main>
        <div>
          <p>{counter}</p>
          <Increment counter="counter" setCounter="setCounter" />
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            ---
          </button>
          <button
            onClick={() => {
              setCounter((counter = 0));
            }}
          >
            reset
          </button>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
