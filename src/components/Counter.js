import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    return (
        <>
            <p>You've clicked {count} times</p>
            <button onClick={updateCount}>Click me</button>
        </>
    );
}
