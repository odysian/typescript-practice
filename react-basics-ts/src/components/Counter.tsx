import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    const incremenet = () => {
        setCount(count + 2);
    };

    const decrement = () => {
        setCount(count -2);
    };

    const reset = () => {
        setCount(0);
    };
    const plusFive = () => {
        setCount(count + 5);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={plusFive}>+5</button>
            <button onClick={incremenet}>+2</button>
            <button onClick={decrement}>-2</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;