import { useState } from "react";

function Counter() {
  const initialCounterState = 0;
  const [counterValue, setCounterValue] = useState(initialCounterState);

  const increment = () => setCounterValue((prevState) => prevState + 1);

  const decrement = () => setCounterValue((prevState) => prevState - 1);

  const reset = () => setCounterValue(initialCounterState);

  return (
    <div>
      <p>{counterValue}</p>
      <button onClick={increment}>add 1</button>
      <button onClick={decrement}>subtract 1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
