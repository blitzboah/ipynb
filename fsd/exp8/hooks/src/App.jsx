import { useState, useEffect, useContext, useRef, createContext } from 'react';
import './App.css';

const CountContext = createContext();

function Counter({ count, setCount }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div className="card">
      <button ref={buttonRef} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <p>Count is {count}</p>
    </div>
  );
}

function DisplayCount() {
  const count = useContext(CountContext);
  return <h2>Current Count from Context: {count}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <h1>Counter with Hooks</h1>
      <Counter count={count} setCount={setCount} />
      <DisplayCount />
    </CountContext.Provider>
  );
}

export default App;