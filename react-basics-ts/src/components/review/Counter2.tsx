import { useState } from "react";
import NewButton from "./Button2";

function Counter2() {
  const[count, setCount] = useState<number>(0);
  const MAX = 10;
  const MIN = -10;

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > MIN) {
      setCount(count -1);
    }
  };
  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <NewButton text="+1" onClick={increment} color="green" />
      <NewButton text="-1" onClick={decrement} color="blue"/>
      <NewButton text="Reset" onClick={reset} color="orange" />
    </div>
  );
}

export default Counter2;