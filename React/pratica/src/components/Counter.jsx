import { useState } from "react";

const Counter = () => {
    const [count, setCounter] = useState(0);

    const Plus = () => {
        setCounter(count + 1)
    }

    const Subtract = () => {
        setCounter(count - 1)
    }

    return (
        <div>
            <h1>Number: {count}</h1>
            <div>
                <button onClick={Plus}>Increment</button>
                <button onClick={Subtract}>Decrement</button>
            </div>
        </div>
    )
};

export default Counter;