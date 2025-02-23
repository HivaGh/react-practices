import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [counter, setCounter] = useState(100);
  return (
    <div>
      <button
        style={{ background: "gray" }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      {"  " + counter + "  "}
      <button
        style={{ background: "gray" }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
