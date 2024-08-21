import { useState } from "react";

import "./App.css";

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
          <button
            onClick={() => {
              setCounter(counter++);
            }}
          >
            +++
          </button>
          <button
            onClick={() => {
              setCounter(counter--);
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
